import { useState } from "react";
import { Box, Container, IconButton, InputBase, Menu, MenuItem, Typography, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { withStyles } from "@mui/styles";
import appConfigs from "../../config/appConfigs.json";
import "./style.scss";

const pages = ["Home", "Practice", "MockTest", "Blog"];


const _Search = withStyles({
  root: {

  }
})(InputBase);

const Navigation = () => {
  const { cdl } = appConfigs;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log('dd', search)
  }

  return (
    <div id="web-nav" style={{ background: cdl.menuBackground }}>
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" sx={{ color: "#fff" }}
            onClick={(event) => setAnchorElNav(event.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <Menu id="menu-appbar" anchorEl={anchorElNav} keepMounted open={Boolean(anchorElNav)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            onClose={() => setAnchorElNav(null)}
            sx={{ display: { xs: 'block', md: 'none' }, }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => setAnchorElNav(null)}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: "100px", height: "60px" }}>
          {pages.map((page) => (
            <Link
              key={page}
              href="#" underline="none"
              onClick={() => setAnchorElNav(null)}
              sx={{ my: 2, display: 'block', textAlign: 'left', padding: '0', fontWeight: 700, color: cdl.menuTextColor }}
            >
              {page}
            </Link>
          ))}
        </Box>
        <div className="search">
          <div className="icon-search"><SearchIcon onClick={handleSearch} /></div>
          <InputBase placeholder="Search"  className="search-post" onChange={(e) => setSearch(e.currentTarget.value)} />
        </div>
      </Container>
    </div>
  )
}

export default Navigation