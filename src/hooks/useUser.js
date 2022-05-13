import { useEffect, useState } from "react";
import { default as axiosInstance } from "../services/http.service";


const useUser = () => {
  const [user, setUser] = useState({})
  
  const savedUser = JSON.parse(localStorage.getItem('hotelZoneUser'));
  
  useEffect(() => {
    (async() => {
      if(!savedUser) return;
      const res = await axiosInstance.get(`/user?email=${savedUser.email}`) 
      setUser(res.data)
    })()
  }, [])
  
  return {
    user,
    setUser,
    loading: Object.keys(user).length === 0,
  };
};

export default useUser;
