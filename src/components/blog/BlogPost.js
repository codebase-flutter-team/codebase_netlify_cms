import React from 'react'
import './blog-styles.scss'
import {Link} from 'gatsby'
import Img from "gatsby-image"

export default function BlogPost(props) {
    const {content, img} = props;
    const {node: post} = content;
    const title = post.frontmatter.title;
    const text = post.excerpt;
    return (
        <div className="blog-post">
            <Img fluid={img} alt=""/>
            <div className="card-content">
                <p className="lead dev">{post.frontmatter.topic}</p>
                <h3 className="lead title">{title}</h3>
                <p className="text">{text}</p> 
                <p className="lead read-more">
                    <Link to={post.fields.slug}>Read more</Link>
                </p>           
            </div>
        </div>
    )
}
