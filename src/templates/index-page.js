import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/Layout';
import Hero1 from '../components/heroes/Hero1'
import Hero2 from '../components/heroes/Hero2'
import Hero3 from '../components/heroes/Hero3'
import Hero4 from '../components/heroes/Hero4'
import Hero4Mobile from '../components/heroes/Hero4Mobile'
import Hero5 from '../components/heroes/Hero5'


export class IndexPageTemplate extends React.Component {
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
        const siteTitle = "Codebase - Flutter Cross-Development Studio";
        const {section1, section2, section3, section4, section5} = this.props;
        return (
            <Layout>
                <Helmet title={siteTitle} />
                <Hero1 content={section1}/>
                <Hero2 isMobile={this.state.isMobile} content={section2}/>
                <Hero3 content={section3}/>
                {this.state.isMobile ? <Hero4Mobile content={section4}/> : <Hero4 content={section4}/>}
                <Hero5 content={section5}/>
            </Layout>
        );
    }
}

// export default IndexPageTemplate;


const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
        <IndexPageTemplate
          image={frontmatter.image}
          title={frontmatter.title}
          subtitle={frontmatter.subtitle}
          subheading={frontmatter.subheading}
          metaDescription={frontmatter.meta_description}
          metaTitle={frontmatter.meta_title}  
          section1={frontmatter.section1}
          section2={frontmatter.section2}    
          section3={frontmatter.section3}    
          section4={frontmatter.section4}    
          section5={frontmatter.section5}    
        />
    )
  }
  
  // IndexPage.propTypes = {
  //   data: PropTypes.shape({
  //     markdownRemark: PropTypes.shape({
  //       frontmatter: PropTypes.object,
  //     }),
  //   }),
  // }
  
  export default IndexPage
  


export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        header_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        meta_title
        meta_description
        section1 {
          heading
          description
          image {
            publicURL
          }
        }
        section2 {
          heading {
            heading
            subheading
          }
          blurbs {
            image {
             publicURL
            }
            heading
            text
          }
        }
        section3 {
          blurbs {
            text
            title
          }
          heading {
            description
            heading
            subheading
            image {
              publicURL
            }
          }
        }
        section4 {
          description
          heading
          subheading
          image {
            publicURL
          }
        }
        section5 {
          description
          heading
          subheading
        }
      }
    }
  }
`
