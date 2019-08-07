import React, { Component } from 'react';

const LanguageContext = React.createContext({
  language: {},
  words: []
})

export default LanguageContext;

export class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: {},
      words: []
    }
  }

  render() {
    const value={
      language: this.state.language,
      words: this.state.words
    }
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}