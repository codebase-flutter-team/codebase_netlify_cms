import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout';
import Section1 from '../components/contact-page/Section1';
import Section2 from '../components/contact-page/Section2';
import SEO from '../components/SEO/Seo'

export class ContactPageTemplate extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {section1, section2, meta_title, meta_description, path} = this.props
        return (
           <Layout>
               <SEO title={meta_title} description={meta_description} pathname={path}/>
               <Section1 content={section1}/>
               <Section2 content={section2}/>
           </Layout>
        )
    }
}

const ContactPage = ({data}) => {
    const { frontmatter } = data.markdownRemark;
    return  (
        <ContactPageTemplate 
            section1={frontmatter.contact_page_section1}
            section2={frontmatter.contact_page_section2}
            meta_title={frontmatter.meta_title}
            meta_description={frontmatter.meta_description}
            path={frontmatter.path}
        />
      )
  }

  
export default ContactPage

export const pageQuery = graphql`
        query ContactPageTemplate {
            markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}) {
              frontmatter {
                meta_title
                meta_description
                path
                contact_page_section1 {
                  subheading
                  heading
                }
                contact_page_section2 {
                  heading
                  subheading
                  text
                }
              }
            }
        }`