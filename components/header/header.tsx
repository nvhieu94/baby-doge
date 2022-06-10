import React from "react";
import { Box, Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import styles from "@/styles/Header.module.scss";
import {Link} from 'react-scroll'
import {ModalLucky} from '../modal-lucky'
const pages = [
  {
    title: "About",
    key: 'about'
  },
  {
    title: "Tokenomics",
    key: 'reward'
  },
  {
    title: "Charity",
    key: 'charity'
  },
  {
    title: "Documents",
    key: 'document'
  },
  {
    title: "Roadmaps",
    key: 'roadmaps'
  },
  {
    title: "Contact",
    key: 'contact'
  },
];



const Header = () => {

 
  const [openModalLucky, setOpenModalLucky] = React.useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenModalLucky = () => {
    setOpenModalLucky(true);
   
  };
  const onCloseModalLucky = () => {
    setOpenModalLucky(false);
  };

  return (
    <AppBar position="static" className={styles.header}>
      <Container className={styles.header_container}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                   <Link key={page.key}  to={page.key} spy={true} smooth={true}><Typography textAlign="center">{page.title}</Typography></Link>
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,

              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box className={styles.navbar} sx={{ flexGrow: 1,justifyContent:"center", display: { xs: "none", md: "flex" } }}>
              <Button
                  className={styles.navbar_item}
                  variant="outlined"
                    onClick={handleOpenModalLucky}
                    sx={{ my: 2, color:'red', background:'red' }}
                  >
                   Lucky Wheel
                  </Button>
            {pages.map((page) => (
              <Link key={page.key}  to={page.key} spy={true} smooth={true}>
                 <Button
                  className={styles.navbar_item}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, }}
                  >
                    {page.title}
                  </Button>
              </Link>
           
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }} className={styles.actions}>
          <Button className={styles.btn_buy_now}>BUY NOW</Button>
           
          </Box>
        </Toolbar>
      </Container>
      <ModalLucky  open={openModalLucky} onClose={onCloseModalLucky} />
    </AppBar>
  );
};
export default Header;
