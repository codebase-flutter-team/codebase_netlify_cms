import React from 'react'
import './process-styles.scss'
import Img from 'gatsby-image'

export default function Section7(props) {
    const {heading, subheading, text, image} = props.content;
    return (
        <div className="hero process pad process-section7">
            <div className="grid-wrapper">
                <div className="col-6 col-sm-12 text-wrapper top">
                    <div className="text">
                        <p className="lead">{subheading}</p>
                        <h1 className="lead">{heading}</h1>
                        <p>{text}</p>
                    </div>
                </div>

                <div className="col-6 col-sm-12 img-container bottom">
                    <Img style={{width: '80%'}} fluid={image.childImageSharp.fluid} alt=""/>
                </div>
            </div>
        </div>
    )
}
