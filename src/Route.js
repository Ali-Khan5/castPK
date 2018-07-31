import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from "./Components/Home";
import Episode from './Components/Episode';

import Header from './Layout/header'
import Footer from './Layout/footer'
import history from './History';



class Routers extends Component {

    render() {
        return (
            <Router history={history}>
                <div className="mainbody">


                    <Header />
                    <Route exact path="/" component={Home} />

                    <Route exact path="/episode/:num" component={Episode} />

                    <Footer />
                </div>

            </Router>
        )
    }
}

export default Routers;