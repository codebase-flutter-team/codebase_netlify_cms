import React from 'react'
import './process-styles.scss'

export default function Section2(props) {
    const {heading, subheading} = props.content
    return (
        <div className="hero process process-section2">
            <div className="grid-wrapper">
                <p className="lead col-12">{subheading}</p>
                <h1 className="lead col-12">{heading}</h1>
            </div>
        </div>
    )
}
