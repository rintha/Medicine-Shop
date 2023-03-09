import React, { useState } from "react";
import AddMedicine from "./components/AddMedicine";
import NavBar from "./components/Header/NavBar";
import Medicine from "./components/Medicine";
import CartProvider from "./store/CartProvider";

function App() {
  const [medicines, setMedicines] = useState([]);
  return (
    <CartProvider>
      <NavBar />
      <section>
        <AddMedicine setMedicines={setMedicines} />
      </section>
      <Medicine medicines={medicines} />
    </CartProvider>
  );
}

export default App;
