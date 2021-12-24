function hotelReducer(state = [], action) {
  switch (action.type) {
    case "ADD_HOTEL": {
      const newState = [action.payload];
      return newState;
    }

    default:
      return state;
  }
}

export default hotelReducer;
