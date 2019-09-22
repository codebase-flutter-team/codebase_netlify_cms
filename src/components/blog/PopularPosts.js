import React from 'react'
import './blog-styles.scss'
import PopularPost from './PopularPost'
import { Link } from "gatsby"
import postData from './popularPostData'

export default function PopularPosts(props) {
    const data = postData();
    console.log(data);
    return (
        <div className="popular-posts">
            <h3>Popular Posts</h3>
            {data.allMarkdownRemark.edges.map(edge => {
                return <Link to={edge.node.fields.slug}><PopularPost content={edge.node.frontmatter} /></Link> 
            })}
        </div>
    )
}