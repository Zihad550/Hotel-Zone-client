import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import loginImage from "assets/images/login.jpg";
import useAuth from "hooks/useAuth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "services/http.service";

const Login = () => {
  // context
  const { error, setUser } = useAuth();
  // navigate & location
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

    axiosInstance
      .post("https://polar-island-87071.herokuapp.com/login", loginData)
      .then(({ data }) => {
        if (data.success) {
          alert("Authentication successful");
          setUser({ email: data.email, name: data.name, role: data.role });
          localStorage.setItem(
            "hotelZoneUser",
            JSON.stringify({ email: data.email })
          );

          navigate("/home");
        }
        data.error && alert("Authentication failed");
      })
      .finally(e.target.reset());
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
            {error && <Alert severity="error">{error}</Alert>}
          </form>

          <Typography sx={{ textAlign: "center" }} variant="body1">
            New user
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
