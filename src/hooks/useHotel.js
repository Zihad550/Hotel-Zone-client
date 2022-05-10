const { useState } = require("react")


const useHotel = () => {
    const [hotel, setHotel] = useState(null);
    const [bookingInfo, setBookingInfo] = useState({checkIn: "2022-06-15",
    checkOut: "2022-06-20",
    adults: 2,
    children: 2,
    rooms: 1,});
    return{
        setHotel,
        setBookingInfo,
        bookingInfo,
        hotel
    }
};

export default useHotel;