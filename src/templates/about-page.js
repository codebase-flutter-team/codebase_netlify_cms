import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/Layout'
import Section1 from '../components/about-page/Section1'
import Section2 from '../components/about-page/Section2'
import Section3 from '../components/about-page/Section3'
import Section4 from '../components/about-page/Section4'
import Section5 from '../components/about-page/Section5'
import {default as Section6} from '../components/heroes/Hero4'
import {default as Section7} from '../components/heroes/Hero5'
import SEO from '../components/SEO/Seo'


export class AboutPageTemplate extends React.Component {
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
        const {meta_title, meta_description, path, section1, section2, section3, section4, section5, section6, section7} = this.props;
        return (
            <Layout>
                <SEO title={meta_title} description={meta_description} pathname={path} />
                <Section1 content={section1}/>
                <Section2 content={section2}/>
                <Section3 content={section3}/>
                <Section4 content={section4}/>
                <Section5 content={section5}/>
                <Section6 content={section6}/>
                <Section7 content={section7}/>
            </Layout>
        );
    }
}

const AboutPage = ({ data }) => {
    const indexPage = data.indexPage;
    const currentPage = data.currentPage;
  
    return (
        <AboutPageTemplate
          meta_title={currentPage.frontmatter.meta_title}
          meta_description={currentPage.frontmatter.meta_description}
          section1={currentPage.frontmatter.about_section1}
          section2={currentPage.frontmatter.about_section2}
          section3={currentPage.frontmatter.about_section3}
          section4={currentPage.frontmatter.about_section4}
          section5={currentPage.frontmatter.about_section5}
          section6={indexPage.frontmatter.section4}
          section7={indexPage.frontmatter.section5}
          path={currentPage.frontmatter.path}
        />
    )
  }
  
  export default AboutPage
  


export const pageQuery = graphql`
  query AboutPageTemplate {
    currentPage: markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
       meta_title
       meta_description
       path
       about_section1{
         heading
         subheading
       }
       about_section2{
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
       about_section3{
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
      about_section4 {
        heading {
          heading
          subheading
        }
        team {
          image {
           publicURL
          }
          name
          role
        }
      }
      about_section5{
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
      }
    }

    indexPage: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
  }
`
