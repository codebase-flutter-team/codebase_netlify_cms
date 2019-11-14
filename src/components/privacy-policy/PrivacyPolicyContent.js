import React from 'react'
import './term-styles.scss'

export default function PrivacyPolicyContent({content}) {
    return (
        <div className="terms-page hero hero-mini">
            <div className="grid-wrapper">
                <div className="col-12" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    )
}
