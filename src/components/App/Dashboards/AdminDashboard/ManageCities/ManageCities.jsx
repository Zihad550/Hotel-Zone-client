import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import Loader from "components/Shared/Loader/Loader";
import Toast from "components/Shared/Toast/Toast";
import React, { useEffect, useState } from "react";
import axiosInstance from "services/http.service";

const ManageCities = ({ setDashboardPageTitle }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isDeletable, setIsDeletable] = useState(false);
  const [cities, setCities] = useState(null);

  useEffect(() => {
    setDashboardPageTitle("Manage Existing Cities");
    (async () => {
      const res = await axiosInstance.get("/cities");
      setCities(res.data);
    })();
  }, []);

  // table titles
  const titles = [
    { id: 1, label: "Image" },
    { id: 2, label: "Name" },
    { id: 3, label: "Available Hotels" },
    { id: 4, label: "Rating" },
    { id: 5, label: "Actions" },
  ];

  // handlers
  const handleDeleteCity = (id) => {
    //  reset messages
    setIsDeletable(false);
    setIsDeleted(false);
    // sending delete request
    axiosInstance.delete(`/city?id=${id}`).then((res) => {
      if (res.data.deletedCount) {
        setIsDeleted(true);
        setCities((prevState) => prevState.filter((city) => city._id !== id));
      } else {
        setIsDeletable(true);
      }
    });
  };

  return cities ? (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
            {cities.map((row) => {
              return (
                <TableRow key={row._id} hover>
                  <TableCell>
                    <img
                      style={{ width: "200px", height: "100%" }}
                      src={row.img}
                      alt={row.name}
                    />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.hotels}</TableCell>
                  <TableCell>{row.rating}</TableCell>

                  <TableCell>
                    <IconButton
                      onClick={() => handleDeleteCity(row._id)}
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

      {/* pagination */}

      <Box sx={{ py: 1, display: "flex", justifyContent: "center" }}></Box>

      {/* message toasts */}
      {isDeleted && (
        <Toast
          severity="success"
          message="Deleted Successfully"
          setShowToast={setIsDeleted}
        />
      )}
      {isDeletable && (
        <Toast
          severity="warning"
          message="Sorry, You cannot delete the existing city. Please create a new one to perform this action."
          setShowToast={setIsDeletable}
        />
      )}
    </Paper>
  ) : (
    <Loader />
  );
};

export default ManageCities;
