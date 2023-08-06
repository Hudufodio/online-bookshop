import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header";
import Card from "./components/card";
import Hero from "./components/modal";

const Main = () => {
  return (
    <>
      <Header />
        <Hero />
        <Card />
      </>
  );
};

const div = document.getElementById("root");
if (div) {
  const root = ReactDOM.createRoot(div);
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
}
