import React from 'react'
import './styles.scss'

export default function Section1(props) {
    const { heading, subheading } = props.content;
    return (
        <div className="hero contact-section1">
           <div className="grid-wrapper">
                <h1 className="lead col-12">{heading}</h1>
                <p className="col-12">{subheading}</p>
           </div>
        </div>
    )
}
