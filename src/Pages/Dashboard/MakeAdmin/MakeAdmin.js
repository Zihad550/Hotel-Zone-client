import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import makeAdminImage from "../../../images/admin.svg";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const { token } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://desolate-thicket-08194.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
  };
  return (
    <Grid container spacing={{ md: 2, sm: 1 }}>
      <Grid item md={6}>
        <img src={makeAdminImage} alt="" />
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "normal" }}>
          Make a new admin
        </Typography>
        <form style={{ width: "50%" }} onSubmit={handleSubmit}>
          <TextField
            onBlur={(e) => setEmail(e.target.value)}
            variant="outlined"
            type="email"
            label="E-mail"
            fullWidth
            required
          />
          <br />
          <Button size="large" sx={{ my: 3 }} variant="contained" type="submit">
            Make Admin
          </Button>
        </form>
        {success && <Alert severity="success">Made Admin successfully</Alert>}
      </Grid>
    </Grid>
  );
};

export default MakeAdmin;
