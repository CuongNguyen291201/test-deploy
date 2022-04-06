import Head from "next/head";
import { PropsWithChildren } from "react";
import AppSetting from "../../modules/share/model/appSetting";
import Header from "./Header";

export type LayoutProps = {
  slug?: string;
} & {
    [key in keyof AppSetting]?: any;
  }

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { children,
    title,
    keywords,
    description,
    favicon,
    slug,
    siteAddress,
    appLogo,
    linkAppStore,
    linkGooglePlay
  } = props;

  const canonical = !!slug ? `${siteAddress || 'http://localhost:3000'}/${slug}` : '';

  return (<>
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords || ''} />
      <meta name="description" content={description || ''} />
      <meta name="title" content={title} />
      <link rel="shortcut icon" href={favicon || '/favicon.ico'} />
      {!!canonical && <link rel="canonical" href={canonical} />}
    </Head>
    <Header />
    {children}
    <style jsx global>
      {`
        body {
          background-color: #F2F3F7 !important;
        }
        .plain-anchor-tag {
          text-decoration: none;
          color: initial;
        }
      `}
    </style>
  </>)
}

export default Layout;