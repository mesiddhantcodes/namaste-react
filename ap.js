// const heading = React.createElement('h1', {
//     id: "heading", xyz: "abc  "
// }, 'Hello Namaste Reacthh');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

// nested structure
// ---------------------------------------------
// name of the tag,object of attributes,children
// ---------------------------------------------
// const parent = React.createElement('div', { id: "parent" },
//     [React.createElement('div', { id: "child" },
//         [React.createElement('h1', null, 'Hello Namaste Reacthh'),
//         React.createElement('p', null, 'This is a paragraph')]
//     ), React.createElement('div', { id: "child" },
//         [React.createElement('h1', null, 'Hello Namaste Reacthh'),
//         React.createElement('p', null, 'This is a paragraph')]
//     )]
// );

// const parent = React.createElement('h1', null, 'Hello Namaste React');

// parent is the react element which is the object

// jsx is the js syntax which help to create the react element
// jsx help to create the react element easily

const jsxHeading =( 
  <h1>
    sdfjsdfsdd
  </h1>
);

// React Components
// -------------------------------------------------
// Two types of components
// 1. Functional Components-NEW
// 2. Class Based Components-OLD
// -------------------------------------------------

// for one line
const Title = () => <h1 className="">Hello Namaste React components</h1>;

// a js function which return the react element or jsx.
// return React.createElement('h1', null, 'Hello Namaste Reacthh');
const num = 10000;
const HeadingComponent = () => (
  <div id="container">
    <h1 className="">Hello Namaste React this is functional components</h1>
    <Title />
  </div>
);

// ReactDOM deal with browsers
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
// this render make the react element to the real dom element
