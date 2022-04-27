import { Container, Grid, Link } from '@mui/material'
import WebFunctions from './web-functions'
import AppFunctions from './app-functions'
import "./style.scss"
import { useSelector } from '../../app/hooks'

const link = ''

const Functions = () => {
  const { appName } = useSelector((state) => state.appInfos.appInfo);

  return (
    <div id="functions">
      <Container maxWidth="xl">
        <div id="web-function">
          <h2 className="title-function">Web Functions</h2>
          <Grid container spacing={2} alignItems="end">
            <Grid item sm={12} lg={6}>
              <img src="/assets/image/img-web-function.png" style={{ width: "100%" }} />
            </Grid>
            <Grid item sm={12} lg={6}>
              <WebFunctions />
            </Grid>
          </Grid>
          <div className="go-test">
            <Link href={link || "/test"} underline="none" className="btn-go-test"><span className="btn-content">DO {appName || "CDL"} TEST ON OUR WEBSITE NOW!</span> <img src="/assets/image/icon-btn.png" /></Link>
          </div>
        </div>
        <div id="app-function">
          <h2 className="title-function">App Functions</h2>
          <Grid container spacing={6}>
            {[1, 2, 3, 4].map(item => (
              <Grid item xs={12} md={6} lg={3} key={item}>
                <AppFunctions location={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Functions