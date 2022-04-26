import { useEffect, useState } from "react";
import axios from '../services/http.service';
const useCities = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [cities, setCities] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    console.log('loading cities')
    (async() => {
      const res = await axios.get('/cities');
      setCities(res.data);
    })()
  }, [isDeleted, showAlert]);
  return { cities, setCities, isDeleted, setIsDeleted, showAlert, setShowAlert };
};

export default useCities;
