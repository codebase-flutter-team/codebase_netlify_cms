import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout';
import Section1 from '../components/process-page/Section1';
import Section2 from '../components/process-page/Section2';
import Section3 from '../components/process-page/Section3';
import Section4 from '../components/process-page/Section4';
import Section5 from '../components/process-page/Section5';
import Section6 from '../components/process-page/Section6';
import Section7 from '../components/process-page/Section7';
import Hero5 from '../components/heroes/Hero5'

export class ProcessPageTemplate extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {section1, section2, section3, section4, section5, section6, section7, section8} = this.props
        return (
           <Layout>
               <Section1 content={section1}/>
               <Section2 content={section2}/>
               <Section3 content={section3}/>
               <Section4 content={section4}/>
               <Section5 content={section5}/>
               <Section6 content={section6}/>
               <Section7 content={section7}/>
               <Hero5 content={section8}/>
           </Layout>
        )
    }
}

const ProcessPage = ({data}) => {
    const mainPage = data.mainPage;
    const currentPage = data.currentPage;
  
    return  (
        <ProcessPageTemplate
            section1={currentPage.frontmatter.process_section1}
            section2={currentPage.frontmatter.process_section2}
            section3={currentPage.frontmatter.process_section3}
            section4={currentPage.frontmatter.process_section4}
            section5={currentPage.frontmatter.process_section5}
            section6={currentPage.frontmatter.process_section6}
            section7={currentPage.frontmatter.process_section7}
            section8={mainPage.frontmatter.section5}
        />
      )
  }

  
export default ProcessPage

export const pageQuery = graphql`
  query {
    mainPage: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        section5 {
          description
          heading
          subheading
        }
      }
    }
    currentPage: markdownRemark(frontmatter: { templateKey: { eq: "process-page" } }) {
     frontmatter {
        process_section1 {
            heading
            text
          }
          process_section2 {
            heading
            subheading
          }
          process_section3 {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            subheading
            text
          }
          process_section4 {
            text
            subheading
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
          }
          process_section5 {
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            subheading
            text
          }
          process_section6 {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            subheading
            text
          }
          process_section7 {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            subheading
            text
          }
     }
    }
  }`