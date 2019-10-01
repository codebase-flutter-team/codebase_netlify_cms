import React from 'react'
import './process-styles.scss'

export default function Section1(props) {
    const {heading, text} = props.content;
    return (
        <div className="hero hero-mini process process-section1">
            <div className="grid-wrapper">
                <h1 className="lead col-12">{heading}</h1>
                <p className="col-12">{text}</p>
            </div>
        </div>
    )
}
