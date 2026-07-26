import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute'
import LearningRoute from '../../routes/LearningRoute/LearningRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import { LanguageProvider } from '../../contexts/LanguageContext';
import './App.css'

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  backgroundStyle = {
    backgroundImage:
      'linear-gradient(115deg, rgba(245, 241, 232, 0.92), rgba(245, 241, 232, 0.76)), url("/static/leonard-cotte-R5scocnOOdM-unsplash.jpg")',
  }

  render() {
    const { hasError } = this.state
    return (
      <LanguageProvider>
        <div className='App' style={this.backgroundStyle}>
          <Header />
          <main className="app-main" role="main">
            {hasError && (
              <p className="app-error">There was an error. Please try again.</p>
            )}
            <Switch>
              <PrivateRoute
                exact
                path={'/'}
                component={DashboardRoute}
              />
              <PrivateRoute
                path={'/learn'}
                component={LearningRoute}
              />
              <PublicOnlyRoute
                path={'/register'}
                component={RegistrationRoute}
              />
              <PublicOnlyRoute
                path={'/login'}
                component={LoginRoute}
              />
              <Route
                component={NotFoundRoute}
              />
            </Switch>
          </main>
        </div>
      </LanguageProvider>
    );
  }
}
