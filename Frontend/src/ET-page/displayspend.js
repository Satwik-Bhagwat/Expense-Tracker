import React, { Component } from 'react'

class DisplaySpend extends Component {
    render() {
        return (
            <React.Fragment>
                <h3> Your spends </h3>
                <ul>
                    {
                        this.props.spends.slice(0).reverse().map((item, index) =>
                            <li
                                key={item._id}
                                className='list-item'>
                                {item.category}
                                <span id={item._id} onClick={this.props.delete}>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </span>
                                <span>{item.date}</span>
                                <span>Rs.{item.amount}</span>
                            </li>)
                    }
                </ul>
            </React.Fragment>
        )
    }
}

export default DisplaySpend