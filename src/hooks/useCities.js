import { useEffect, useState } from "react";

const useCities = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch("https://desolate-thicket-08194.herokuapp.com/cities")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, [isDeleted]);
  return { cities, setCities, isDeleted, setIsDeleted };
};

export default useCities;
