import React, { useState, createContext } from "react";
import { InfoContainer } from "./Components/InfoContainer";
import { Slider } from "./Components/Slider";

export const Context = React.createContext();

export const App = () => {
 const [context, setContext] = useState("");

 return (
  <Context.Provider value={[context, setContext]}>
   <div className="main">
    <InfoContainer />
    <Slider />
   </div>
  </Context.Provider>
 );
};
