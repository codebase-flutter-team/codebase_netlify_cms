import React from 'react'
import PropTypes from 'prop-types'
import TermsPageContent from '../components/terms-page/TermsPageContent'
import Layout from '../components/layout/Layout'
import { graphql } from 'gatsby'
import SEO from '../components/SEO/Seo'

export const TermsPageTemplate = ({meta_title, meta_description, content}) => {

  return (
    <Layout>
         <SEO title={meta_title} description={meta_description}/>
        <TermsPageContent content={content}/>
    </Layout>
  )
}

TermsPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
}

const TermsPage = ({ data }) => {
  const { markdownRemark } = data
  return (
      <TermsPageTemplate
        meta_title={markdownRemark.frontmatter.meta_title}
        meta_description={markdownRemark.frontmatter.meta_description}
        content={markdownRemark.html}
      />
  )
}

TermsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default TermsPage

export const pageQuery = graphql`
  query TermsPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "terms-page"}}) {
        html
        frontmatter {
          meta_description
          meta_title
        }
      }
  }
`
