import { useEffect, useState } from "react";
import { default as axios, default as axiosInstance } from "../services/http.service";


const useUser = () => {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  
  const savedUser = JSON.parse(localStorage.getItem('hotelZoneUser'));
  
  useEffect(() => {
      if(Object.keys(user).length > 0){
        setIsLoading(true);
        (async() => {
          axios.get(`/admin?email=${user.email}`)
        .then(res => setAdmin(res.data.admin))
        .finally(() => setIsLoading(false))
        })()
      }
  }, [])

  useEffect(() => {
    // setUserLoading(true)
    (async() => {
      const res = await axiosInstance.get(`/user?email=${savedUser.email}`) 
      setUser(res.data)
      setUserLoading(false)
    })()
  }, [])
  return {
    user,
    isLoading,
    admin,
    setUser,
    userLoading,
    setUser
  };
};

export default useUser;
