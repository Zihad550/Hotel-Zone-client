import { useEffect, useState } from "react";

const useCities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch("https://desolate-thicket-08194.herokuapp.com/cities")
      .then((res) => res.json())
      .then((data) => setCities(data));
  });
  return { cities, setCities };
};

export default useCities;
