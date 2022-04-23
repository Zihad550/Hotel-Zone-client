import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CategoryIcon from '@mui/icons-material/Category';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { Button, CircularProgress, Collapse, ListItemButton } from "@mui/material";
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
import useAllContext from "../../../hooks/useAllContext";

const drawerWidth = 240;

function DashboardContainer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [manageCityOpen, setManageCityOpen] = React.useState(false);
  const [manageGalleryOpen, setManageGalleryOpen] = React.useState(false);
  const {title} = useAllContext();

   // navigate
   const navigate = useNavigate();

  // useAllContext
  const { admin, isLoading } = useAllContext();
  if(isLoading){
    return <CircularProgress/>
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // manage city routes
  const manageCityRoutes = [
    {id:1, name: "Add New city", link: '/dashboard/AddNewCity', icon: <AddLocationAltRoundedIcon/> },
    {id:2, name: "Manage Existing Cities", link: '/dashboard/manageExistingCities', icon: <CategoryIcon/> },
  ]

  // manage gallery routes
  const manageGalleryRoutes = [
    {id:1, name: "Add New Photo", link: '/dashboard/addPhoto', icon: <AddAPhotoIcon/> },
    {id:2, name: "Manage Existing Photos", link: '/dashboard/manageExistingPhoto', icon: <CategoryIcon/> },
  ]

  

  const drawer = (
    <div>
      {/* home page logo */}
      <Toolbar >
        <Button onClick={() => navigate('/')} variant="text">
          Hotel Zone
        </Button>
      </Toolbar>
      <Divider />

      {/*============== 
          pages
      ================== */}
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
            <ListItemButton onClick={() => setManageCityOpen(!manageCityOpen)}>
               <ListItemIcon>
                 <LocationCityIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Cities" />
                {manageCityOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
        <Collapse in={manageCityOpen} timeout="auto" unmountOnExit>
          <List sx={{ml:3}} disablePadding>
             {
               manageCityRoutes.map(route => (
                <ListItem
                key={route.id}
                button
                onClick={() => navigate(route.link)}
              >
                <ListItemIcon>
                  {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
               ))
             }
        </List>
      </Collapse>
            

      {/* Manage photo gellery */}
      <ListItemButton onClick={() => setManageGalleryOpen(!manageGalleryOpen)}>
            <ListItemIcon>
               <PhotoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Gallery" />
                {manageGalleryOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={manageGalleryOpen} timeout="auto" unmountOnExit>
          <List sx={{ml:3}} disablePadding>
             {
               manageGalleryRoutes.map(route => (
                <ListItem
                key={route.id}
                button
                onClick={() => navigate(route.link)}
              >
                <ListItemIcon>
                  {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
               ))
             }
        </List>
      </Collapse>

          </>
        )}
      </List>

      {/* exit to home page */}
      <Divider />
      <List>
        <ListItem button onClick={() => navigate("/home")}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Exit" />
        </ListItem>
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
            {title}
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
  window: PropTypes.func,
};

export default DashboardContainer;
