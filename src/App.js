import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Promotions from './components/Promotions';
import Contacts from './components/Contacts';
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <Promotions />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
