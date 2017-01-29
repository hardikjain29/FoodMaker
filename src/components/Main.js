import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <nav className="cyan">
              <div className="nav-wrapper">
              <div className="container"> 
                  <Link className="brand-logo" to="/">Food Maker</Link>
                  </div>
              </div>
          </nav>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
