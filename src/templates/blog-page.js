import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/Layout'
import Section1 from '../components/blog/Section1'
import BlogPost from '../components/blog/BlogPost'
import Topics from '../components/blog/Topics'
import PopularPosts from '../components/blog/PopularPosts'
import './post-styles.scss'
import Join from '../components/blog/Join'
import SEO from '../components/SEO/Seo'

export class BlogPageTemplate extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      console.log("clicked")
    }

    render() {
        console.log(this.props.context);
        const { currentPage: page, numPages } = this.props.context
        const isFirst = page === 1
        const isLast = page === numPages
        const prevPage = page - 1 === 1 ? "/blog" : `/blog/${(page - 1).toString()}`
        const nextPage = `/blog/${(page + 1).toString()}`
        const {section1, content, meta_title, meta_description, path} = this.props
        return (
           <Layout>
               <SEO title={meta_title} description={meta_description} pathname={path} />
               <Section1 content={section1}/>
                <div className="grid-wrapper posts-wrapper">
                 <div className="post-container col-8 col-sm-12">
                     {content.map(post => {
                        return (
                           <div key={post.node.id} className="post-body">
                             <BlogPost content={post} img={post.node.frontmatter.featuredimage.childImageSharp.fluid}/>
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
                      <Link to={nextPage} rel="next" onClick={this.handleClick}>
                        →
                      </Link>
                    )}
                  </div>
        
                </div>
           </Layout>
        )
    }
}

const BlogPage = ({data, pageContext}) => {
    const posts =  data.posts.edges;
    const currentPage = data.currentPage;

    return  (
        <BlogPageTemplate
            content={posts}
            meta_title={currentPage.frontmatter.meta_title}
            meta_description={currentPage.frontmatter.meta_description}
            path={currentPage.frontmatter.path}
            section1={currentPage.frontmatter.blog_page_section1}
            context={pageContext}
            
        />
      )
  }

  
export default BlogPage

 export const pageQuery = graphql`
   query ($skip: Int!, $limit: Int!){
      posts:  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } limit: $limit skip: $skip filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
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
         meta_title
         meta_description
         path
         blog_page_section1 {
           heading
           text
         }
       }
     }
   }`
