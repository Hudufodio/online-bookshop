import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header";
import Card from "./components/card";
import Modal from "./components/modal";
import Hero from "./components/hero";

const Main = () => {
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <Modal />
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
