import React from 'react'
import Button from '../button/Button'
import Img from 'gatsby-image'

export default function Hero5(props) {
    const {image, heading, subheading} = props.content
    if (typeof image === 'object' ) { 
    return (
        <div className="hero hero6">
            <div className="grid-wrapper">
                <div className="col-6 left">
                    <h1>{heading}</h1>
                    <p>{subheading}</p>
                    <a href="https://discord.gg/r3j7Byh" target="_blank" rel="noopener noreferrer"><Button white width="15.625rem">Join Us</Button></a>
                </div>
                <div className="col-6 img-container">
                    <Img style={{width: '100%'}} fluid={image.childImageSharp.fluid} alt=""/>
                </div>
            </div>
        </div>
    )
    } else {
        return (
            <div className="hero hero6">
            <div className="grid-wrapper">
                <div className="col-6 left">
                    <h1>{heading}</h1>
                    <p>{subheading}</p>
                    <a href="https://discord.gg/r3j7Byh" target="_blank" rel="noopener noreferrer"><Button white width="15.625rem">Join Us</Button></a>
                </div>

                <div>
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
        )
    }
}
