import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Home from './home';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.location.pathname === "/") {
      this.props.history.push("/home");
    }
  }

  render() {
    const { currentUser, logout } = this.props;
      if (currentUser) {
    return (

        <div>
          <button onClick={ logout }>logout</button>
        </div>
      )

      } else {
        return (
          <div>
            <br/>
            <Link to="/signup">Signup</Link>
            <br/>
            <Link to="/login">Login</Link>
            <br/>
          </div>
        )
      }
  }


}

export default withRouter(Greeting);
