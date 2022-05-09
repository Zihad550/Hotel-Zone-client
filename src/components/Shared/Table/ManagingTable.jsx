import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React from "react";
import Loader from "../Loader";

const ROWS_PER_PAGE = 10;

const ManagingTable = ({ rows, cols }) => {
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return rows ? (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {cols.map((col) => (
                <TableCell key={col.id}>{col.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.id} hover>
                  <TableCell>{row.title}</TableCell>
                  <TableCell
                    component={"img"}
                    sx={{ width: "100%", height: "100px" }}
                    src={row.src}
                  />
                  <TableCell>{row.desc}</TableCell>
                  <TableCell>
                    <IconButton title="Delete Blog" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={ROWS_PER_PAGE}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  ) : (
    <Loader />
  );
};

export default ManagingTable;
