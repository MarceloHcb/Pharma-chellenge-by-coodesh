import { BaseUrl } from "../services/BaseUrl";
import { useEffect, useState } from "react";
export const InfoList = () => {
  const [items, setItems] = useState([]); 
  const [url, setUrl] = useState(`${BaseUrl}?results=50`);

  const getInfo = async () => {
    const res = await fetch(url);
    const json = await res.json();
    const data = json.results;
    setItems(data)    
  };
  useEffect(() => {
    getInfo();
  }, [url,setUrl]);
  return {
    items,
    setItems,
    url,
    setUrl,  
  };
};
