import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import blog1 from "../../../images/blog/blog-1.jpg";
import blog2 from "../../../images/blog/blog-2.jpg";

const Blog = () => {
  return (
    <Container sx={{ mt: 15 }}>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          fontSize: { md: 60, xs: 35 },
          fontFamily: "'Lobster', cursive",
          mb: 5,
        }}
        variant="h2"
      >
        Our Blog
      </Typography>

      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={blog1}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                sx={{
                  color: "secondary.light",
                  fontFamily: "'Courgette', cursive",
                  m: 0,
                }}
                variant="body1"
                component="div"
              >
                Hotel Zone
              </Typography>
              <span
                style={{
                  height: "2px",
                  width: "50px",
                  background: "black",
                  display: "inline-block",
                }}
              ></span>

              <Typography
                sx={{ my: 2, fontFamily: "'Courgette', cursive" }}
                variant="h5"
              >
                New Hotels
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae aut magnam dicta temporibus, ipsum placeat mollitia
                itaque tempore, atque odio porro voluptate laborum facere, neque
                incidunt corrupti repellendus
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{ color: "warning.dark", borderColor: "warning.dark" }}
                variant="outlined"
                size="small"
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Box
            sx={{
              background: "black",
              color: "white",
              p: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 5,
            }}
          >
            <AttachFileIcon />
            <Typography
              sx={{ fontFamily: "'Courgette', cursive", mt: 1 }}
              variant="h5"
            >
              Check New Events
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box
            sx={{
              background: "#c19b76",
              color: "white",
              p: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 5,
            }}
          >
            <Typography
              textAlign="center"
              variant="h5"
              sx={{ fontFamily: "'Courgette', cursive" }}
            >
              Follow our Resort Luxury Hotels
            </Typography>
            <span
              style={{
                borderBottom: "2px solid white",
                width: "45px",

                display: "inline-block",
                marginTop: "13px",
              }}
            ></span>
            <Typography
              sx={{ mt: 2, fontFamily: "'Courgette', cursive"  }}
              textAlign="center"
              variant="body1"
            >
              <FormatQuoteIcon /> JEHAD HOSSAIN
            </Typography>
          </Box>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={blog2}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                sx={{
                  color: "secondary.light",
                  fontFamily: "'Courgette', cursive",
                  m: 0,
                }}
                variant="body1"
                component="div"
              >
                Hotel Zone
              </Typography>
              <span
                style={{
                  height: "2px",
                  width: "50px",
                  background: "black",
                  display: "inline-block",
                }}
              ></span>

              <Typography
                sx={{ my: 2, fontFamily: "'Courgette', cursive" }}
                variant="h5"
              >
                Around Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae aut magnam dicta temporibus, ipsum placeat mollitia
                itaque tempore, atque odio porro voluptate laborum facere, neque
                incidunt corrupti repellendus
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{ color: "warning.dark", borderColor: "warning.dark" }}
                variant="outlined"
                size="small"
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* 3rd slide */}
        <Grid item md={4} xs={12}>
          <Box
            sx={{
              background: `url(${blog1})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
              alignItems: "flex-start",
              p: 3,
              boxSizing: "border-box",
            }}
          >
            <Typography sx={{ color: "white" }} variant="body1">
              News
            </Typography>
            <span
              style={{
                background: "white",
                height: "2px",
                width: "25px",
                marginBottom: "15px",
              }}
            ></span>
            <Typography
              sx={{ fontFamily: "'Courgette', cursive" }}
              color="white"
              variant="h5"
            >
              Relax Zone
            </Typography>
            <Button
              endIcon={<ArrowForwardIosIcon />}
              sx={{ color: "white", my: 2 }}
            >
              Read More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
