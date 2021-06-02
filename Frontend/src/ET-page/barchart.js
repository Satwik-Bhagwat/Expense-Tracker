import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

class BarPlot extends Component {
    render() {
        return (
            <React.Fragment>
                <h3> Bar chart </h3>
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

                <BarChart width={450} height={350} data={this.props.bardata} margin={{ top: 0, right: 0, left: 10, bottom: 0 }} >
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Legend />
                    <Bar dataKey="Money_Spent" fill={'black'} />
                </BarChart>

                <button onClick={this.props.plotbar}> Plot Chart</button>
            </React.Fragment>
        )
    }
}

export default BarPlot