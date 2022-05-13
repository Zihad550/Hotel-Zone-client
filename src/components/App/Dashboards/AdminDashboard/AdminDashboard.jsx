import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import ArticleIcon from "@mui/icons-material/Article";
import CategoryIcon from "@mui/icons-material/Category";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MenuIcon from "@mui/icons-material/Menu";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { Collapse, ListItemButton } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardDrawer from "components/Shared/DashboardDrawer";
import DashboardHeader from "components/Shared/DashboardHeader";
import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AdminDashboard = ({ dashboardPageTitle }) => {
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

  // navigate
  const navigate = useNavigate();

  // manage city routes
  const manageCityRoutes = [
    {
      id: 1,
      name: "Add New city",
      link: "/adminDashboard/AddNewCity",
      icon: <AddLocationAltRoundedIcon />,
    },
    {
      id: 2,
      name: "Manage Existing Cities",
      link: "/adminDashboard/manageExistingCities",
      icon: <CategoryIcon />,
    },
  ];

  // manage gallery routes
  const manageGalleryRoutes = [
    {
      id: 1,
      name: "Add New Photo",
      link: "/adminDashboard/addPhoto",
      icon: <AddAPhotoIcon />,
    },
    {
      id: 2,
      name: "Manage Existing Photos",
      link: "/adminDashboard/manageExistingPhoto",
      icon: <CategoryIcon />,
    },
  ];

  // manage blogs routes
  const manageBlogRoutes = [
    {
      id: 1,
      name: "Create blog",
      link: "/adminDashboard/createBlog",
      icon: <NoteAddIcon />,
    },
    {
      id: 2,
      name: "Manage Existing blogs",
      link: "/adminDashboard/manageBlogs",
      icon: <CategoryIcon />,
    },
  ];

  const drawer = (
    <div>
      {/*============== 
          pages
      ================== */}
      <List>
        {/* make admin */}
        <ListItem button onClick={() => navigate("/adminDashboard/makeAdmin")}>
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
    <Box sx={{ display: "flex", mt: 5 }}>
      <CssBaseline />
      <DashboardHeader position="fixed" open={open}>
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
            {dashboardPageTitle}
          </Typography>
        </Toolbar>
      </DashboardHeader>

      <DashboardDrawer variant="permanent" open={open}>
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
      </DashboardDrawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DashboardHeader />

        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
