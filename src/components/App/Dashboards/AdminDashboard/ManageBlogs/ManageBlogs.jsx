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
import Loader from "components/Shared/Loader/Loader";
import Toast from "components/Shared/Toast/Toast";
import useBlogs from "hooks/useBlogs";
import React, { useEffect, useState } from "react";
import axiosInstance from "services/http.service";

// global variables
const BLOGS_PER_PAGE = 9;

const ManageBlogs = ({ setDashboardPageTitle }) => {
  // states
  const [isDeleted, setIsDeleted] = useState(false);
  const [isNotDeletable, setIsNotDeletable] = useState(false);

  // context
  const {
    blogs,
    currentPage,
    setCurrentPage,
    totalBlogs,
    setBlogsPerPage,
    setRefresh,
  } = useBlogs();

  // side effects
  useEffect(() => {
    setBlogsPerPage(BLOGS_PER_PAGE);
    setDashboardPageTitle("Manage Blogs");
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
    handleResetAlerts();
    // sending delete request
    axiosInstance.delete(`/blog?id=${id}`).then((res) => {
      if (res.data.deletedCount) {
        setIsDeleted(true);
        setRefresh((prevState) => !prevState);
      } else {
        // if not deleted that means the blogs are private. so they are no deletable
        setIsNotDeletable(true);
      }
    });
  };

  const handleResetAlerts = () => {
    setIsNotDeletable(false);
    setIsDeleted(false);
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
                  <TableCell>
                    <img
                      style={{ width: "100%", height: "100px" }}
                      src={row.src}
                      alt={row.title}
                    />
                  </TableCell>
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
      {isNotDeletable && (
        <Toast
          severity="warning"
          message="Sorry, You cannot delete the existing blog. Please create a new one to perform this action."
          setShowToast={setIsNotDeletable}
        />
      )}
    </Paper>
  ) : (
    <Loader />
  );
};

export default ManageBlogs;
