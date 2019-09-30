import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/Layout'
import Content, { HTMLContent } from '../components/Content'
import Topics from '../components/blog/Topics'
import PopularPosts from '../components/blog/PopularPosts'
import Join from '../components/blog/Join'
import './blog-styles.scss'
import SEO from '../components/SEO/Seo'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  featuredimage
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section blog-wrapper">
      <SEO title={title} description={description} image={featuredimage}/>
      <div className="blogPage-content">
        <div className="grid-wrapper">
          <div className="col-8 blogPagepostbody">
            <h1 className="lead">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="col-4">
            <Join />
            <Topics />
            <PopularPosts />
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        title={post.frontmatter.title}
        meta_title={post.frontmatter.title}
        meta_description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage {
          publicURL
        }
      }
    }
  }
`
