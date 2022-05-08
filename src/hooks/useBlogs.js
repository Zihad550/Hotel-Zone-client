import { useEffect, useState } from "react";
import axiosInstance from "../services/http.service";


const useBlogs = () => {
    const [blogs, setBlogs] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [blogsPerPage, setBlogsPerPage] = useState(9);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await axiosInstance.get(
              `/blogs?blogsPerPage=${blogsPerPage}&currentPage=${currentPage}`
            );
            setBlogs(res.data.blogs);
            setTotalBlogs(Math.ceil(res.data.total / blogsPerPage));
          })();
    }, [currentPage, refresh])

    return {
        blogs,
        currentPage,
        setCurrentPage,
        totalBlogs,
        blogsPerPage,
        setBlogsPerPage, 
        setRefresh
    }
}

export default useBlogs;