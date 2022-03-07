import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../App.js";
import {
 default_year,
 current_month,
 current_day,
 maxDate,
} from "../Containers/Date";
import "./InfoContainer.css";

let newdate = default_year + "-" + current_month + "-" + current_day;

export const InfoContainer = () => {
 const [toggle, setToggle] = useState(true);
 const [secondToggle, setSecondToggle] = useState(true);
 const [context, setContext] = useContext(Context);
 let yesterday_date = current_day - 1;

 /* This to toggle what the information displays */

 const test = () => {
  setToggle(!toggle);
 };

 const test_two = () => {
  setSecondToggle(!secondToggle);
 };

 /* This helps to select the values of the calendar */

 const date_value = () => {
  var dateControl = document.querySelector('input[type="date"]');
  setContext(dateControl.value);
 };

 return (
  <div id="container">
   <div className="wrapper">
    <div className="image-container">
     <div className="image-header">
      <h4 className="header-menu">
       Image Information
       <div className="arrow-container">
        <FontAwesomeIcon
         className="my-arrow"
         icon={faCircleArrowDown}
         onClick={test}
        />
       </div>
      </h4>
     </div>
     <div className={"image-box " + (toggle ? "show" : "no-show")}></div>
    </div>
    <div className="slide-container">
     <div className="slide-header">
      <h4 className="header-menu">
       Slideshow controls
       <div className="arrow-container">
        <FontAwesomeIcon
         className="my-arrow"
         icon={faCircleArrowDown}
         onClick={test_two}
        />
       </div>
      </h4>
     </div>
     <div className={"image-box " + (secondToggle ? "show" : "no-show")}>
      <form>
       <input
        onChange={date_value}
        className="nasa-calendar"
        type="date"
        id="nasa-date"
        name="nasa-date"
        max={maxDate}
       ></input>
      </form>
     </div>
    </div>
   </div>
  </div>
 );
};
