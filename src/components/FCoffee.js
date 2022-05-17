import react, { useState, useEffect } from "react";

function FCoffee({ firstName }) {
  const [coffeList, setCoffeList] = useState();
  const [temperature, setTemperature] = useState("hot");
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then((response) => response.json())
      .then((data) => setCoffeList(data))
      .catch(console.error);
  }, [temperature]);

  return (
    <>
      <h1>Coffee List(F)</h1>
      <p>Hello {firstName}</p>
      <button onClick={() => setTemperature("hot")}>HOT</button>
      <button onClick={() => setTemperature("iced")}>ICED</button>

      {!coffeList ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>Coffees</h2>
          {coffeList.map((coffee) => {
            return <p key={coffee.id}>{coffee.title}</p>;
          })}
        </>
      )}
    </>
  );
}

export default FCoffee;
