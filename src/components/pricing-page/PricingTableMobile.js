import React from 'react'
import './styles.scss'
import Button from '../button/Button'
import {Link} from 'gatsby'

export default function PricingTableMobile() {
    return (
        <div className="hero table pricing-table-mobile">
            <table>
                <tr>
                    <td>
                        <div className="table-heading">
                            <h3 className="lead">Design Prototype </h3>
                            <p className="startingat">Starting at</p>
                            <h1 className="price">$1000</h1>
                            <Link to="/contact?plan=Design%20Prototype"><Button maxWidth="10.8725rem" height="2.6875rem">Get Started</Button></Link>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>Mobile & Web Wireframes</td>
                </tr>

                <tr>
                    <td>Interactive Design Prototypes</td>
                </tr>

            </table>

            <table>
                <tr>
                    <td>
                        <div className="table-heading">
                            <h3 className="lead">Minimum Viable Product</h3>
                            <p className="startingat">Starting at</p>
                            <h1 className="price">$2500</h1>
                            <Link to="/contact?plan=Minimum%20Viable%20Product"><Button maxWidth="10.8725rem" height="2.6875rem">Get Started</Button></Link>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>Mobile & Web Wireframes</td>
                </tr>

                <tr>
                    <td>Interactive Design Prototypes</td>
                </tr>

                <tr>
                    <td>IOS, Android & Web Apps Included</td>
                </tr>

                <tr>
                    <td>QA Testing</td>
                </tr>
            </table>

            <table>
                <tr>
                    <td>
                        <div className="table-heading">
                            <h3 className="lead">Fully-Featured Product</h3>
                            <p className="startingat">Starting at</p>
                            <h1 className="price">$5000</h1>
                            <Link to="/contact?plan=Fully-featured%20Product"><Button maxWidth="10.8725rem" height="2.6875rem">Get Started</Button></Link>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>Mobile & Web Wireframes</td>
                </tr>

                <tr>
                    <td>Interactive Design Prototypes</td>
                </tr>

                <tr>
                    <td>IOS, Android & Web Apps Included</td>
                </tr>

                <tr>
                    <td>QA Testing</td>
                </tr>
            </table>
        </div>
    )
}
