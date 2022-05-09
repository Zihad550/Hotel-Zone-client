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
import useAllContext from "hooks/useAllContext";
import * as React from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user } = useAllContext();
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
        (location.pathname.startsWith("/dashboard") && { display: "none" }) ||
        (location.pathname === "/"
          ? { background: "#80808030" }
          : { background: "gray" })
      }
      sx={{ boxShadow: 0, zIndex: 10, color: "white" }}
    >
      <Container maxWidth="xl">
        {/* ===============
        mobile menu
        ================== */}
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: "white" }}
          >
            Hotel Zone
          </Typography>

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

          {/* ==============
          large screen menu
          ================ */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Hotel Zone
          </Typography>
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
              {user ? (
                <div>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      onClick={() => navigate("/dashboard")}
                      textalign="center"
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
