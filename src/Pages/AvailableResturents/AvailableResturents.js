import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import Resturent from "../Resturent/Resturent";
import Resturents from "../Resturents/Resturents";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const { destinationId, latitude, longitude } = useParams();
  const [details, setDetails] = useState({
    checkIn: "2022-06-15",
    checkOut: "2022-06-20",
    adults: 2,
    children: 2,
    rooms: 1,
  });
  const { checkIn, checkOut, adults, children, rooms } = details;

  useEffect(() => {
    fetch(
      `https://hotels4.p.rapidapi.com/properties/list?destinationId=${destinationId}&pageNumber=1&pageSize=25&checkIn=${checkIn}&checkOut=${checkOut}&adults${adults}=${children}&sortOrder=PRICE&locale=en_US&currency=USD`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setHotels(data.data.body.searchResults.results));
  }, [destinationId]);

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
              left: 0,
              width: "100%",
            },
          }}
          item
          xs={12}
          md={6}
        >
          <Resturents setDetails={setDetails} details={details} />
          <div style={{ height: "100vh", overflowY: "scroll" }}>
            {hotels?.map((resturent) => (
              <Resturent key={resturent.id} resturent={resturent} />
            ))}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: { xs: "30vh", md: "100vh" },
          }}
        >
          <MapContainer
            className="leaflet-container"
            center={[latitude, longitude]}
            zoom={12}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {hotels?.map((hotel) => (
              <Marker
                key={hotel._id}
                position={[hotel.coordinate.lat, hotel.coordinate.lon]}
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
