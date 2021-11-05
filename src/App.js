import Header from "./components/Header/index.js";
import Footer from "./components/Footer";

import React from "react";
import Routes from "./routes";

export default function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}
