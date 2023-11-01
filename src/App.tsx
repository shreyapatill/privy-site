// src/App.tsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Other content of the page goes here */}

      <Footer />
    </div>
  );
}

export default App;
