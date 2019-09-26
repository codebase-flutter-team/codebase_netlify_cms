import React, { Component } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import Button from '../button/Button'
import codebaseLogo from '../../assets/images/codebase_logo_white.svg'
import './nav-styles.scss'
import { Link } from 'gatsby'

export default class MobileNav extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            scrolled: false,
            isOpen: false
        }

        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleLinkClick(e) {
        if (e.target.localName == 'a') {
            if (e.target.attributes.href.value == window.location.pathname) {
                this.setState({
                    isOpen: !this.state.isOpen
                })
            }
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.handleLinkClick, false);
    }

    componentWillUnmount() {
        window.addEventListener('click', this.handleLinkClick, false);
    }


    render() {
        let visible = this.state.isOpen && "visible";

        let shadow = {
            boxShadow: this.state.isOpen ? '5px 10px 20px rgba(0, 0, 0, 0.25)' : 'none' 
        }

        let heightStyle = {
            height: `${window.innerHeight}px`
        }

        return (
            <div>
                <nav className="mobile-nav">
                    <div className="main" style={shadow}>
                        <Link to="/"><img src={codebaseLogo} alt="codebase logo"/></Link>
                        <HamburgerMenu isOpen={this.state.isOpen} menuClicked={this.handleClick.bind(this)} strokeWidth={3} width={28} height={20} borderRadius={2} color="white"/>
                    </div>

                    <div style={heightStyle} className={"hidden " + visible}>
                        <ul>
                            <li><h3><Link to="/">Why Choose Us</Link></h3></li>
                            <li><h3><Link to="/pricing">Pricing</Link></h3></li>
                            <li><h3><Link to="/process">Process</Link></h3></li>
                        </ul>
                        <p className="blog"><Link to="/blog">Blog</Link></p>
                        <Button color="white"><Link to="/contact">LET'S CHAT!</Link></Button>
                        <p className="copyright">
                            Copyright 2019
                        </p>
                    </div>
                </nav>

                <div className="dummy-nav">
                    
                </div>
            </div>
        )
    }
}
