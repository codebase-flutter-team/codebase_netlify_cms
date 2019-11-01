import React from "react";
import "../../assets/scss/main.scss";
import SEO from "../SEO/Seo";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AcceptCookies from '../AcceptCookies'

class Template extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      }
    }

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        const { children } = this.props;

        return (
            <div className={`body ${this.state.loading}`}>
                <SEO/>
                <Header />
                {children}
                <AcceptCookies />
                <Footer />
            </div>
        );
    }
}

export default Template;
