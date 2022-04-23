

import { useState } from "react";

const useDashboardTitle = () => {
    const [title, setTitle] = useState('Dashboard');

    return {
        title, 
        setTitle
    }
}

export default useDashboardTitle;