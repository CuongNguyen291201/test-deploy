import { Container, Dialog, DialogContent, DialogTitle, Grid, Link } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useSelector } from "../../app/hooks";
import state from "../../config/state.json";
import "./style.scss";
import { withStyles } from "@mui/styles";

const HeroSection = () => {
  const { seoInfo } = useSelector((state) => state.appInfos)
  const [open, setOpen] = useState<boolean>(false);

  const _Dialog = withStyles({
    paper: {
      maxWidth: "none",
      width: "60vw",
    }
  })(Dialog)

  return (
    <div id="hero-section">
      <Container maxWidth="xl">
        <h1 className="title-h1">{seoInfo?.titleH1}</h1>
        <div className="summary" dangerouslySetInnerHTML={{ __html: seoInfo?.summary }}></div>
        <div className="choose-state" onClick={() => setOpen(!open)}>Select Your State</div>
      </Container>
      <_Dialog open={open} onClose={() => setOpen(!open)}>
        <DialogTitle sx={{ background: "#00C9E4", color: "#fff" }}>
          <div style={{ textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="title-dialog" style={{ flex: 1, fontWeight: 600, fontSize: "36px" }}>Select your state</div>
            <CloseIcon onClick={() => setOpen(!open)} sx={{ cursor: "pointer" }} />
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="dialog-content-state">
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} lg={3} sx={{ padding: "10px 0 0 60px" }}>
                {state.cdl.slice(0, 13).map((item, index) => (
                  <div key={index} className="state-item">
                    <Link href={`/${item.slug}`} underline="none" sx={{ color: "#575757", fontSize: "20px", fontWeight: 500 }}>{item.name}</Link>
                  </div>
                ))}
              </Grid>
              <Grid item xs={12} md={6} lg={3}  sx={{ padding: "10px 0 0 60px" }}>
                {state.cdl.slice(13, 26).map((item, index) => (
                  <div key={index} className="state-item">
                    <Link href={`/${item.slug}`} underline="none" sx={{ color: "#575757", fontSize: "20px", fontWeight: 500 }}>{item.name}</Link>
                  </div>
                ))}
              </Grid>
              <Grid item xs={12} md={6} lg={3}  sx={{ padding: "10px 0 0 60px" }}>
                {state.cdl.slice(26, 39).map((item, index) => (
                  <div key={index} className="state-item">
                    <Link href={`/${item.slug}`} underline="none" sx={{ color: "#575757", fontSize: "20px", fontWeight: 500 }}>{item.name}</Link>
                  </div>
                ))}
              </Grid>
              <Grid item xs={12} md={6} lg={3}  sx={{ padding: "10px 0 0 60px" }}>
                {state.cdl.slice(39, 51).map((item, index) => (
                  <div key={index} className="state-item">
                    <Link href={`/${item.slug}`} underline="none" sx={{ color: "#575757", fontSize: "20px", fontWeight: 500 }}>{item.name}</Link>
                  </div>
                ))}
              </Grid>
            </Grid>
          </div>
        </DialogContent>
      </_Dialog>
    </div>
  )
}

export default HeroSection