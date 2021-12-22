import GoogleIcon from "@mui/icons-material/Google";
import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import registerImage from "../../../images/register.jpg";

const Register = () => {
  // use firebase
  const { registerUser, error, user, googleLogin } = useAuth();

  // navigate & location
  const navigate = useNavigate();
  const location = useLocation();

  // states
  const [registerData, setRegisterData] = useState({});
  const { password, re_typed_password, name, email } = registerData;

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...registerData };
    newData[field] = value;
    setRegisterData(newData);
  };
  console.log(user);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== re_typed_password) {
      alert("password not matched");
    } else {
      registerUser(email, password, name, navigate, location);
    }
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
          <img className="responsiveImg" src={registerImage} alt="" />
        </Grid>
        <Grid item md={6} sx={{ display: "flex", flexDirection: "column" }}>
          {/* register form */}
          <form onSubmit={handleRegister}>
            <TextField
              onBlur={handleBlur}
              name="name"
              fullWidth
              label="Name"
              required
            />
            <TextField
              margin="dense"
              onBlur={handleBlur}
              name="email"
              fullWidth
              label="E-mail"
              type="email"
              required
            />
            <TextField
              margin="dense"
              onBlur={handleBlur}
              name="password"
              fullWidth
              label="Password"
              type="password"
              required
            />
            <TextField
              margin="dense"
              onBlur={handleBlur}
              name="re_typed_password"
              fullWidth
              label="Re-type password"
              type="password"
              required
            />
            <Button
              sx={{ width: "100%" }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Register
            </Button>

            {error && <Alert severity="error">{error}</Alert>}
          </form>

          {/* {user.email ? alert("successfully registered") : alert(error)} */}

          {/* third party authentication */}
          <Box sx={{ display: "flex", my: 1, justifyContent: "center" }}>
            <Button onClick={googleLogin} endIcon={<GoogleIcon />} />
            {/* <Button endIcon={<FacebookIcon />} />
            <Button endIcon={<GitHubIcon />} /> */}
          </Box>
          <Typography sx={{ textAlign: "center" }} variant="body1">
            Alredy registered{" "}
            <Button onClick={() => navigate("/login")}>Login</Button>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
