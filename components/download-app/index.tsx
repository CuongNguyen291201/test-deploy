import { Grid, Link } from '@mui/material'
import ContainerWeb from '../common/container/Container'
import './style.scss'

const DownloadApp = (props: { website?: string }) => {
    const { website } = props;
    return (
        <div id="download-app">
            <ContainerWeb>
                <Grid container spacing={4} alignItems="end">
                    <Grid item xs={12} sm={4} md={4}>
                        <img src="/assets/image/download-app.png" alt="" className="img-download"/>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8}>
                        <div className="content-direction">
                            <h3 className="title">Download the app and do</h3>
                            <div className="description">Do <strong>{website}</strong> Test On Our Website Now!</div>
                            <div className="btn-link">
                                <div className="btn-download">Download The App <i className="fas fa-caret-down"></i></div>
                                <Link href="/test" underline="none" className="btn-test">Do The {website} Test</Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </ContainerWeb>
        </div>
    )
}

export default DownloadApp