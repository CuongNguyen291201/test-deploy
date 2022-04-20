import { useRouter } from "next/router";
import { PropsWithoutRef, useEffect } from "react";
import { useDispatch, useSelector } from "../../app/hooks";
import { ROUTER_STUDY } from "../../app/router";
import { wrapper } from "../../app/store";
import { apiGetAppSettingDetails } from "../../features/appInfo/appInfo.api";
import { setAppInfo } from "../../features/appInfo/appInfo.slice";
import { registerUserId } from "../../features/auth/auth.slice";
import Layout from "../../features/common/Layout";
import StudyView from "../../features/study/StudyView";
import { apiGetEntryTopicsBySlugs } from "../../features/study/topic.api";
import { setCurrentTopic, setRootTopic, setSubTopic, setTopicList, setTopicLoading } from "../../features/study/topic.slice";
import { getRelaTopicList } from "../../features/study/topic.utils";

type LearnPageProps = {
  slug: string;
  path: string;
}

const LearnPage = (props: PropsWithoutRef<LearnPageProps>) => {
  const appInfo = useSelector((state) => state.appInfos.appInfo);
  const authLoading = useSelector((state) => state.authState.loading);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.isReady) {
      if (router.asPath !== props.path) {
        router.replace(props.path, props.path, { shallow: true });
      }
    }
  }, [router.asPath, router.isReady]);

  useEffect(() => {
    if (authLoading) {
      dispatch(registerUserId());
    }
  }, [authLoading]);

  return (<Layout {...appInfo} slug={props.slug}>
    <StudyView />
  </Layout>)
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ query, store }) => {
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
    store.dispatch(setSubTopic(subTopic))
    if (subTopic) {
      const subList = await getRelaTopicList(subTopic);
      store.dispatch(setTopicList({ data: subList, target: "sub" }));
    }
  }
  if (currentTopic) {
    const levelList = await getRelaTopicList(currentTopic);
    store.dispatch(setTopicList({ data: levelList, target: "current" }));
  }
  store.dispatch(setTopicLoading(false));
  const slug = `${ROUTER_STUDY}/${data.slice(0, data.length - 1).map(({ slug }) => slug).join("/")}`;
  const path = `/${slug}/${data[data.length - 1].slug}`;

  return {
    props: {
      slug,
      path
    }
  }
});

export default LearnPage;