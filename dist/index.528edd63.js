// const heading = React.createElement('h1', {
//     id: "heading", xyz: "abc  "
// }, 'Hello Namaste Reacthh');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
// nested structure
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", null, "Hello Namaste Reacthh"),
        React.createElement("p", null, "This is a paragraph")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", null, "Hello Namaste Reacthh"),
        React.createElement("p", null, "This is a paragraph")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.528edd63.js.map
