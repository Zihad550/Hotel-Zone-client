import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginImage from "../../../images/login.jpg";

const Login = () => {
  // usefirebase
  const { login, setUserInfo, error } = useAuth();
  console.log(error);
  // navigate
  const navigate = useNavigate();

  // states
  const [loginData, setLoginData] = useState({});

  // handlers
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setUserInfo(loginData);
    login();
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
        md: { mt: 0 },
      }}
    >
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
        spacing={1}
      >
        <Grid item md={6}>
          <img className="responsiveImg" src={loginImage} alt="" />
        </Grid>
        <Grid item md={6} sx={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={handleLogin}>
            <TextField
              onBlur={handleBlur}
              fullWidth
              label="E-mail"
              name="email"
              type="email"
              required
            />
            <TextField
              onBlur={handleBlur}
              name="password"
              margin="dense"
              fullWidth
              label="Password"
              type="password"
              required
            />
            <Button
              type="submit"
              sx={{ width: "100%" }}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>

          {/* third party authentication */}
          <Box sx={{ display: "flex", my: 1, justifyContent: "center" }}>
            <Button sx={{ width: "100%" }} endIcon={<GoogleIcon />} />
            <Button sx={{ width: "100%" }} endIcon={<FacebookIcon />} />
            <Button sx={{ width: "100%" }} endIcon={<GitHubIcon />} />
          </Box>
          <Typography sx={{ textAlign: "center" }} variant="body1">
            New user{" "}
            <Button onClick={() => navigate("/register")}>
              Create account
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
