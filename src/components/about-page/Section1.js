import React from 'react'
import './styles.scss'

export default function Section1(props) {
    const {heading, subheading} = props.content
    return (
        <div className="hero hero-mini about-section1">
          <div className="main-content">
            <h1 className="lead">{heading}</h1>
            <p>{subheading}</p>
          </div>
        </div>
    )
}
