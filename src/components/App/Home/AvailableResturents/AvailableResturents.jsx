import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import Restaurant from "./Restaurant/Restaurant";
import Restaurants from "./Restaurants/Restaurants";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const { dest_id, latitude, longitude } = useParams();
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
      `https://booking-com.p.rapidapi.com/v1/hotels/search?units=metric&order_by=popularity&checkout_date=${checkOut}&adults_number=${adults}&checkin_date=${checkIn}&room_number=${rooms}&filter_by_currency=AED&dest_type=city&locale=en-gb&dest_id=${dest_id}&include_adjacency=true&page_number=0&children_number=${children}&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1`,
      {
        headers: {
          "x-rapidapi-host": "booking-com.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_X_RAPID_API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setHotels(data.result));
  }, [adults, checkIn, checkOut, children, dest_id, rooms]);

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
          <Restaurants setDetails={setDetails} details={details} />
          <div style={{ height: "100vh", overflowY: "scroll" }}>
            {hotels?.map((restaurant) => (
              <Restaurant
                key={restaurant.hotel_id}
                bookingInfo={details}
                restaurant={restaurant}
              />
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
                key={hotel.hotel_id}
                position={[hotel.latitude, hotel.longitude]}
              >
                <Popup key={hotel.hotel_id}>{hotel.hotel_name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
