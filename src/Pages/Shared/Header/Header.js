import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ReviewsIcon from "@mui/icons-material/Reviews";
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
import * as React from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const location = useLocation();
  console.log(location);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userExists, setUserExists] = React.useState(false);
  // const { user, logOut } = useAuth();
  // const { displayName, photoURL, email } = user;
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("hotelZoneUser");
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

  const savedUser = JSON.parse(localStorage.getItem("hotelZoneUser"));
  console.log(savedUser);

  React.useEffect(() => {
    setUserExists(false);
    if (savedUser) {
      setUserExists(true);
      fetch("https://polar-island-87071.herokuapp.com/users/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } else {
      setUserExists(false);
    }
  }, []);

  return (
    <AppBar
      position="relative"
      color={
        location.pathname === "/home" || location.pathname === "/"
          ? "transparent"
          : "primary"
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

          {/*================
           user menu
           ================== */}

          <Box sx={{ flexGrow: 0, alignItems: "center", display: "flex" }}>
            <Typography sx={{ mr: 1, fontSize: { md: 20 } }} variant="body1">
              {/* {displayName || email} */}
            </Typography>
            <Tooltip title="Open settings">
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
              {userExists ? (
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
