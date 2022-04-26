import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import ArticleIcon from "@mui/icons-material/Article";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CategoryIcon from "@mui/icons-material/Category";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { CircularProgress, Collapse, ListItemButton } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAllContext from "../../../hooks/useAllContext";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function DashboardContainer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [manageCityOpen, setManageCityOpen] = React.useState(false);
  const [manageGalleryOpen, setManageGalleryOpen] = React.useState(false);
  const [manageBlogOpen, setManageBlogOpen] = React.useState(false);
  const { title } = useAllContext();

  // navigate
  const navigate = useNavigate();

  // useAllContext
  const { admin, isLoading } = useAllContext();

  if (isLoading) {
    return <CircularProgress />;
  }

  // manage city routes
  const manageCityRoutes = [
    {
      id: 1,
      name: "Add New city",
      link: "/dashboard/AddNewCity",
      icon: <AddLocationAltRoundedIcon />,
    },
    {
      id: 2,
      name: "Manage Existing Cities",
      link: "/dashboard/manageExistingCities",
      icon: <CategoryIcon />,
    },
  ];

  // manage gallery routes
  const manageGalleryRoutes = [
    {
      id: 1,
      name: "Add New Photo",
      link: "/dashboard/addPhoto",
      icon: <AddAPhotoIcon />,
    },
    {
      id: 2,
      name: "Manage Existing Photos",
      link: "/dashboard/manageExistingPhoto",
      icon: <CategoryIcon />,
    },
  ];

  // manage blogs routes
  const manageBlogRoutes = [
    {
      id: 1,
      name: "Create blog",
      link: "/dashboard/createBlog",
      icon: <NoteAddIcon />,
    },
    {
      id: 2,
      name: "Manage Existing blogs",
      link: "/dashboard/manageBlogs",
      icon: <CategoryIcon />,
    },
  ];

  const drawer = (
    <div>
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
              <List sx={{ ml: 1 }} disablePadding>
                {manageCityRoutes.map((route) => (
                  <ListItem
                    key={route.id}
                    button
                    onClick={() => navigate(route.link)}
                  >
                    <ListItemIcon>{route.icon}</ListItemIcon>
                    <ListItemText primary={route.name} />
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {/* Manage photo gellery */}
            <ListItemButton
              onClick={() => setManageGalleryOpen(!manageGalleryOpen)}
            >
              <ListItemIcon>
                <PhotoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Gallery" />
              {manageGalleryOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={manageGalleryOpen} timeout="auto" unmountOnExit>
              <List sx={{ ml: 1 }} disablePadding>
                {manageGalleryRoutes.map((route) => (
                  <ListItem
                    key={route.id}
                    button
                    onClick={() => navigate(route.link)}
                  >
                    <ListItemIcon>{route.icon}</ListItemIcon>
                    <ListItemText primary={route.name} />
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {/* Manage blogs */}
            <ListItemButton onClick={() => setManageBlogOpen(!manageBlogOpen)}>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Blogs" />
              {manageBlogOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={manageBlogOpen} timeout="auto" unmountOnExit>
              <List sx={{ ml: 1 }} disablePadding>
                {manageBlogRoutes.map((route) => (
                  <ListItem
                    key={route.id}
                    button
                    onClick={() => navigate(route.link)}
                  >
                    <ListItemIcon>{route.icon}</ListItemIcon>
                    <ListItemText primary={route.name} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </>
        )}
      </List>

      {/* exit to home page */}
      <Divider />
      <List>
        <ListItem button onClick={() => navigate("/")}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Exit" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}

DashboardContainer.propTypes = {
  window: PropTypes.func,
};

export default DashboardContainer;
