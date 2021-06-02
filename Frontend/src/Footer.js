import React, { Component } from 'react'
import reactLogo from './Images/react-logo.jpg'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <h3> Made Using React </h3>
                <img src={reactLogo} alt="react-logo" />
            </footer>
        );
    }
}

export default Footer;