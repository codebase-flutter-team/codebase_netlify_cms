import React, { Component } from 'react'
import PricingTable from './PricingTable'
import PricingTableMobile from './PricingTableMobile'
import './styles.scss'


export default class Section1B extends Component {
    render() {
        const {heading, subheading, table} = this.props.content;
        return (
            <div className="hero hero-mini pricing-section1B">
                <div>
                    <div className="top">
                        <h1 className="lead">{heading}</h1>
                        <p>{subheading}</p>
                    </div>  
                    
                    {this.props.isMobile ? <PricingTableMobile content={table}/> :  <PricingTable content={table}/>}
                </div>

            </div>
        )
    }
}
