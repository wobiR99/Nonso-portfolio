import React, { useState } from "react";
import AppRoute from "./routes/AppRoute";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  const [active, setActive] = useState("");
  return (
    <div>
      <NavBar active={active} setActive={setActive} />

      <AppRoute setActive={setActive} />
      <Footer />
    </div>
  );
};

export default App;
