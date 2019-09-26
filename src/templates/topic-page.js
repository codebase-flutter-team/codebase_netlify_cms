import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/Layout'
import Section1 from '../components/blog/Section1'
import BlogPost from '../components/blog/BlogPost'
import Topics from '../components/blog/Topics'
import PopularPosts from '../components/blog/PopularPosts'
import './post-styles.scss'
import Join from '../components/blog/Join'

export class TopicPageTemplate extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { currentPage: page, topicPath} = this.props.context
        const numPages = Math.ceil(this.props.content.length / this.props.context.postsPerPage);
        const isFirst = page === 1
        const isLast = page === numPages
        const prevPage = page - 1 === 1 ? "${topicPath}" : `${topicPath}/${(page - 1).toString()}`
        const nextPage = `/blog/${(page + 1).toString()}`
        const {section1, content} = this.props
        return (
           <Layout>

                <div className="post-topic hero">
                  <h1 className="lead">{this.props.context.topic}</h1>
                </div>

                <div className="grid-wrapper posts-wrapper">

                 <div className="post-container col-8 col-sm-12">
                     {content.map(post => {
                        console.log(post.node.frontmatter.featuredimage.publicURL);
                        return (
                           <div className="post-body">
                             <BlogPost key={post.node.id} content={post} img={post.node.frontmatter.featuredimage.childImageSharp.fluid}/>
                           </div>
                          )

                     })}
                 </div>

                 <div className="col-4 col-sm-12 blog-sidebar">
                     <Join />
                     <Topics />
                     <PopularPosts />
                 </div>

                 <div className="pagination col-12">
                    {!isFirst && (
                    <Link to={prevPage} rel="prev">
                      ←
                    </Link>
                    )}
                   <div className="pagination-numbers">
                    {Array.from({ length: numPages }, (_, i) => (
                      <Link style={{color: page == i + 1 && `#693FAD`}} key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
                         {i + 1} 
                      </Link>
                    ))}
                   </div>
                    {!isLast && (
                      <Link to={nextPage} rel="next">
                        →
                      </Link>
                    )}
                  </div>
        
                </div>
           </Layout>
        )
    }
}

const TopicPage = ({data, pageContext}) => {
    const posts =  data.posts.edges;
    const currentPage = data.currentPage;

    return  (
        <TopicPageTemplate
            content={posts}
            section1={currentPage.frontmatter.blog_page_section1}
            context={pageContext}
            // featuredImage={featuredImage}
            // excerpt={excerpt}
            // topic={topic}
            // link={path}
        />
      )
  }


export default TopicPage


export const pageQuery = graphql`
   query ($skip: Int!, $limit: Int!, $topic: String!){
      posts:  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } limit: $limit skip: $skip filter: {frontmatter: {templateKey: {eq: "blog-post"}, topic: {eq: $topic}}}) {
        edges {
          node {
            id
            html
            excerpt(pruneLength: 105)
            fields {
              slug
            }
            frontmatter {
              featuredimage{
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              topic
              title
            }
          }
        }
      } 
   
      currentPage: markdownRemark(frontmatter: {templateKey: {eq: "blog-page"}}) {
       frontmatter {
         blog_page_section1 {
           heading
           text
         }
       }
     }
   }`
