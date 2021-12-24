function hotelBookingReducer(state = [], action) {
  switch (action.type) {
    case "ADD_BOOKING_INFO": {
      return [action.payload];
    }

    default:
      return state;
  }
}

export default hotelBookingReducer;
