import { useState } from "react";
import "./App.css";
import { List } from "./List";
import Country from "./Country";

function App() {
  const Lista = [
    {
      name1: {
        name: "Krupa",
        adress: "Rajkot",
      },
      name2: {
        id: 1,
        type: "ABC",
      },
    },
  ];
  const countries = [
    {
      id: 1,
      name: "indea",
    },
    {
      id: 2,
      name: "London",
    },
    {
      id: 3,
      name: "USA",
    },
    {
      id: 4,
      name: "UAE",
    },
  ];
  return (
    <>
      <List data={Lista} />
      <Country menu={countries} data={Lista} />
    </>
  );
}

export default App;
