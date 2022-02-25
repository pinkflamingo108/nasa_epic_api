import React, { useState, useEffect } from "react";

export const Fetch = (url) => {
 const [data, setData] = useState([]);

 useEffect(() => {
  try {
   fetch(url)
    .then((res) => {
     if (!res.ok) {
      throw Error("Could not fetch the data for that resource");
     }
     return res.json();
    })
    .then((data) => {
     setData(data);

     console.log(data);
    });
  } catch (err) {
   console.log(err);
  }
 }, [url]);

 return { data };
};
