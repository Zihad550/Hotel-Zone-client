import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import logoSrc from "assets/images/logo.png";
import useAuth from "hooks/useAuth";
import React from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user } = useAuth();
  const { name, role } = user;

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("hotelZoneUser");
    window.location.reload();
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Blogs", link: "/blogs" },
    { id: 3, name: "About Us", link: "/about" },
    { id: 4, name: "Contact Us", link: "/contact" },
  ];

  return (
    <AppBar
      position="relative"
      style={
        (location.pathname.startsWith("/userDashboard") && {
          display: "none",
        }) ||
        (location.pathname.startsWith("/adminDashboard") && {
          display: "none",
        }) ||
        (location.pathname === "/"
          ? { background: "#80808030" }
          : {
              background: "gray",
            })
      }
      sx={{ boxShadow: 0, zIndex: 10, color: "white" }}
    >
      <Container maxWidth="xl">
        {/* ===============
        mobile menu
        ================== */}
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
                <MenuItem key={page.id} onClick={() => navigate(page.link)}>
                  <Typography textalign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* website logo */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <img src={logoSrc} alt="" />
          </Box>

          {/* ==============
          large screen menu
          ================ */}

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img src={logoSrc} alt="logo" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => navigate(page.link)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  fontSize: 17,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/*================
           user menu
           ================== */}
          <Box sx={{ flexGrow: 0, alignItems: "center", display: "flex" }}>
            <Typography sx={{ mr: 1, fontSize: { md: 20 } }} variant="body1">
              {name}
            </Typography>
            <Tooltip title={role ? `Logged as ${role}` : `User menu`}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="user" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user.name ? (
                <div>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      onClick={() =>
                        navigate(role ? "/adminDashboard" : "/userDashboard")
                      }
                      textAlign="center"
                    >
                      Dashboard
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography onClick={handleLogOut} textalign="center">
                      Log out
                    </Typography>
                  </MenuItem>
                </div>
              ) : (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    onClick={() => navigate("/login")}
                    textalign="center"
                  >
                    Log in
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
