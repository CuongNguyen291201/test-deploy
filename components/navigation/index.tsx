import { useEffect, useState } from "react";
import { Box, Container, IconButton, InputBase, Menu, MenuItem, Typography, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import appConfigs from "../../config/appConfigs.json";
import "./style.scss";
import { getMenu } from "../../utils/api/menuApi";

const Navigation = () => {
  const { cdl, menu } = appConfigs;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // getMenu().then((res) => console.log('dd', res))
  }, [])
  
  const handleSearch = () => {
    console.log('dd', search)
  }

  return (
    <div id="web-nav" style={{ background: cdl.menuBackground }}>
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" aria-controls="menu-appbar" aria-haspopup="true" sx={{ color: "#fff" }}
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
            {menu.map((item, index) => (
              <MenuItem key={index} onClick={() => setAnchorElNav(null)}>
                <Typography textAlign="center"><Link href={`${item.slug}`} underline="none">{item.name}</Link></Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box className="main-menu" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: "100px", height: "60px" }}>
          {menu.map((item, index) => (
            <Link
              key={index}
              href={`${item.slug}`} underline="none"
              onClick={() => setAnchorElNav(null)}
              sx={{ my: 2, display: 'block', textAlign: 'left', padding: '0', fontWeight: 700, color: cdl.menuTextColor }}
            >
              {item.name}
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