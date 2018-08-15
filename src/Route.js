import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Episode from "./Components/Episode";
import NotFound from "./Components/NotFound";
import Header from "./Layout/header";
import Footer from "./Layout/footer";
import history from "./History";
import "./App.css";
class Routers extends Component {
  render() {
    return (
      <Router>
        <div >
          <Header />
          <div className="pageContentWrapper">
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/episode/:num" component={Episode} />

              <Route component={NotFound} />
            </Switch>
         </div>
         <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default Routers;
