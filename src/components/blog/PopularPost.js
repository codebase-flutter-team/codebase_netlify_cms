import React from 'react'
import './blog-styles.scss'

export default function Popularpost({content}) {
    return (
        <div className="popular-post">
            <p className="lead topic">{content.topic}</p>
            <p className="lead desc">{content.title}</p>
        </div>
    )
}
