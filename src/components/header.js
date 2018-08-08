import React, { Component } from 'react';
import Navigation from './navigation';

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  };

  handleclick() {
    if(!this.state.active) {
      this.setState({active: true})
    } else {
      this.setState({active: false})
    }
    };

  renderNavigation = function() {
    if(this.state.active) {
      console.log('ACTIVE')
      return (
        <Navigation />
      )
  }
  }


  render() {
    return (
      <div className="wrapper">
            <div className="header">
                <i className="fas fa-bars icon" onClick={()=> this.handleclick() }></i>
                {this.renderNavigation()}
            </div>
            <div className="content">
                {this.props.children}
            </div>
      </div>
    );
  }
}

export default Header;