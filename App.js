import React from "react";
import ReactDom from "react-dom";

// React.createElement => object => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "root" },
//   "akshay saini reactjs "
// );

// JSX (transpiled before  it reaches the JS Engine) - PRACEL - babel

//JSX =>Babel transpiles it to React.createElement => ReactElement - JS Object => HTML Element (render)

// React Element

const elem = (<h1>Initial component</h1>)



const title =
 ( <h1 className="sk2">
    {elem}
    react element</h1> )


// const Number = 10000



const HeadingComponent = () => {
  return (
    <div className="container">
      {/* <Title /> */}
     <h3> {Number}</h3>
   {/* <h2>  {title} </h2> */}
      <h1 className="heading"> functional component</h1>
    </div>
  );
};







const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
