import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Content from "./layouts/Content";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import "./styles/App.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
};

export default App;
