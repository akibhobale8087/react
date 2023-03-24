import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "div",
    {id:"parent"},
   [
    React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"I am child1 h1 new one"),
    React.createElement("h2",{},"I am h2 new one")
    ]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am child2 h1 new one"),
React.createElement("h2",{},"I am h2 new one")
])
   ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);

root.render(heading);