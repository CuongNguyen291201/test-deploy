import { Container, Grid, Link } from '@mui/material'
import { useSelector } from '../../app/hooks'
import appConfig from '../../config/appConfigs.json'
import './style.scss'

const Footer = () => {
    const { appLogo, siteAddress } = useSelector((state) => state.appInfos.appInfo);
    const { menu } = appConfig;
    return (
        <div id="footer">
            <div className="main-footer">
                <Container maxWidth="xl">
                    <Grid container spacing={2} textAlign="left">
                        <Grid item xs={12} md={2} lg={4}>
                            <Link href={process.env.NODE_ENV === "production" ? siteAddress : '/'}>
                                <a><img src={appLogo} alt="logo" style={{ width: "auto", height: "100%" }} /></a>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={10} lg={8} className="menu">
                            <Grid container spacing={2}>
                                {menu.map((item, index) => (
                                    <Grid item xs={3} key={index}><Link href={index === 0 ? (process.env.NODE_ENV === "production" ? siteAddress : '/') : item.slug}>{item.name}</Link></Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="social">
                <Container maxWidth="xl">
                    <Grid container spacing={2} textAlign="center">
                        <Grid item xs={6} md={8} lg={11} className="connect">Connect with us</Grid>
                        <Grid item xs={6} md={4} lg={1}>
                            <Grid container spacing={6} textAlign="center">
                                <Grid item xs={6}>
                                    <img src="/assets/social/youtube.png" alt="" />
                                </Grid>
                                <Grid item xs={6}>
                                    <img src="/assets/social/facebook.png" alt="" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Footer