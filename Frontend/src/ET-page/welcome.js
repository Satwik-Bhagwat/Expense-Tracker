import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>
                    Hello {this.props.username} <i className="fa fa-smile-o fa-2x" aria-hidden="true"></i>
                    , Welcome to expense tracker <i className="fa fa-bar-chart fa-2x" aria-hidden="true"></i>
                    <button onClick={this.props.logout}> Logout <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </button>
                </h4>
            </React.Fragment>
        )
    }
}

export default Welcome