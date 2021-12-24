function hotelReducer(state, action) {
  switch (action.type) {
    case "ADD_HOTEL": {
      const newState = [action.payload];
      return newState;
    }
    case "GET_HOTEL": {
      const newState = [...state, action.payload];
      return newState;
    }
    default:
      return state;
  }
}

export default hotelReducer;
