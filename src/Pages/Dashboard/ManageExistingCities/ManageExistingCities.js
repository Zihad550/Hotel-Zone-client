import { Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useCities from "../../../hooks/useCities";
import ShowCity from "../../Shared/ShowCity/ShowCity";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ManageExistingCities = () => {
  const { cities } = useCities();
  const [isDeleted, setIsDeleted] = useState(false);
  const handleClose = () => setIsDeleted(false);
  return (
    <Grid container spacing={{ md: 2, xs: 1 }}>
      {cities.map((city) => (
        <ShowCity key={city._id} city={{ ...city, setIsDeleted }} />
      ))}
      <Modal
        open={isDeleted}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Successfully deleted
          </Typography>
          <Button variant="contained" onClick={handleClose} color="error">
            Close
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
};

export default ManageExistingCities;
