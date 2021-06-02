import React, { Component } from 'react'

class FormSpend extends Component {
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.props.formsubmit} className="spend-form" autoComplete="off">
                    <h3>Add a spend</h3>

                    <label htmlFor="cat"> Category
                    <input type="text" id="cat" name="category" placeholder="Enter the category" onChange={this.props.change} required></input>
                    </label>

                    <label htmlFor="amt"> Amount
                    <input type="text" id="amt" name="amount" placeholder="Enter the amount" onChange={this.props.change} required></input>
                    </label>

                    <label htmlFor="dat"> Date
                    <input type="date" id="dat" name="date" placeholder="Enter the date" onChange={this.props.change} required></input>
                    </label>

                    <label htmlFor="tm"> Time
                    <input type="time" id="tm" name="time" placeholder="Enter the time" onChange={this.props.change} required></input>
                    </label>

                    <label htmlFor="txt"> Note about the spend:</label>
                    <textarea rows='5' name="note" onChange={this.props.change} required></textarea>

                    <input type="submit" value="Add spend"></input>
                </form>

            </React.Fragment>
        )
    }
}

export default FormSpend