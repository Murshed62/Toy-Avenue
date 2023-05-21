import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - NOVA`;
    },[title])
};

export default useTitle;