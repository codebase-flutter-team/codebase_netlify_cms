import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"
import Button from '../button/Button'
import './hero-styles.scss'
import {Link} from 'gatsby'

export default function Hero2({content}) {
    const {heading, blurbs} = content;

    return (
        <div className="hero hero2" id="hero2">
            <div className="grid-wrapper">
                <div className="col-12">
                    <p className="lead">{heading.subheading}</p>
                </div>

                <div className="col-12">
                    <h1 className="lead">{heading.heading}</h1>
                </div>

                {blurbs.map((item, index) => {
                    return (
                        <div key={index} className="col-4 hero2-item">
                            <ScrollAnimation animateOnce={true} animateIn="fadeInUp">
                            <span className="image icon">
                                <img src={item.image.publicURL} alt={item.heading}/>    
                            </span>
                            <h3 className="lead">{item.heading}</h3>
                            <p>{item.text}</p>
                            </ScrollAnimation>
                        </div>  
                    )
                })}

                <div className="col-12">
                    <Link to="/pricing"><Button>See Our Prices</Button></Link>
                </div>
            </div>
        </div>
    )
}
