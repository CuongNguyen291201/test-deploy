import { useRouter } from "next/router";
import { PropsWithoutRef, useEffect } from "react";
import { useSelector } from "../../app/hooks";
import { ROUTER_LEARN } from "../../app/router";
import { wrapper } from "../../app/store";
import { apiGetAppSettingDetails } from "../../features/appInfo/appInfo.api";
import { setAppInfo } from "../../features/appInfo/appInfo.slice";
import Layout from "../../features/common/Layout";
import { apiGetEntryTopicsBySlugs } from "../../features/study/topic.api";
import { setCurrentTopic, setRootTopic, setSubTopic } from "../../features/study/topic.slice";
import StudyView from "../../features/study/StudyView";

type LearnPageProps = {
  slug: string;
  path: string;
}

const LearnPage = (props: PropsWithoutRef<LearnPageProps>) => {
  const appInfo = useSelector((state) => state.appInfos.appInfo);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      if (router.asPath !== props.path) {
        router.replace(props.path, props.path, { shallow: true });
      }
    }
  }, [router.asPath, router.isReady]);

  return (<Layout {...appInfo} slug={props.slug}>
    <StudyView />
  </Layout>)
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ query, store, res }) => {
  const slugs = query.slugs as string[];
  if (!slugs.length) return { notFound: true }
  
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  if (!appName) {
    throw new Error("appName is not defined");
  }  
  const appInfo = await apiGetAppSettingDetails(appName);
  store.dispatch(setAppInfo(appInfo));

  const { error, notFound, data } = await apiGetEntryTopicsBySlugs({ slugs, local: true });
  if (error) throw new Error("Some thing went wrong");
  if (notFound) {
    return { notFound: true }
  }
  const [currentTopic] = data.slice(-1);
  const rootTopic = data[0];

  store.dispatch(setRootTopic(rootTopic));
  store.dispatch(setCurrentTopic(currentTopic));
  if (data.length === 3) {
    const [subTopic] = data.slice(-2, -1);
    store.dispatch(setSubTopic(subTopic));
  } 

  const slug = `${ROUTER_LEARN}/${data.slice(0, data.length - 1).map(({ slug }) => slug).join("/")}`;
  const path = `/${slug}/${data[data.length - 1].slug}`;

  return {
    props: {
      slug,
      path
    }
  }
});

export default LearnPage;