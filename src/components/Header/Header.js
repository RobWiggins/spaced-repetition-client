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
      <nav className="header-nav" role="navigation" aria-label="Account">
        <span className="user-chip">
          {this.context.user.name || 'Learner'}
        </span>
          <Link
            className="nav-link logout-link"
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
      </nav>
    )
  }

  renderLoginLink() {
    return (
      <nav className="header-nav" role="navigation" aria-label="Account">
        <Link className='nav-link' to='/login'>Login</Link>
        <Link className='nav-link nav-link-primary' to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header className="site-header" role="banner">
        <div className="header-inner">
          <Link to='/' className="app-title" aria-label="Spaced repetition home">
            <span className="brand-mark">SR</span>
            <span className="brand-copy">
              <span className="brand-name">Spaced repetition</span>
              <span className="brand-tagline">Practice that sticks</span>
            </span>
          </Link>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </header>
    );
  }
}

export default Header
