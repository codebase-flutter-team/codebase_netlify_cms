import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Button from '../button/Button'
import './hero-styles.scss'


export default function Hero4Mobile(props) {
    const {subheading, heading, description, image} = props.content;
    return (
        <div className="hero hero4-mobile">
            <div className="grid-wrapper">
               <Zoom>
                    <div className="col-12">
                        <img src={image.publicURL} alt={heading}/>
                    </div>
               </Zoom>

                <div className="col-12 main">
                    <p>{subheading}</p>
                    <h1>{heading}</h1>
                    <p>{description}</p>  
                    <div className="btns">
                        <Button color="white">Button</Button>
                        <Button color="white">Button</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
