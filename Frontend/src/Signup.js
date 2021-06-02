import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            email: ""
        }
    }

    setUserName = e => {
        this.setState({
            username: e.target.value
        })
    }

    setPassword = e => {
        this.setState({
            password: e.target.value
        })
    }

    setEmail = e => {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/signUpData', this.state)
            .then(function (response) {
                alert(response.data.message)
            })

        this.setState({
            username: "",
            password: "",
            email: ""
        })
    }


    render() {
        return (
            <form className="signup" onSubmit={this.handleSubmit}>
                <div className="signup-area">
                    <h1>Sign-up</h1>

                    <div className="text-box">
                        <i className="fa fa-user icon"></i>
                        <input
                            type="text"
                            placeholder="Username"
                            name=""
                            // pattern=".{5,}"
                            onChange={this.setUserName}
                            required='required'>
                        </input>
                    </div>

                    <div className="text-box">
                        <i className="fa fa-key icon"></i>
                        <input
                            type="password"
                            placeholder="Password"
                            name=""
                            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            onChange={this.setPassword}
                            required='required'>
                        </input>
                    </div>

                    <div className="text-box">
                        <i className="fa fa-envelope"></i>
                        <input
                            // type="email"
                            type="text"
                            placeholder="Email"
                            name=""
                            onChange={this.setEmail}
                            required='required'>
                        </input>
                    </div>

                    <input className="signup-btn" type="submit" name="" value="Sign-up"></input>

                    <div className="acc">
                        <p>Already have an account?</p>
                        <NavLink to='/Login'>Login</NavLink>
                    </div>

                </div>
            </form>
        )
    }
}

export default Signup;