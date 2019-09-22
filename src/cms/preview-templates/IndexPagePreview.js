import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        subtitle={data.subtitle}
        subheading={data.subheading}
        metaDescription={data.meta_description}
        metaTitle={data.meta_title} 
        section1={data.section1 || {}}
        section2={data.section2 || { blurbs: []}}
        section3={data.section3 || { blurbs: []}}
        section4={data.section4 || {}}
        section5={data.section5 || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview