import { useState } from "react";
import { alpha, AppBar, Box, Button, Container, IconButton, InputBase, Menu, MenuItem, Typography, TextField, OutlinedInput, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { withStyles } from "@mui/styles";
import { isCDL } from "../../utils/checkApp";
import appConfigs from "../../config/appConfigs.json";
import "./style.scss";
import styled from "@emotion/styled";

const pages = ["Home", "Practice", "MockTest", "Blog"];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "10opx",
  backgroundColor: "#005A74",
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: "10px",
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  border: "1px solid #0681A5",
  '& .MuiInputBase-input': {
    padding: "10px",
    // transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const Navigation = () => {
  const { cdl } = appConfigs;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  return (
    // <AppBar position="sticky" color="transparent" elevation={0}>
      <div id="web-nav" style={{ background: cdl.menuBackground }}>
        <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
          {/* <Box>
            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
              <SearchIconWrapper>
                <SearchIcon sx={{ color: cdl.menuTextColor }}/>
              </SearchIconWrapper>
            </Search>

          </Box> */}
        </Container>
      </div>
    // </AppBar>
  )
}

export default Navigation