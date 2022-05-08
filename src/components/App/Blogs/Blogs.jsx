import { Container, Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import Banner from "components/Shared/Banner";
import Footer from "components/Shared/Footer";
import Loader from "components/Shared/Loader";
import useAllContext from "hooks/useAllContext";
import bannerImgSrc from "images/blogs/blogs-banner.jpg";
import React, { useEffect } from "react";
import Blog from "./Blog";

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
      <Banner src={bannerImgSrc} title="Blogs" />

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
