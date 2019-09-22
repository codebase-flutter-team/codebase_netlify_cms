import React from 'react'
import Nav from '../nav/Nav'
import MobileNav from '../nav/MobileNav'


class Header extends React.Component {
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

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateState);
  }

  updateState() {
    this.setState({isMobile: document.documentElement.clientWidth <= 981})
  }

    render() {
        return (
           <div>
             {this.state.isMobile ? <MobileNav /> : <Nav />}
           </div>
        )
    }
}

export default Header
