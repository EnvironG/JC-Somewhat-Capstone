import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="wrapper">
            <div className="header">
                <i className="fas fa-bars icon"></i>
            </div>
            <div className="content">
                {this.props.children}
            </div>
      </div>
    );
  }
}

export default Header;