import React from 'react';
import './Navbar.css';

export class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.props = props;
  }

  render() {
    return (
      <div className="navbar">
        {this.props.children}
      </div>
    );
  }
}