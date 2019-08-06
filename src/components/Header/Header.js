import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <nav>
        <span>
          {this.context.user.name}
        </span>
          <Link
            className="logout-link"
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link className='link' to='/register'>Sign up</Link>
        {' '}
        <Link className='link' to='/login'>Login</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        <h1>
          <Link to='/'>
            Spaced repetition
          </Link>
        </h1>
      </header>
    );
  }
}

export default Header
