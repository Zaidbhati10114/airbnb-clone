import React from "react";

import "./App.css";
import Home from "./Home";
import Header from "./Header";
import SearchPage from "./SearchPage";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* Home */}
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
