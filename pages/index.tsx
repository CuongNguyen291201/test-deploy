import { PropsWithoutRef, useEffect } from "react";
import { useDispatch, useSelector } from "../app/hooks";
import { wrapper } from "../app/store";
import { apiGetAppSettingDetails, apiGetSEOInfo } from "../features/appInfo/appInfo.api";
import { setAppInfo, setSEOInfo } from "../features/appInfo/appInfo.slice";
import Header from "../features/common/Header";
import Layout from "../features/common/Layout";
import WebSeo from "../modules/share/model/webSeo";

type IndexPageProps = {
  seoInfo: WebSeo
}

const IndexPage = (props: PropsWithoutRef<IndexPageProps>) => {
  const { seoInfo } = props;
  const dispatch = useDispatch();
  const { favicon, siteAddress } = useSelector((state) => state.appInfos.appInfo);
  const { titleH1, summary, ...seoProps } = seoInfo;

  useEffect(() => {
    dispatch(setSEOInfo(seoInfo))    
  },[]);

  return (<Layout siteAddress={siteAddress} favicon={favicon} {...seoProps}>
    <Header />
  </Layout>);
}

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(({ store }) => {
//   store.dispatch({ type: "INCREMENT" });
//   return {
//     props: {}
//   }
// });

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  if (!appName) throw new Error("appName is not defined");
  const appInfo = await apiGetAppSettingDetails(appName);
  store.dispatch(setAppInfo(appInfo));
  if (!appInfo) return {
    notFound: true
  }
  const seoInfo = await apiGetSEOInfo(appInfo._id, "/");
  return {
    props: {
      seoInfo
    },
    revalidate: 600
  }
});

export default IndexPage;