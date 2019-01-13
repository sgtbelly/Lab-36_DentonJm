import React from "react";
import ReactDOM from "react-dom";

import App from "./app.js";

// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

class Content extends React.Component {
  render() {
    return <h1>Content</h1>;
  }
}

export default Content;
