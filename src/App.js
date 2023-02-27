// import "./App.css";
import React from "react";
import Head from "./components/Head/Head";
import GlobalStyle from "./globalStyles";
import Calculator from "./components/calculator/Calculator";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Head />
      <Calculator />
    </div>
  );
}

export default App;
