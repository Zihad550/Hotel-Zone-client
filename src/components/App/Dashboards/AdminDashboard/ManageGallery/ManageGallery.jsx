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

const ManageGallery = ({ setDashboardPageTitle }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isNotDeletable, setIsNotDeletable] = useState(false);
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    setDashboardPageTitle("Manage Gallery Photos");
    (async () => {
      const res = await axiosInstance.get("/photos");
      setPhotos(res.data);
    })();
  }, []);

  // table titles
  const titles = [
    { id: 1, label: "Image" },
    { id: 2, label: "Photographer" },
    { id: 5, label: "Actions" },
  ];

  // handlers
  const handleDeletePhoto = (id) => {
    //  reset all alerts
    handleResetAlerts();
    // sending delete request
    axiosInstance.delete(`/photo?id=${id}`).then((res) => {
      if (res.data.deletedCount) {
        setIsDeleted(true);
        setPhotos((prevState) => prevState.filter((photo) => photo._id !== id));
      } else {
        setIsNotDeletable(true);
      }
    });
  };

  const handleResetAlerts = () => {
    setIsNotDeletable(false);
    setIsDeleted(false);
  };

  return photos ? (
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
            {photos.map((row) => {
              return (
                <TableRow key={row._id} hover>
                  <TableCell>
                    <img
                      style={{ width: "200px", height: "auto" }}
                      src={row.src}
                      alt={row.name}
                    />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>

                  <TableCell>
                    <IconButton
                      onClick={() => handleDeletePhoto(row._id)}
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
      {isNotDeletable && (
        <Toast
          severity="warning"
          message="Sorry, You cannot delete the existing photos. Please create a new one to perform this action."
          setShowToast={setIsNotDeletable}
        />
      )}
    </Paper>
  ) : (
    <Loader />
  );
};

export default ManageGallery;
