import { Grid } from "@mui/material";
import React from "react";
import useCities from "../../../hooks/useCities";
import AlertModal from "../../Shared/AlertModal/AlertModal";
import ManageCard from "../../Shared/ManageCard/ManageCard";
import NotDeletedModal from "../../Shared/NotDeletedModal/NotDeletedModal";

const ManageExistingCities = () => {
  const { cities, isDeleted, setIsDeleted, setShowAlert, showAlert } = useCities();

  return (
    <Grid container spacing={{ md: 2, xs: 1 }}>
      {cities.map((city) => (
        <ManageCard
          key={city._id}
          prop={{ ...city, setIsDeleted, setShowAlert }}
          route="cities"
        />
      ))}
      <AlertModal isDeleted={isDeleted} setIsDeleted={setIsDeleted} />
      <NotDeletedModal showAlert={showAlert} setShowAlert={setShowAlert} />
    </Grid>
  );
};

export default ManageExistingCities;
