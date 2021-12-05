import { Grid } from "@mui/material";
import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Resturent from "../Resturent/Resturent";
import Resturents from "../Resturents/Resturents";

const Home = () => {
  const [hotels, setHotels] = useState([]);

  console.log(hotels);
  return (
    <>
      <Grid
        sx={{ display: "flex", xs: { flexDirection: "column-reverse" } }}
        className="home-container"
        container
        spacing={1}
      >
        <Grid
          sx={{
            height: "100%",

            mt: 7,
            lg: {
              position: "fixed",
              overflowY: "scroll",
              top: 0,
              right: 0,
              width: "100%",
            },
          }}
          item
          xs={12}
          md={6}
        >
          <Resturents setHotels={setHotels} />
          {hotels.map((resturent) => (
            <Resturent key={resturent._id} resturent={resturent} />
          ))}
        </Grid>
        <Grid
          sx={
            {
              /*  md: { width: "100%" }, */
            }
          }
          item
          xs={12}
          md={6}
        >
          <MapContainer
            className="leaflet-container"
            center={[51.505, -0.09]}
            // center={[23.810331, 90.412521]}
            zoom={10}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {hotels.map((hotel) => (
              <Marker
                key={hotel._id}
                position={[hotel.latitude, hotel.longitude]}
              >
                <Popup key={hotel._id}>{hotel.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
