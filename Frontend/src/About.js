import React, { Component } from 'react'

class Container extends Component {
    render() {
        const iconColor = {
            color: this.props.color
        }

        const delay = {
            animationDelay: this.props.delay,
            visibility: 'hidden',
            animationFillMode: 'forwards'
        }
        return (
            <div style={delay} className="container">
                <i style={iconColor} className={this.props.icon} aria-hidden="true"></i>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="about-body">

                    <Container
                        icon={"fa fa-inr"}
                        text={"Manage all your expenses in one place.Add a spend, keep track of all your expenses"}
                        color={"#4caf50"}
                        delay={'0ms'}>
                    </Container>

                    <Container
                        icon={"fa fa-line-chart"}
                        text={"Set monthly budget and plan your spends"}
                        color={"rgb(156, 156, 156)"}
                        delay={'0.1s'}>
                    </Container>

                    <Container
                        icon={"fa fa-bell-o"}
                        text={"Set a reminder to pay your bills"}
                        color={"white"}
                        delay={'0.2s'}>
                    </Container>

                    <Container
                        icon={"fa fa-pie-chart"}
                        text={"Pie chart representation of spends in each category every month."}
                        color={"rgb(101, 101, 255)"}
                        delay={'0.3s'}>
                    </Container>

                    <Container
                        icon={"fa fa-bar-chart"}
                        text={"Bar chart representation of spends per month"}
                        color={"rgb(101, 101, 255)"}
                        delay={'0.4s'}>
                    </Container>

                    <Container
                        icon={"fa fa-file-pdf-o"}
                        text={"Generate a pdf of expenses every month"}
                        color={"rgb(255, 37, 37)"}
                        delay={'0.5s'}>
                    </Container>

                </div>
            </div>

        );
    }
}


export default About;