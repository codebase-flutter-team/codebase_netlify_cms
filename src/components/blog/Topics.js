import React from 'react'
import {Link } from 'gatsby'
import './blog-styles.scss'

export default function Topics() {
    return (
        <div className="topic-container">
            <Link to="blog/topics"><h3>Topics</h3></Link>
            <p><Link to="/topics/development">Development</Link></p>
            <p><Link to="/topics/team-building">Team Building</Link></p>
            <p><Link to="/topics/marketing">Marketing</Link></p>
            <p><Link to="/topics/analytics">Analytics</Link></p>
            <p><Link to="/topics/design">Design</Link></p>
            <p><Link to="/topics/business-model">Business Model</Link></p>
        </div>
    )
}
