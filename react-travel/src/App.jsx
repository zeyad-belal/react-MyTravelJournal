import "./App.css";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import data from "../data";

function App() {
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

export default App;
