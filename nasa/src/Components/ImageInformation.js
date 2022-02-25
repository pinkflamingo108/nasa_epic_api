import React from "react";
import { Fetch } from "../Containers/Fetch";

export const ImageInformation = () => {
 const { data } = Fetch(
  `https://api.nasa.gov/EPIC/api/natural/images?api_key=oJo90NkLqdBXoxaXxCkUI92xxp9Io0CL31gIxJ6O`
 );

 return (
  <div>
   <ul>
    {data.map((info) => {
     return (
      <>
       <li>{info?.identifier}</li>
       <li>{info?.date}</li>
       <li>{info?.version}</li>
       <li>{info?.image}</li>
      </>
     );
    })}
   </ul>
  </div>
 );
};
