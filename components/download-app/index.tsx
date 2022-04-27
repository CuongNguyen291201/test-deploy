import { Container, Grid, Link } from '@mui/material'
import { useSelector } from '../../app/hooks'
import AppDownloadButton from '../../features/common/AppDownloadButton'
import appConfigs from "../../config/appConfigs.json";
import './style.scss'

const DownloadApp = () => {
  const { appName, linkGooglePlay, linkAppStore } = useSelector((state) => state.appInfos.appInfo);
  const appConfig = appConfigs[appName];

  return (
    <div id="download-app">
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="end">
          <Grid item xs={12} sm={4} md={4}>
            <img src="/assets/image/download-app.png" alt="" className="img-download" />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <div className="content-direction">
              <h3 className="title">Download the app and do</h3>
              <div className="description">Do <strong style={{ textTransform: "uppercase" }}>{appName}</strong> Test On Our Website Now!</div>
              <div className="btn-link">
                <div className="btn-hover">
                  <div>Download The App <i className="fas fa-chevron-down"></i></div>
                  <div className="link-download-app">
                    <AppDownloadButton
                      source="chplay"
                      link={linkGooglePlay}
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
                <Link href="/test" underline="none" className="btn-test">Do The <span style={{ textTransform: "uppercase" }}>{appName}</span> Test</Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default DownloadApp