import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./Components/pages/aboutMe";
import Portfolio from "./Components/pages/portfolio";
import NavTabs from "./Components/NavTabs";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;