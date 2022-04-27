import { Container, Dialog, DialogContent, DialogTitle, Grid, Link } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useSelector } from "../../app/hooks";
import state from "../../config/state.json";
import "./style.scss";

const HeroSection = () => {
  const { seoInfo } = useSelector((state) => state.appInfos)
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div id="hero-section">
      <Container maxWidth="xl">
        <h1 className="title-h1">{seoInfo?.titleH1}</h1>
        <div className="summary" dangerouslySetInnerHTML={{ __html: seoInfo?.summary }}></div>
        <div className="choose-state" onClick={() => setOpen(!open)}>Select Your State</div>
      </Container>
      <Dialog open={open} onClose={() => setOpen(!open)} maxWidth="xl">
        <DialogTitle sx={{ background: "#00C9E4", color: "#fff" }}>
          <div style={{ textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="title-dialog" style={{ flex: 1, fontWeight: 600, fontSize: "36px" }}>Select your state</div>
            <CloseIcon onClick={() => setOpen(!open)} sx={{ cursor: "pointer" }}/>
          </div>
        </DialogTitle>
        <DialogContent>
          <Grid className="dialog-state" container spacing={1}>
            {state.cdl.map((item, index) => (
              <Grid key={index} item xs={6} md={3} className="state-item" sx={{ padding: "10px 0 0 60px" }}>
                <Link href={`/${item.slug}`} underline="none" sx={{ color: "#575757", fontSize: "20px", fontWeight: 500 }}>{item.name}</Link>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default HeroSection