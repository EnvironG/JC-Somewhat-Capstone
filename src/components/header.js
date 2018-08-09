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
      document.getElementById('box').classList.add('move');
    } else {
      this.setState({active: false})
      document.getElementById('box').classList.remove('move');
    }
    };


  render() {
    return (
      <div className="wrapper">
            <div className="header">
                <i className="fas fa-bars icon" onClick={()=> this.handleclick() }></i>
                <Navigation />
            </div>
            <div className="content">
                {this.props.children}
            </div>
      </div>
    );
  }
}

export default Header;