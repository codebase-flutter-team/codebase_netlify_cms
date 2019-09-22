import React from 'react'
import PropTypes from 'prop-types'
import { ProcessPageTemplate } from '../../templates/process-page'

const ProcessPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ProcessPageTemplate
        section1={data.process_section1}
        section2={data.process_section2}
        section3={data.process_section3}
        section4={data.process_section4}
        section5={data.process_section5}
        section6={data.process_section6}
        section7={data.process_section7}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ProcessPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProcessPagePreview