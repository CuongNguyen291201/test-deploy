import { AppBar, Container, Grid, useMediaQuery, Theme } from "@mui/material";
import classNames from "classnames";
import Link from "next/link";
import { useSelector } from "../../app/hooks";
import AppDownloadButton from "../common/AppDownloadButton";
import "./StudyHeader.scss";

const StudyHeader = () => {
  const appInfo = useSelector((state) => state.appInfos.appInfo);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (<AppBar position="static" color="transparent" elevation={0}>
    <Container maxWidth="xl">
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={3}>
          {/* LOGO */}
          <div style={{ height: 100 }}>
            <Link href={process.env.NODE_ENV === "production" ? appInfo?.siteAddress : '/'}>
              <a><img src={appInfo?.appLogo} alt="logo" style={{ width: "auto", height: "100%" }} /></a>
            </Link>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className={classNames("app-buttons", isMobile ? "hide-on-mobile" : "")}>
            {/* CH Play & AppStore */}
            <AppDownloadButton
              source="chplay"
              link={appInfo?.linkGooglePlay}
              linkStyle={{ marginRight: "30px" }}
              color="#000000"
              hoverColor="#ffffff"
              background="#ffffff"
              hoverBackround="#2C3546"
            />
            <AppDownloadButton
              source="appstore"
              link={appInfo?.linkAppStore}
              color="#000000"
              hoverColor="#ffffff"
              background="#ffffff"
              hoverBackround="#2C3546"
            />
          </div>
        </Grid>

        <Grid item xs={3}>
          {/* Menu: HOME & BLOG */}
          <div className={classNames("desktop-menu", isMobile ? "hide-on-mobile" : "")} >
            <div className="desktop-menu-link"><Link href="/"><a className="plain-anchor-tag">Home</a></Link></div>
            <div className="desktop-menu-link"><Link href="/blog"><a className="plain-anchor-tag">Blog</a></Link></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  </AppBar>);
}

export default StudyHeader;