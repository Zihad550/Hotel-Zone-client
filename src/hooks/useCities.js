import { useEffect, useState } from "react";

const useCities = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [cities, setCities] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  console.log('inside' , showAlert)
  useEffect(() => {
    fetch("https://polar-island-87071.herokuapp.com/cities")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, [isDeleted, showAlert]);
  return { cities, setCities, isDeleted, setIsDeleted, showAlert, setShowAlert };
};

export default useCities;
