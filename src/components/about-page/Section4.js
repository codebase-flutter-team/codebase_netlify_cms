import React from 'react'
import './styles.scss'

export default function Hero2({content}) {
    const {heading,team} = content;

    return (
        <div className="hero about-section4">
            <div className="grid-wrapper">
                <div className="col-12">
                    <p className="lead">{heading.subheading}</p>
                </div>

                <div className="col-12">
                    <h1 className="lead">{heading.heading}</h1>
                </div>

                {team.map((item, index) => {
                    return (
                        <div key={index} className="col-4 team-item">
                            <span className="image icon">
                                <img src={item.image.publicURL} alt={item.heading}/>    
                            </span>
                            <h3 className="lead">{item.name}</h3>
                            <p>{item.role}</p>
                        </div>  
                    )
                })}
            </div>
        </div>
    )
}
