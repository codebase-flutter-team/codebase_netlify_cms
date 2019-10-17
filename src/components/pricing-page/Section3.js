import React from 'react'
import Button from '../button/Button'
import image from '../../assets/images/word_of_mouth.png'

export default function Section3() {
    return (
        <div className="hero pricing-section3">
            <div className="grid-wrapper">
                <div className="col-6 left">
                    <h1>Join the Community!</h1>
                    <p>Join our Discord community to share knowledge, network and get feedback on your startup idea. </p>
                    <a href="https://discord.gg/r3j7Byh" target="_blank" rel="noopener noreferrer"><Button white width="15.625rem">Join Us</Button></a>
                </div>
                <div className="col-6 img-container">
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    )
}
