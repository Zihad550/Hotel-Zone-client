import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import makeAdminImage from "../../../images/admin.svg";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { token } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("http://localhost:8000/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount) {
          setSuccess(true);
        }
        else{
          setError(true)
        }
      });
  };
  return (
    <Grid container spacing={{ md: 2, sm: 1 }}>
      <Grid item md={6} xs={12}>
        <img src={makeAdminImage} alt="" />
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          display: "flex",
          alignItems: { md: "flex-start", xs: "center" },
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "normal",
            fontSize: { md: 48, xs: 30 },
            mb: { xs: 2, md: 0 },
          }}
        >
          Make a new admin
        </Typography>
        <form className="responsive-form" onSubmit={handleSubmit}>
          <TextField
            onBlur={(e) => setEmail(e.target.value)}
            variant="outlined"
            type="email"
            label="E-mail"
            required
            sx={{ width: { xs: "100%", md: "50%" } }}
          />
          <br />
          <Button
            size="large"
            sx={{ my: { md: 3, xs: 0 }, width: { xs: "100%" } }}
            variant="contained"
            type="submit"
          >
            Make Admin
          </Button>
        </form>
        {success && <Alert severity="success">Made Admin successfully</Alert> }
        {error &&  <Alert severity="error">User does not exists</Alert>}
      </Grid>
    </Grid>
  );
};

export default MakeAdmin;
