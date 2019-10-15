import React from 'react'
import Img from 'gatsby-image'
import paragraphs from "lines-to-paragraphs"


export default function Section3(props) {
    const {image, heading, subheading, text} = props.content;

    return (
        <div className="hero process pad about about-section3">
            <div className="grid-wrapper">
                <div className="col-6 col-sm-12 img-container top">
                    <Img style={{width: '70%'}} fluid={image.childImageSharp.fluid} alt="" className="img-rounded img-shadow"/>
                </div>

               <div className="col-6 col-sm-12 text-wrapper bottom">
                    <div className="text">
                        <p className="lead">{subheading}</p>
                        <h1 className="lead">{heading}</h1>
                        <div className="paragraphs" dangerouslySetInnerHTML={{ __html: paragraphs(text) }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
