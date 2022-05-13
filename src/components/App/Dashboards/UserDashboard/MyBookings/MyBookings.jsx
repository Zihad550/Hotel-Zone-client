import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Loader from "components/Shared/Loader";
import Toast from "components/Shared/Toast";
import useAuth from "hooks/useAuth";
import { useEffect, useState } from "react";
import axiosInstance from "services/http.service";

const MyBookings = ({ setDashboardPageTitle }) => {
  // states
  const [bookedHotels, setBookedHotels] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  // context
  const { user } = useAuth();

  useEffect(() => {
    setDashboardPageTitle("My Bookings");
    (async () => {
      setBookedHotels(
        await axiosInstance
          .get(`/booked?email=${user.email}`)
          .then((res) => res.data)
      );
    })();
  }, [user.email]);

  // table titles
  const titles = [
    { id: 1, label: "Name" },
    { id: 2, label: "Image" },
    { id: 3, label: "Price" },
  ];

  // handlers
  const handleCancelBook = (id) => {
    setIsDeleted(false);
    if (window.confirm("Are you sure")) {
      fetch(`https://polar-island-87071.herokuapp.com/booked?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setIsDeleted(true);
            setBookedHotels((hotels) =>
              hotels.filter((hotel) => hotel._id !== id)
            );
          }
        });
    }
  };

  return bookedHotels ? (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {!bookedHotels.length ? (
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
          You didn't booked any hotel yet!!
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
              {bookedHotels.map((row) => {
                return (
                  <TableRow key={row._id} hover>
                    <TableCell>{row.name}</TableCell>
                    <TableCell
                      component={"img"}
                      sx={{ width: "150px", height: "100%" }}
                      src={row.img}
                    />
                    <TableCell>{row.price}</TableCell>

                    <TableCell>
                      <IconButton
                        onClick={() => handleCancelBook(row._id)}
                        title="Delete Blog"
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* message toasts */}
      {isDeleted && (
        <Toast
          severity="success"
          message="Booking Canceled"
          setShowToast={setIsDeleted}
        />
      )}
    </Paper>
  ) : (
    <Loader />
  );
};

export default MyBookings;
