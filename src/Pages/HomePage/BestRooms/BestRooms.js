import React, { useState } from "react";

const BestRooms = () => {
  const [rooms, setRooms] = useState([]);

  return (
    <div>
      {rooms.map((room) => (
        <img
          className="responsiveImg"
          key={room.photo_id}
          src={room.url_max}
          alt={room.tags[0].tag}
        />
      ))}
    </div>
  );
};

export default BestRooms;
