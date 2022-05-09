import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import registerImage from "assets/images/register.jpg";
import useAuth from "hooks/useAuth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // use firebase
  const { error } = useAuth();

  // navigate & location
  const navigate = useNavigate();

  // states
  const [registerData, setRegisterData] = useState({});
  const { password, re_typed_password } = registerData;

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...registerData };
    newData[field] = value;
    setRegisterData(newData);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== re_typed_password) {
      alert("password not matched");
    } else {
      fetch("https://polar-island-87071.herokuapp.com/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(registerData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Authentication  successful");
            localStorage.setItem(
              "hotelZoneUser",
              JSON.stringify({
                name: data.name,
                password: data.password,
                email: data.email,
              })
            );
            navigate("/");
            window.location.reload();
          } else {
            alert(data.error);
          }
        })
        .finally(e.target.reset());
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
