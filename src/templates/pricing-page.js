import React, { Component } from "react"
import Layout from '../components/layout/Layout'
import { graphql } from 'gatsby'
import Section1B from '../components/pricing-page/Section1B'
import {default as Section2} from '../components/heroes/Hero4'
import {default as Section3} from '../components/heroes/Hero5'
import SEO from '../components/SEO/Seo'

export class PricingPageTemplate extends Component {
    constructor(props) {
        super(props);
            this.state = {
              isMobile: false
            }
        this.updateState = this.updateState.bind(this);
      }
    
    componentDidMount() {
      this.updateState();
      window.addEventListener('resize', this.updateState);
    }
    
    updateState() {
      this.setState({isMobile: document.documentElement.clientWidth <= 981})
    }
    

    render() {
      const {section1, section2, section3, meta_title, meta_description, path} = this.props;

        return (
            <Layout>
                <SEO title={meta_title} description={meta_description} pathname={path} />
                <Section1B content={section1} isMobile={this.state.isMobile}/>
                <Section2 content={section2}/>
                <Section3 content={section3}/>
            </Layout>
        );
    }
}

const PricingPage = ({ data }) => {
    const mainPage = data.mainPage;
    const currentPage = data.currentPage;
  
    return  (
        <PricingPageTemplate 
            section1={currentPage.frontmatter.pricing_page_section1}
            meta_title={currentPage.frontmatter.meta_title}
            meta_description={currentPage.frontmatter.meta_description}
            path={currentPage.frontmatter.path}
            section2={mainPage.frontmatter.section4}
            section3={mainPage.frontmatter.section5}
        />
      )
  }

  
export default PricingPage




export const pageQuery = graphql`
  query {
    mainPage: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        section4 {
          description
          heading
          subheading
        }
        section5 {
          heading
          subheading
          image {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    currentPage: markdownRemark(frontmatter: { templateKey: { eq: "pricing-page" } }) {
     frontmatter {
      meta_title
      meta_description
      path
      pricing_page_section1 {
        heading
        subheading
      }
     }
    }
  }`
