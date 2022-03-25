import { AppBar } from "@mui/material";
import Head from "next/head";
import { PropsWithChildren } from "react";
import AppSetting from "../../modules/share/model/appSetting";
import MainMenu from "./Menu";

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
    <AppBar position="static" color="transparent" elevation={0}>
      <MainMenu logo={appLogo} homeHref={process.env.NODE_ENV === "production" ? siteAddress : "/"} />
    </AppBar>
    {children}
  </>)
}

export default Layout;