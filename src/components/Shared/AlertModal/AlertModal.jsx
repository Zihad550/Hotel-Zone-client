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

const AlertModal = ({ isDeleted, setIsDeleted }) => (
    <Modal
      open={isDeleted}
      onClose={() => setIsDeleted(false)}
    >
      <Box sx={style}>
       
        <Typography id="modal-modal-title" variant="h6" component="h2">
         Successfully Deleted
       </Typography> 
      
        <Button variant="contained" onClick={() => setIsDeleted(false)} color="error">
          Close
        </Button>
      </Box>
    </Modal>
  );


export default AlertModal;
