import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header.jsx";
import Quotes from "./components/Quotes.jsx";
import Footer from "./components/Footer.jsx";
import { quotesObj } from "./components/Data.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />

    {quotesObj.map((item, idx) => {
      return <Quotes key={idx} quotes={item.quote} author={item.auhtor} />;
    })}

    <Footer />
  </React.StrictMode>
);