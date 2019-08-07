import React from 'react';
import UserContext from './UserContext';
import LanguageContext from './LanguageContext';

const CombinedContextProvider = ({user, language, children}) => (
  <UserContext.Provider value={user}>
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  </UserContext.Provider>
)

const CombinedContextConsumer = ({ children }) => (
  <UserContext.Consumer>
    {(user) => (
      <LanguageContext.Consumer>
        {(language => children({ user, language }))}
      </LanguageContext.Consumer>
    )}
  </UserContext.Consumer>
)