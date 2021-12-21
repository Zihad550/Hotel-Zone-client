import { Button, Container, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ManagePopularCities = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ display: "flex" }}>
      <Paper
        onClick={() => navigate("/dashboard/addNewCity")}
        sx={{
          width: "300px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        elevation={3}
      >
        <Button sx={{ fontSize: 30 }} color="secondary">
          Add New City
        </Button>
      </Paper>
      <Paper
        onClick={() => navigate("/dashboard/manageExistingCities")}
        sx={{
          width: "300px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          ml: 10,
        }}
        elevation={3}
      >
        <Button sx={{ fontSize: 28 }} color="secondary">
          Manage Existing Cities
        </Button>
      </Paper>
    </Container>
  );
};

export default ManagePopularCities;
