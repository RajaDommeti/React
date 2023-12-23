import React from "react";
import ReactDOM from "react-dom";

//JSX is a javascript syntax which is used to create react elements
//JSX is not HTML in JS this is HTML-like syntax
//when the jsxHeading is executed then it will get converts into react elements
//babel is the thing which converts JSX to react this is called as transpiler this is present inside parcel

const jsxHeading = <h1 id="heading">Namaste React Using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root "));

root.render(jsxHeading);
