import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout/Layout'

const TopicsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section" style={{padding: '2rem'}}>
      <Helmet title={`Topics | ${title}`} />
      <div className="container content grid-wrapper">
        <div className="columns">
          <div>
            <h1 className="lead">Topics</h1>
            <ul className="topiclist">
              {group.map(topic => (
                <li key={topic.fieldValue}>
                  <Link to={`/topics/${kebabCase(topic.fieldValue)}/`}>
                    {topic.fieldValue} ({topic.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TopicsPage

export const topicPageQuery = graphql`
  query TopicsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___topic) {
        fieldValue
        totalCount
      }
    }
  }
`