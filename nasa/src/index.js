import React from "react";
import ReactDOM from "react-dom";
import { ImageInformation } from "./Components/ImageInformation";
import { Navbar } from "./Components/Navbar";
import { Fetch } from "./Containers/Fetch";
// import App from "./App";

ReactDOM.render(
 <React.StrictMode>
  <Navbar />
  <ImageInformation />
 </React.StrictMode>,
 document.getElementById("root")
);
