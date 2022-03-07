import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Fetch } from "../Containers/Fetch";
import { Context } from "../App.js";
import { default_year, current_month, current_day } from "../Containers/Date";
import "./Slider.css";

export const Slider = () => {
 /*Here we get that data on the hooks */

 const [year, setYear] = useState(default_year);
 const [month, setMonth] = useState(current_month);
 const [day, setDay] = useState(current_day);
 const [defaultDate, setDefaultDate] = useState(`${year}-${month}-${day}`);
 const [imgDisplay, setImgDisplay] = useState("");
 const [context, setContext] = useContext(Context);

 const { data } = Fetch(
  `https://api.nasa.gov/EPIC/api/natural/date/${defaultDate}?api_key=oJo90NkLqdBXoxaXxCkUI92xxp9Io0CL31gIxJ6O`
 );

 /* Here we get the context date data in small chunks */

 const print = (e) => {
  e.preventDefault();
  let target_img = e.target.src;
  setImgDisplay(target_img);
  //   console.log(target_img);
 };

 return (
  <div id="wrapper-all">
   <div className="display-img">
    <img className="main-display" src={imgDisplay} />
   </div>
   <div id="container">
    <div className="slider-container">
     <div className="slider">
      <div className="arrow-container">
       <FontAwesomeIcon className="my-arrow arrows" icon={faArrowLeft} />
      </div>
      {data.map((info, num) => {
       if (num <= 6) {
        return (
         <>
          <div className="image-wrapper">
           <img
            onClick={print}
            className={`planet-images`}
            src={`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${info?.image}.jpg`}
           />
           <div className="num-container">
            <p>{num}</p>
           </div>
          </div>
         </>
        );
       }
      })}
      <div className="arrow-container">
       <FontAwesomeIcon className="my-arrow arrows" icon={faArrowRight} />
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};
