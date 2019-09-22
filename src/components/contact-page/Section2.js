import React from 'react'
import './styles.scss'
import ContactForm2 from './ContactForm2'

export default function Section2(props) {
    const {heading, subheading, text} = props.content;
    return (
        <div className="hero contact-section2">
            <div className="grid-wrapper">
                <div className="text col-6 col-sm-12">
                    <p class="lead">{subheading}</p>
                    <h1 className="lead">{heading}</h1>
                    <p>{text}</p>
                </div>

                <div className="col-6 col-sm-12">
                    <ContactForm2 />
                </div>
            </div>
        </div>
    )
}
