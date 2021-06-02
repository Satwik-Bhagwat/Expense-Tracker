import React, { Component } from 'react'
import Footer from "./Footer.js"
import { NavLink } from 'react-router-dom'



class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Home-div">
                    <h1 className="Heading">Expense Tracker <hr id="hr-1" /></h1>

                    <NavLink to='/Signup'> <button className="Start-btn">GET STARTED</button></NavLink>

                </div>
                <div className="Home-intro">
                    <div>
                        <h2> Why you should use Expense tracker ? <hr id="hr-2" /></h2>

                        <p>
                            Do you track your expenses on a daily basis?
                            For many people, the idea of logging every
                            transaction into a personal budget sounds
                            like the world’s most boring, insignificant task.
                            But truthfully, there are a number of critical benefits.
                            So, why should you track your expenses?
                        </p>

                        <p>
                            In short, the main reason you should track your
                            expenses is to identify and eliminate wasteful
                            spending habits in your financial life. Moreover,
                            consistently tracking your expenses will help you maintain
                            control of your finances, and promote better financial habits
                            like saving and investing.
                        </p>

                    </div>
                </div>

                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;