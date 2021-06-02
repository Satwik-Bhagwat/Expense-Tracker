import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "./CSS/index.css"
import "./CSS/home.css"
import "./CSS/about.css"
import "./CSS/login.css"
import "./CSS/signup.css"
import "./CSS/ET.css"
import Nav from "./Nav.js"
import Home from "./Home.js"
import About from "./About.js"
import Login from "./login.js"
import Signup from "./Signup.js"
import ExpenseTracker from "./ET-page/ET.js"
import { Route, HashRouter } from "react-router-dom"

class App extends Component {

    render() {
        return (
            <HashRouter>
                <React.Fragment>
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Signup" component={Signup} />
                    <Route path="/ET" component={ExpenseTracker} />
                </React.Fragment>
            </HashRouter>
        );

    }
}




ReactDOM.render(<App />, document.getElementById("root"));
