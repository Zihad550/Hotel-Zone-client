import { useEffect, useState } from "react";



const useUser = () => {
  const [admin, setAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  console.log(admin)
  const user = JSON.parse(localStorage.getItem('hotelZoneUser'));
  console.log(user)
  useEffect(() => {
    Object.keys(user).length > 0 &&
    console.log('inside')
    setIsLoading(true)
    fetch(`http://localhost:8000/admin?email=${user.email}`).then(res => res.json()).then(data => setAdmin(data.admin)).finally(() => setIsLoading(false))
  }, [])
  return {
    user,
    isLoading,
    admin
  };
};

export default useUser;
