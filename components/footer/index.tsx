import { Grid, Link } from '@mui/material'
import { useSelector } from '../../app/hooks'
import ContainerWeb from '../common/container/Container'
import './style.scss'

const Footer = () => {
    const { appLogo, siteAddress } = useSelector((state) => state.appInfos.appInfo);
    return (
        <div id="footer">
            <div className="main-footer">
                <ContainerWeb>
                    <Grid container spacing={2} textAlign="left">
                        <Grid item xs={12} md={2} lg={4}>
                            <Link href={process.env.NODE_ENV === "production" ? siteAddress : '/'}>
                                <a><img src={appLogo} alt="logo" style={{ width: "auto", height: "100%" }} /></a>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={10} lg={8} className="menu">
                            <Grid container spacing={2}>
                                <Grid item xs={3}><Link href={process.env.NODE_ENV === "production" ? siteAddress : '/'}>Home</Link></Grid>
                                <Grid item xs={3}><Link href="#pratice">Practice</Link></Grid>
                                <Grid item xs={3}><Link href="/mock-test">Mock Test</Link></Grid>
                                <Grid item xs={3}><Link href="/blog">Blog</Link></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ContainerWeb>
            </div>
            <div className="social">
                <ContainerWeb>
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
                </ContainerWeb>
            </div>
        </div>
    )
}

export default Footer