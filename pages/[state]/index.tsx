import { PropsWithoutRef, useEffect } from "react";
import { useDispatch, useSelector } from '../../app/hooks';
import { wrapper } from '../../app/store';
import { apiGetAppSettingDetails, apiGetSEOInfo } from '../../features/appInfo/appInfo.api';
import { setAppInfo, setSEOInfo } from '../../features/appInfo/appInfo.slice';
import Layout from "../../features/common/Layout";
import WebSeo from '../../modules/share/model/webSeo';
import HeroSectionState from "../../components/hero-section-state";
import ChoosePractice from "../../components/choose-practice";
import MainState from "../../components/main-state";
import Footer from "../../components/footer";
import Header from "../../features/common/Header";
import state from "../../config/state.json";
import { apiGetTopicByParentId } from "../../features/study/topic.api";
import { setTopicByParentId } from "../../features/study/topic.slice";

type IndexPageProps = {
  seoInfo: WebSeo,
}

const StatePage = (props: PropsWithoutRef<IndexPageProps>) => {
  const { seoInfo } = props;
  const dispatch = useDispatch();
  const { favicon, siteAddress } = useSelector((state) => state.appInfos.appInfo);
  const { titleH1, summary, seoTitle, ...seoProps } = seoInfo;

  useEffect(() => {
    dispatch(setSEOInfo(seoInfo))
  }, []);

  return (
    <Layout siteAddress={siteAddress} favicon={favicon} title={seoTitle} {...seoProps}>
      <Header />
      <HeroSectionState />
      <ChoosePractice />
      <MainState />
      <Footer />
    </Layout>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store, params }) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  if (!appName) throw new Error("appName is not defined");
  const appInfo = await apiGetAppSettingDetails(appName);
  store.dispatch(setAppInfo(appInfo));
  if (!appInfo) return {
    notFound: true
  }
  const seoInfo = await apiGetSEOInfo(appInfo._id, "/");
  const stateAlabama = await apiGetTopicByParentId({ parentId: "6257ee9ea61e7d1328462395" });
  store.dispatch(setTopicByParentId(stateAlabama));
  return {
    props: {
      seoInfo
    },
    revalidate: 600
  }
});

export const getStaticPaths = async () => {
  const paths = state.cdl.map(item => `/${item.slug}`);
  return {
    paths,
    fallback: false
  }
}

export default StatePage