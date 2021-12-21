import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, logOut } = useAuth();
  const { displayName, photoURL, email } = user;
  const navigate = useNavigate();

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

  return (
    <AppBar position="fixed" sx={{ mb: 20 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Hotel Zone
          </Typography>

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
              <MenuItem onClick={() => navigate("/home")}>
                <Typography textalign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate("/reviews")}>
                <Typography textalign="center">Reviews</Typography>
              </MenuItem>

              <MenuItem onClick={() => navigate("/dashboard")}>
                <Typography textalign="center">Dashboard</Typography>
              </MenuItem>
              {email ? (
                <MenuItem onClick={logOut} textalign="center">
                  <Typography>Log out</Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={() => navigate("/login")}>
                  <Typography textalign="center">Log in</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Hotel Zone
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => navigate("/home")}
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                alignItems: "center",
                fontSize: 17,
              }}
            >
              Home <HomeIcon sx={{ fontSize: 30, ml: 1 }} />
            </Button>
            <Button
              onClick={() => navigate("/reviews")}
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                alignItems: "center",
                fontSize: 17,
              }}
            >
              Reviews <ReviewsIcon sx={{ fontSize: 30, ml: 1 }} />
            </Button>
          </Box>

          {/* user menu */}
          <Box sx={{ flexGrow: 0, alignItems: "center", display: "flex" }}>
            <Typography sx={{ mr: 1, fontSize: 20 }} variant="body1">
              {displayName || email}
            </Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="user" src={photoURL} />
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
              {email ? (
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
                    <Typography onClick={logOut} textalign="center">
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
