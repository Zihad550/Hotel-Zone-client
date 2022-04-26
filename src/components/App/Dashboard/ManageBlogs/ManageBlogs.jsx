import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Pagination } from "@mui/material";
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

// global variables
const BLOGS_PER_PAGE = 9;

const ManageBlogs = () => {
  // states
  const [isDeleted, setIsDeleted] = useState(false);
  const [isDeletable, setIsDeletable] = useState(false);

  // context
  const {
    blogs,
    currentPage,
    setCurrentPage,
    totalBlogs,
    setBlogsPerPage,
    setRefresh,
  } = useAllContext();

  // side effects
  useEffect(() => {
    setBlogsPerPage(BLOGS_PER_PAGE);
  }, []);

  // table titles
  const titles = [
    { id: 1, label: "Title" },
    { id: 2, label: "Image" },
    { id: 3, label: "Description" },
    { id: 4, label: "Actions" },
  ];

  // handlers
  const handleDeleteBlog = (id) => {
    //  reseting messages
    setIsDeletable(false);
    setIsDeleted(false);
    // sending delete request
    axiosInstance.delete(`/blog?id=${id}`).then((res) => {
      if (res.data.deletedCount) {
        setIsDeleted(true);
        setRefresh((prevState) => !prevState);
      } else {
        setIsDeletable(true);
      }
    });
  };
  return blogs ? (
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
            {blogs.map((row) => {
              return (
                <TableRow key={row._id} hover>
                  <TableCell>{row.title}</TableCell>
                  <TableCell
                    component={"img"}
                    sx={{ width: "100%", height: "100px" }}
                    src={row.src}
                  />
                  <TableCell>{row.desc}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleDeleteBlog(row._id)}
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

      <Box sx={{ py: 1, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalBlogs}
          page={currentPage}
          onChange={(e, value) => setCurrentPage(value)}
          variant="outlined"
        />
      </Box>

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
          message="Sorry, You cannot delete the existing blog. Please create a new one to perform this action."
          setShowToast={setIsDeletable}
        />
      )}
    </Paper>
  ) : (
    <Loader />
  );
};

export default ManageBlogs;
