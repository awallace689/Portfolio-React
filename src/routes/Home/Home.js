import React from 'react';
import './Home.css';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const content = []
    for (let i = 0; i < 50; i++) {
      content.push(
        <div className="p-header">
          <span>Hello, world!</span>
        </div>
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}