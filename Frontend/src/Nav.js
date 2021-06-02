import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './Images/logo.jpg'

class Nav extends Component {

    render() {
        return (
            <nav className="navigation-bar">
                <ul>
                    <img src={logo} alt="logo" />
                    <li><NavLink exact to='/'><i className="fa fa-home fa-lg" aria-hidden="true"></i>&nbsp;Home </NavLink></li>
                    <li><NavLink to='/About'>About</NavLink></li>
                    <li><NavLink to='/Login'>Login</NavLink></li>
                    <li><NavLink to='/Signup'>Signup</NavLink></li>
                    <li><NavLink to='/ET'> Expense Tracker </NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;