import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
                <div id="box" className="navigation-box">
                    <Link to="/" onClick="window.location.reload()" className="navigation-box__link1"><div>Main</div></Link>
                    <Link to="/side" onClick="window.location.reload()" className="navigation-box__link2"><div>Side</div></Link>
                    <Link to="/filler" onClick="window.location.reload()" className="navigation-box__link3"><div>Filler</div></Link>
                </div>
        )
    }
}

export default Navigation;