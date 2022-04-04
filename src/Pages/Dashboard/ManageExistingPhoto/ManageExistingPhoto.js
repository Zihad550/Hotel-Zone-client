import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useCities from "../../../hooks/useCities";
import AlertModal from "../../Shared/AlertModal/AlertModal";
import ManageCard from "../../Shared/ManageCard/ManageCard";
import NotDeletedModal from "../../Shared/NotDeletedModal/NotDeletedModal";

const ManageExistingPhoto = () => {
  const {showAlert, setShowAlert, isDeleted, setIsDeleted}  = useCities();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://polar-island-87071.herokuapp.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, [isDeleted, showAlert]);
  return (
    <Grid container spacing={{ md: 2, xs: 1 }}>
      {photos.map((photo) => (
        <ManageCard
          prop={{ ...photo, setIsDeleted , setShowAlert}}
          key={photo._id}
          route="photos"
        />
      ))}
      <AlertModal isDeleted={isDeleted} setIsDeleted={setIsDeleted} />
      <NotDeletedModal showAlert={showAlert} setShowAlert={setShowAlert} />
    </Grid>
  );
};

export default ManageExistingPhoto;
