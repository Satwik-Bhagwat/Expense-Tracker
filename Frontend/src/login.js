import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
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

    handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
        axios.post('http://localhost:5000/LoginData', this.state)
            .then(response => {
                alert(response.data.message)
                if (response.data.success) {
                    localStorage.setItem("TOKEN", response.data.token);
                }

            })

        this.setState({
            username: "",
            password: ""
        })


    }
    render() {
        return (
            <form className="login" onSubmit={this.handleSubmit}>

                <div className="login-area">
                    <h1>Login</h1>

                    <div className="text-box">
                        <i className="fa fa-user icon"></i>
                        <input
                            type="text"
                            placeholder="Username"
                            name=""
                            onChange={this.setUserName}
                        >
                        </input>
                    </div>

                    <div className="text-box">
                        <i className="fa fa-key icon"></i>
                        <input
                            type="password"
                            placeholder="Password"
                            name=""
                            onChange={this.setPassword}
                        >
                        </input>
                    </div>

                    <input className="login-btn" type="submit" name="" value="Login"></input>

                    <div className="no-acc">
                        <p>Don't have an account?</p>
                        <NavLink to='/Signup'>Signup</NavLink>
                    </div>

                </div>
            </form>
        )
    }
}

export default Login;