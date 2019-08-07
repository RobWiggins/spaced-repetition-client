import React, { Component } from 'react';

const LanguageContext = React.createContext({
  language: {},
  words: [],
  setLanguage: () => {console.log('DERP')},
  setWords: () => {}
})

export default LanguageContext;

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      language: {},
      words: []
    }
    this.state = state;
  }

  setLanguage = (lang) => {
    console.log(`Context Language`);
    console.log(lang);
    console.log('Set context state');
    this.setState({language: lang});
  }

  setWords = (words) => {
    console.log(words);
    this.setState({ words });
  }

  render() {
    const value={
      language: this.state.language,
      words: this.state.words,
      setLanguage: this.setLanguage,
      setWords: this.setWords,
    }

    console.log(`Value: ${value}`);
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}