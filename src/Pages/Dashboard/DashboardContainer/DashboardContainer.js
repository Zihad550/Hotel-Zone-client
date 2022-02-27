import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import { CircularProgress } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const drawerWidth = 240;

function DashboardContainer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
   // navigate
   const navigate = useNavigate();

  // useAuth
  const { admin, isLoading } = useAuth();
  console.log(admin)
  if(isLoading){
    return <CircularProgress/>
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      {/*============== 
          pages
      ================== */}
      <List>
        <ListItem button onClick={() => navigate("/home")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>

      <Divider />

      <List>
        {/* ================
      normal user pages
      ==================== */}
        {admin || (
          <>
            <ListItem button onClick={() => navigate("/dashboard/myReviews")}>
              <ListItemIcon>
                <AutoAwesomeIcon />
              </ListItemIcon>
              <ListItemText primary="My Reviews" />
            </ListItem>
            <ListItem button onClick={() => navigate("/dashboard/myBookings")}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="My Bookings" />
            </ListItem>
          </>
        )}
        {/* ==================
        admin pages
        ==================== */}
        {admin && (
          <>
            {/* make admin */}
            <ListItem button onClick={() => navigate("/dashboard/makeAdmin")}>
              <ListItemIcon>
                <PersonAddAltRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Make Admin" />
            </ListItem>

            {/* manage popular cities */}
            <ListItem
              button
              onClick={() => navigate("/dashboard/managePopularCities")}
            >
              <ListItemIcon>
                <AddLocationAltRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Popular Cities" />
            </ListItem>

            {/* Add new photo to photo gellery */}
            <ListItem
              button
              onClick={() => navigate("/dashboard/managePhotoGallery")}
            >
              <ListItemIcon>
                <AddPhotoAlternateIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Photo Gallery" />
            </ListItem>
          </>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Welcome to Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* must use */}
        <Outlet />
      </Box>
    </Box>
  );
}

DashboardContainer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardContainer;
