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
import React, { useEffect, useState } from "react";
import useAllContext from "../../../../hooks/useAllContext";
import axiosInstance from "../../../../services/http.service";
import Loader from "../../../Shared/Loader/Loader";
import Toast from "../../../Shared/Toasts/Toast";

const ManageBannerCities = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isDeletable, setIsDeletable] = useState(false);
  const [photos, setPhotos] = useState(null);

  // context
  const { setTitle } = useAllContext();

  useEffect(() => {
    setTitle("Manage Gallery Photos");
    (async () => {
      const res = await axiosInstance.get("/photos");
      setPhotos(res.data);
    })();
  }, []);

  console.log(photos);

  // table titles
  const titles = [
    { id: 1, label: "Image" },
    { id: 2, label: "Photographer" },
    { id: 5, label: "Actions" },
  ];

  // handlers
  const handleDeletePhoto = (id) => {
    //  reset messages
    setIsDeletable(false);
    setIsDeleted(false);
    // sending delete request
    axiosInstance.delete(`/photo?id=${id}`).then((res) => {
      if (res.data.deletedCount) {
        setIsDeleted(true);
        setPhotos((prevState) => prevState.filter((photo) => photo._id !== id));
      } else {
        setIsDeletable(true);
      }
    });
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
                  <TableCell
                    component={"img"}
                    sx={{ width: "200px", height: "auto" }}
                    src={row.src}
                  />
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
      {isDeletable && (
        <Toast
          severity="warning"
          message="Sorry, You cannot delete the existing photos. Please create a new one to perform this action."
          setShowToast={setIsDeletable}
        />
      )}
    </Paper>
  ) : (
    <Loader />
  );
};

export default ManageBannerCities;
