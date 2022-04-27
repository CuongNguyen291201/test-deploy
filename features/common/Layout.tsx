import Head from "next/head";
import { PropsWithChildren } from "react";
import { mapMetaRobot } from "../../config/MapContraint";
import { META_ROBOT_INDEX_FOLLOW } from "../../modules/share/constraint";

export type LayoutProps = {
  slug?: string;
  title?: string;
  keywords?: string;
  description?: string;
  favicon?: string;
  siteAddress?: string;
  metaRobot?: number;
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { children,
    title,
    keywords,
    description,
    favicon,
    slug,
    siteAddress,
    metaRobot
  } = props;

  const canonical = !!slug ? `${siteAddress || 'http://localhost:3000'}/${slug === "/" ? "" : slug}` : '';

  return (<>
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords || ''} />
      <meta name="description" content={description || ''} />
      <meta name="title" content={title} />
      {typeof metaRobot !== "undefined" && <meta name="robots" content={mapMetaRobot[metaRobot]} />}
      <link rel="shortcut icon" href={favicon || '/favicon.ico'} />
      {!!canonical && <link rel="canonical" href={canonical} />}
    </Head>
    {children}
    <style jsx global>
      {`
        body {
          background-color: #fff !important;
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