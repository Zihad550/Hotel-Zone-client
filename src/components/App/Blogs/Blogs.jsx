import { Container, Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import useAllContext from "../../../hooks/useAllContext";
import src from "../../../images/blogs/blogs-banner.jpg";
import Banner from "../../Shared/Banner/Banner.jsx";
import Footer from "../../Shared/Footer/Footer";
import Loader from "../../Shared/Loader/Loader";
import Blog from "./Blog/Blog";

// global variables
const BLOGS_PER_PAGE = 9;

const Blogs = () => {
  const { blogs, currentPage, setCurrentPage, totalBlogs, setBlogsPerPage } =
    useAllContext();

  useEffect(() => {
    setBlogsPerPage(BLOGS_PER_PAGE);
  }, []);

  return (
    <div>
      {/* banner */}
      <Banner src={src} title="Blogs" />

      {/* container */}
      <Container sx={{ my: 5 }}>
        {/* blogs */}
        <Grid container spacing={{ md: 2, xs: 1 }}>
          {blogs ? (
            blogs.map((blog) => <Blog key={blog._id} blog={blog} />)
          ) : (
            <Loader />
          )}
        </Grid>

        {/* pagination */}
        <Box
          sx={{
            mt: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={totalBlogs}
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            variant="outlined"
          />
        </Box>
      </Container>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Blogs;
