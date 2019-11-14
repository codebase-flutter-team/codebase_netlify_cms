import React from 'react'
import './term-styles.scss'

export default function TermsPageContent({content}) {
    return (
        <div className="terms-page hero hero-mini">
            <div className="container">
                <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    )
}
