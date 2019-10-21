import React from 'react'
import './styles.scss'
import Button from '../button/Button'
import {Link} from 'gatsby'

export default function PricingTableMobile(props) {
    const {column1, column2, column3} = props.content;
    return (
        <div className="hero table pricing-table-mobile">
            <table>
                <tr>
                    <td>
                        <div className="table-heading">
                            <h3 className="lead">{column1.title}</h3>
                            <p className="startingat">Starting at</p>
                            <h1 className="price">{column1.price}</h1>
                            <Link to="/contact?plan=Design%20Prototype"><Button maxWidth="10.8725rem" height="2.6875rem">Get Started</Button></Link>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>{column1.features[0].row}</td>
                </tr>

                <tr>
                    <td>{column1.features[1].row}</td>
                </tr>
{/* 
                {column1.features[2].row &&  <tr><td>{column1.features[2].row}</td></tr>}
                {column1.features[3].row &&  <tr><td>{column1.features[3].row}</td></tr>} */}

            </table>

            <table>
                <tr>
                    <td>
                        <div className="table-heading">
                            <h3 className="lead">{column2.title}</h3>
                            <p className="startingat">Starting at</p>
                            <h1 className="price">{column2.price}</h1>
                            <Link to="/contact?plan=Minimum%20Viable%20Product"><Button maxWidth="10.8725rem" height="2.6875rem">Get Started</Button></Link>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>{column2.features[0].row}</td>
                </tr>

                <tr>
                    <td>{column2.features[1].row}</td>
                </tr>

                <tr>
                    <td>{column2.features[2].row}</td>
                </tr>

                <tr>
                    <td>{column2.features[3].row}</td>
                </tr>
            </table>

            <table>
                <tr>
                    <td>
                        <div className="table-heading">
                            <h3 className="lead">{column3.title}</h3>
                            <p className="startingat">Starting at</p>
                            <h1 className="price">{column3.price}</h1>
                            <Link to="/contact?plan=Fully-featured%20Product"><Button maxWidth="10.8725rem" height="2.6875rem">Get Started</Button></Link>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>{column3.features[0].row}</td>
                </tr>

                <tr>
                    <td>{column3.features[1].row}</td>
                </tr>

                <tr>
                    <td>{column3.features[2].row}</td>
                </tr>

                <tr>
                    <td>{column3.features[3].row}</td>
                </tr>
            </table>
        </div>
    )
}
