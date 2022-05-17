import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import { blog, blog_img, img_container } from "./blog.style.module.css";

const Blog = ({ blog: { title, src, category, desc, date } }) => {
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Card sx={{ height: "100%" }} className={blog}>
        <Box className={img_container}>
          <CardMedia
            className={blog_img}
            component="img"
            width="100%"
            image={src}
            alt={title}
          />
        </Box>

        <CardContent sx={{ pb: 0 }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2">{category} - </Typography>
            <Typography sx={{ ml: 1 }} variant="body2">
              {" "}
              {date}
            </Typography>
          </Box>
          <Typography
            sx={{ fontFamily: "Lora", lineHeight: "1.3em" }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc.substring(0, 100)}...
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Blog;
