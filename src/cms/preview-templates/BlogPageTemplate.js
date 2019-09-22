import React from 'react'
import PropTypes from 'prop-types'
import { BlogPageTemplate } from '../../templates/blog-page'

const BlogPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <BlogPageTemplate
        section1={data.blog_page_section1}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

BlogPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BlogPagePreview