import { Alert } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Toast = ({ severity, message, setShowToast, left }) => {
  return (
    <Box sx={{ position: "absolute", top: "50%", left: "50%", width: "320px" }}>
      <Alert onClose={() => setShowToast(false)} severity={severity}>
        {message}{" "}
      </Alert>
    </Box>
  );
};

export default Toast;
