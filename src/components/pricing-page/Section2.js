import React from 'react'
import Img from 'gatsby-image'
import './styles.scss'

export default function Section2(props) {
    const {heading, subheading, text, image} = props.content

    return (
        <div className="hero pricing-section2">
            <div className="grid-wrapper">
                <div className="img-container col-6 col-sm-12">
                    <Img style={{width: '80%'}} fluid={image.childImageSharp.fluid} alt=""/>
                </div>
                <div className="content-container col-6 col-sm-12 ">
                    <div className="content">
                        <p className="lead">{subheading}</p>
                        <h1 className="lead">{heading}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
