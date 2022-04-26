import { Box } from "@mui/system";
import React from "react";

const BannerArrow = ({ onClick, icon, position }) => {
  console.log(position);
  return (
    <Box
      /*  style={position === "left" ? { left: 0 } : { right: 0 }} */
      sx={
        position === "right"
          ? {
              right: 0,
              background: "violet",
              zIndex: "10",
              position: "absolute",
              bottom: "50%",
              padding: "10px",
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "50px",
              cursor: "pointer",
              color: "white",
            }
          : {
              background: "violet",
              zIndex: "10",
              position: "absolute",
              bottom: "50%",
              padding: "10px",
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
              cursor: "pointer",
              color: "white",
            }
      }
      onClick={onClick}
    >
      {icon}
    </Box>
  );
};

export default BannerArrow;
