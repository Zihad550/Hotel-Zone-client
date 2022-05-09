import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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

const NotDeletedModal = ({  setShowAlert, showAlert }) => {
  const handleClose = () => setShowAlert(false);
  return (
    <Modal
      open={showAlert}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
       <Typography id="modal-modal-title" variant="h6" component="h2">
       You cannot delete the existing one. Please create a new one to delete.
     </Typography>
       
        <Button variant="contained" onClick={handleClose} color="error">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default NotDeletedModal;
