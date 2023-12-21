//this is to create basic hello world program in react
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/* this is to create nested tags in react 

<div id="parent">
  <div id="child">
     <h1>Im h1 tag inside nedted div tags </h1>
     <h2>Im h2 tag  inside nested div tags</h2>
  </div>
</div>

react.createElement is a object when its rendering it will generate 
html code and put it on the browser
*/

const h = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Im h1 tag  inside nested div tags"),React.createElement("h2", {}, "Im h2 tag  inside nested div tags")]
  )
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(h);


