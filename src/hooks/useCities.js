import { useEffect, useState } from "react";
import axios from '../services/http.service';
const useCities = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [cities, setCities] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    async function fetchCities(){
      const res = await axios.get('/cities');
      setCities(res.data);
    }
    fetchCities()
  }, [isDeleted, showAlert]);
  return { cities, setCities, isDeleted, setIsDeleted, showAlert, setShowAlert };
};

export default useCities;
