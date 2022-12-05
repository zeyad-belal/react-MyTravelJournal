import React from "react"
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Card from "./Components/Card.jsx";
import data from "./data";

export default function App() {
  const cards = data.map((card) => {
    return <Card items={card} />;
  });

  return (
    <>
      <Navbar />
      {cards}
    </>
  );
}

