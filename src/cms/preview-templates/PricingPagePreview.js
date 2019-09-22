import React from 'react'
import PropTypes from 'prop-types'
import { PricingPageTemplate } from '../../templates/pricing-page'

const PricingPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PricingPageTemplate
        section1={data.pricing_page_section1}
        section2={data.pricing_page_section2}
        section3={data.section4}
        section4={data.section5}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PricingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PricingPagePreview