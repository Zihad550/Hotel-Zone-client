import { useEffect, useState } from "react";
import axios from "../services/http.service";


const useUser = () => {
  const [admin, setAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const user = JSON.parse(localStorage.getItem('hotelZoneUser'));
  useEffect(() => {
    
    if(user){
      if(Object.keys(user).length > 0){
        setIsLoading(true);
        axios.get(`/admin?email=${user.email}`)
        .then(res => setAdmin(res.data.admin))
        .finally(() => setIsLoading(false))
      }
    }
   
  }, [])
  return {
    user,
    isLoading,
    admin
  };
};

export default useUser;
