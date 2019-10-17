import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Button from '../button/Button'
import './hero-styles.scss'


export default function Hero4(props) {
    const {subheading, heading, description, image} = props.content;
    return (
        <div className="hero hero4">
            <div className="grid-wrapper">
                <div className="col-6 main">
                    <p>{subheading}</p>
                    <h1>{heading}</h1>
                    <p className="desc">{description}</p>   
                    <div className="btns">
                        <Button color="#ffffff" small>Button</Button>
                        <Button color="#ffffff" small>Button</Button>
                    </div>
                </div>
                <Zoom>
                    <div className="col-6 img-container">
                       <img className="pc" src={image.publicURL} alt={heading}/>
                    </div>
                </Zoom>
            </div>
        </div>

    )
}
