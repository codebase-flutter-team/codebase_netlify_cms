import React from 'react'
import './footer-styles.scss'
import YTLogo from '../../assets/images/youtube.png'
import MediumLogo from '../../assets/images/medium.png'
import LinkedinLogo from '../../assets/images/linkedin.svg'
import {Link} from 'gatsby'

class Footer extends React.Component {
    render() {
        return (
            <section className="footer">
              
                <div className="grid-wrapper">
                    <div className="col-4 about">
                        <ul className="about">
                            <li><Link activeClassName="active" to="/about">About</Link></li>
                            <li><Link activeClassName="active" to="/privacy-policy">Policy</Link></li>
                            <li><Link activeClassName="active" to="/terms">Terms</Link></li>
                        </ul>
                    </div>

                    <div className="col-4 mobile-order-1">
                      <h3>codebase</h3>
                      <p>Be sure to take a look at our Terms of Use and Privacy Policy</p>
                    </div>

                    <div className="col-4 social">
                        <p>Follow Us</p>
                        <ul className="follow">
                            <li><a href="https://www.youtube.com/channel/UCxo3YOwdU_ygBBv74gDjmxA" target="_blank" rel="noopener noreferrer" className="icon"><img src={YTLogo} alt="Youtube"/></a></li>
                            <li><a href="https://linkedin.com/company/codebase-studio/about" target="_blank" rel="noopener noreferrer" className="icon"><img src={LinkedinLogo} alt="Linkedin"/></a></li>
                            <li><a href="https://medium.com/@codebase.studio" target="_blank" rel="noopener noreferrer" className="icon"><img src={MediumLogo} alt="Medium"/></a></li>
                        </ul>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default Footer
