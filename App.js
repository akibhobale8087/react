
{/* <div id="parent">
    <div id = "child">
        <h1>I am h1 new one</h1>
        <h2> I am h2 new one
    </div>
</div> */}

const heading = React.createElement(
    "div",
    {id:"parent"},
   [
    React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"I am h1 new one"),
    React.createElement("h2",{},"I am h2 new one")
    ]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am h1 new one"),
React.createElement("h2",{},"I am h2 new one")
])
   ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);

root.render(heading);