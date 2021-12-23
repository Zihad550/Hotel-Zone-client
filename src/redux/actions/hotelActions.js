export function addHotel(payload) {
  return {
    type: "ADD_HOTEL",
    payload,
  };
}

export function getHotel(payload) {
  return {
    type: "GET_HOTEL",
    payload,
  };
}
