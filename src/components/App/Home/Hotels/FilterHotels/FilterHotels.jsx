import { Button, Container, InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FilterHotels = ({ setDetails, details }) => {
  const { checkIn, checkOut, adults, children, rooms } = details;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...details };
    newDetails[field] = value;
    setDetails(newDetails);
  };

  return (
    <Container
      sx={{
        my: 2,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        mt: { xs: 32, sm: 40, md: 2 },
      }}
    >
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            mb: 1,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ width: "100%", mr: 2 }}>
            <InputLabel htmlFor="check-in">Select check in date</InputLabel>
            <TextField
              onBlur={handleBlur}
              id="check-in"
              type="date"
              fullWidth
              name="checkIn"
              defaultValue={checkIn}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <InputLabel htmlFor="check-out">Select check out date</InputLabel>
            <TextField
              onBlur={handleBlur}
              id="check-out"
              type="date"
              fullWidth
              name="checkOut"
              defaultValue={checkOut}
            />
          </Box>
        </Box>

        {/* adults, children and room number fields */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            overflowY: "scroll",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <InputLabel htmlFor="adults">Number of Adults</InputLabel>
            <TextField
              onBlur={handleBlur}
              fullWidth
              id="adults"
              defaultValue={adults}
              type="number"
              name="adults"
            />
          </Box>
          <Box sx={{ width: "100%", mx: 2 }}>
            <InputLabel htmlFor="childrens">Number of Childrens</InputLabel>
            <TextField
              onBlur={handleBlur}
              fullWidth
              id="childrens"
              defaultValue={children}
              type="number"
              name="children"
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <InputLabel htmlFor="rooms">Number of Rooms</InputLabel>
            <TextField
              onBlur={handleBlur}
              fullWidth
              id="rooms"
              defaultValue={rooms}
              type="number"
              name="rooms"
            />
          </Box>
        </Box>
        <Button
          sx={{ mt: 2 }}
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
        >
          Filter
        </Button>
      </form>
    </Container>
  );
};

export default FilterHotels;
