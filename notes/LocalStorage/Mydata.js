import React, { useEffect, useState } from "react";

export default function Mydata() {
  const [data, setData] = useState(
    localStorage.getItem("array")
      ? JSON.parse(localStorage.getItem("array"))
      : []
  );

  let localData = localStorage.getItem("array");

  useEffect(() => {
  
    localStorage.getItem("array") &&
      setData(JSON.parse(localStorage.getItem("array")));
    
    
    console.log("hello");
  }, [localData]);

  return (
    <div>
      {data.map((itms) => (
        <li>{itms.name}</li>
      ))}
    </div>
  );
}
