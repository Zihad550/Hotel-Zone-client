import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Loader from "components/Shared/Loader";
import useAuth from "hooks/useAuth";
import React, { useEffect, useState } from "react";

const MyReviews = ({ setDashboardPageTitle }) => {
  // states
  const [reviews, setReviews] = useState([]);
  const { user } = useAuth();

  // side effects
  useEffect(() => {
    setDashboardPageTitle("My Reviews");
    fetch(
      `https://polar-island-87071.herokuapp.com/reviews/review?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user.email]);

  /* 
    hotelName,
  securityRate,
  hotelRate,
  homeMessage,
  securityMessage,
  hotelImage,
  
  */

  // table titles
  const titles = [
    { id: 1, label: "Hotel Name" },
    { id: 2, label: "Hotel Image" },
    { id: 3, label: "Security Rating" },
    { id: 4, label: "Hotel Rating" },
    { id: 5, label: "About Hotel" },
    { id: 6, label: "About Security" },
  ];

  if (!reviews) return <Loader />;

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {!reviews.length ? (
        <Typography
          sx={{
            height: "90vh",
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="h3"
        >
          You didn't gave any review!!
        </Typography>
      ) : (
        <TableContainer sx={{ maxHeight: 540 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {titles.map((col) => (
                  <TableCell key={col.id}>{col.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews.map((row) => {
                return (
                  <TableRow key={row._id} hover>
                    <TableCell>{row.hotelName}</TableCell>
                    <TableCell
                      component={"img"}
                      sx={{ width: "150px", height: "100%" }}
                      src={row.hotelImage}
                    />
                    <TableCell>{row.securityRate}</TableCell>
                    <TableCell>{row.hotelRate}</TableCell>
                    <TableCell>{row.homeMessage}</TableCell>
                    <TableCell>{row.securityMessage}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default MyReviews;
