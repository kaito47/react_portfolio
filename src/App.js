import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./pages/aboutMe";
import Portfolio from "./pages/portfolio";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;