import React from "react";
import "./App.css"
import AddMedicine from "./components/AddMedicine";
import NavBar from "./components/Header/NavBar";

function App() {
  return (
    <>
    <section><NavBar /></section>
      
      <section>
        <AddMedicine />
      </section>
    </>
  );
}

export default App;
