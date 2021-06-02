import React, { Component } from 'react'
import {Pie,PieChart} from 'recharts'

class PiePlot extends Component {
    render() {
        return (
            <React.Fragment>
                <h3> Pie chart </h3>
                <div className="input">
                    <label htmlFor="mm"> Month
                    <select type="text" id="mm" name="month" placeholder="select the month" onChange={this.props.change} required>
                            {this.props.months.map((month, index) => (
                                <option key={index} value={String(index + 1)}>{month}</option>
                            ))}
                        </select>
                    </label>

                    <label htmlFor="yyyy"> Year
                    <input type="text" id="yyyy" name="year" placeholder="Enter the year" onChange={this.props.change} required>
                        </input>
                    </label>
                </div>

                <PieChart width={450} height={350} margin={{ top: 0, right: 0, left: 10, bottom: 0 }} >
                    <Pie data={this.props.barData } dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                </PieChart>

                <button onClick={this.props.plotbar}> Plot Chart</button>
            </React.Fragment>
        )
    }
}

export default PiePlot