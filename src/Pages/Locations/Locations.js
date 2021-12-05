import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Locations = ({ latitude, longitude, name }) => {
  return (
    <MapContainer
      className="leaflet-container"
      center={latitude ? [latitude, longitude] : [51.505, -0.09]}
      // center={[23.810331, 90.412521]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {latitude && (
        <Marker position={[latitude, longitude]}>
          <Popup>{name}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Locations;
