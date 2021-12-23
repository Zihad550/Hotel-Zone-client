import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Resturent from "../Resturent/Resturent";
import Resturents from "../Resturents/Resturents";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  // const { destinationId, latitude, longitude } = useParams();
  const [details, setDetails] = useState({
    checkIn: "2022-06-15",
    checkOut: "2022-06-20",
    adults: 2,
    children: 2,
    rooms: 1,
  });
  const { checkIn, checkOut, adults, children, rooms } = details;
  const latitude = "51.507351";
  const longitude = "-0.127758";

  /* useEffect(() => {
    fetch(
      `https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=${checkIn}&checkout_date=${checkOut}&sort_order=STAR_RATING_HIGHEST_FIRST&destination_id=${parseInt(
        destinationId
      )}&adults_number=${adults}&locale=en_US&currency=USD&children_ages=4%2C0%2C15&price_min=10&star_rating_ids=3%2C4%2C5&accommodation_ids=20%2C8%2C15%2C5%2C1&price_max=500&page_number=1&theme_ids=14%2C27%2C25&amenity_ids=527%2C2063&guest_rating_min=4`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [destinationId]); */

  useEffect(() => {
    fetch("https://desolate-thicket-08194.herokuapp.com/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
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
              <Resturent key={resturent.hotel_id} resturent={resturent} />
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
