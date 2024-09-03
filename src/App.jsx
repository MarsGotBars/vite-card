import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card />
    </>
  );
}
