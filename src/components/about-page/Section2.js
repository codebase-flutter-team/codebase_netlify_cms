import React from 'react'
import './styles.scss'
import Img from 'gatsby-image'
import paragraphs from "lines-to-paragraphs"

export default function Section2(props) {
    const {image, heading, subheading, text} = props.content;

    return (
        <div className="hero process pad about about-section2">
            <div className="grid-wrapper">
                <div className="col-6 col-sm-12 text-wrapper top">
                    <div className="text">
                        <p className="lead">{subheading}</p>
                        <h1 className="lead">{heading}</h1>
                        <div className="paragraphs" dangerouslySetInnerHTML={{ __html: paragraphs(text) }} />
                    </div>
                </div>
                <div className="col-6 col-sm-12 img-container bottom">
                     <Img style={{width: '70%'}} fluid={image.childImageSharp.fluid} alt="" className="img-rounded img-shadow"/>
                </div>
            </div>
        </div>
    )
}
