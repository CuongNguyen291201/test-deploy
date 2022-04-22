import { AppBar, Container } from "@mui/material";
import { useSelector } from "../../app/hooks";
import Link from "next/link"
import appConfigs from "../../config/appConfigs.json";
import "./Header.scss";
import AppDownloadButton from "./AppDownloadButton";

const Header = () => {
  const { appLogo, appName, linkGooglePlay, linkAppStore, siteAddress } = useSelector((state) => state.appInfos.appInfo);
  const appConfig = appConfigs[appName];
  return <AppBar position="sticky" color="transparent" elevation={0}>
    <div className="app-bar-header" style={{
      background: appConfig.navBackground
    }}>
      <Container maxWidth="xl">
        <div className="app-bar-header-nav">
          <div style={{ height: 82.5 }}>
            <Link href={process.env.NODE_ENV === "production" ? siteAddress : '/'}>
              <a><img src={appLogo} alt="logo" style={{ width: "auto", height: "100%" }} /></a>
            </Link>
          </div>

          <div className="app-bar-header-app-buttons">
            <AppDownloadButton
              source="chplay"
              link={linkGooglePlay}
              linkStyle={{ marginRight: 15 }}
              color={appConfig.appTextColor}
              hoverColor={appConfig.appHoverColor}
              background={appConfig.appBackground}
              hoverBackround={appConfig.appHoverBackground}
              border={appConfig.appBorder}
            />
            <AppDownloadButton
              source="appstore"
              link={linkAppStore}
              color={appConfig.appTextColor}
              hoverColor={appConfig.appHoverColor}
              background={appConfig.appBackground}
              hoverBackround={appConfig.appHoverBackground}
              border={appConfig.appBorder}
            />
          </div>
        </div>
      </Container>
    </div>
  </AppBar>
}

export default Header;