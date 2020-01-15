import React from 'react';

class Logo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="logo"  onClick={this.props.redirectHome}>
        <div className="logo-icon">
          <h1 className="logo-icon-letter">Q</h1>
        </div>
        <h1 className="logo-text">Apartment Quirks</h1>
      </li>
    )
  }
}

export default Logo;
