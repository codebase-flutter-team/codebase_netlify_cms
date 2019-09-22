import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import './hero-styles.scss'


export default function Hero3(props) {
    const {heading, blurbs} = props.content;
  
    return (
        <div className="hero hero3">
            <div className="grid-wrapper">
                <div className="col-7">
                    <Fade bottom>
                        <p className="lead">{heading.subheading}</p>
                        <h1 className="lead">{heading.heading}</h1>
                        <p>{heading.description}</p>
                    </Fade>
                    
                    <dl>
                        {blurbs.map(item => {
                             return (
                                 <div>
                                     <Fade bottom>
                                     <dt className="lead">{item.title}</dt>
                                     <dd>{item.text}</dd>
                                     </Fade>
                                 </div>
                             )
                        })}
                    </dl>
                </div>

                <div className="col-5 img-container">
                    <Zoom>
                        <img src={heading.image.publicURL} alt=""/>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}
