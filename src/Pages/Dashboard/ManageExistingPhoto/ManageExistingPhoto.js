import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AlertModal from "../../Shared/AlertModal/AlertModal";
import ManageCard from "../../Shared/ManageCard/ManageCard";

const ManageExistingPhoto = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://desolate-thicket-08194.herokuapp.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, [isDeleted]);
  return (
    <Grid container>
      {photos.map((photo) => (
        <ManageCard
          prop={{ ...photo, setIsDeleted }}
          key={photo._id}
          route="photos"
        />
      ))}
      <AlertModal isDeleted={isDeleted} setIsDeleted={setIsDeleted} />
    </Grid>
  );
};

export default ManageExistingPhoto;
