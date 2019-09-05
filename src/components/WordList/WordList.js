import React from 'react';
import { Link } from 'react-router-dom';
import Word from '../Word/Word';
import LanguageApiService from '../../services/language-api-service';
import LanguageContext from '../../contexts/LanguageContext';

import './WordList.css';

class WordList extends React.Component {

  static contextType = LanguageContext;

  componentDidMount() {
    LanguageApiService.getWords()
      .then(res => {
        this.context.setLanguage(res.language);
        this.context.setWords(res.words);
      });
  }

  renderWordList() {
    const words = this.context.words.map((word, i) => <li key={i}><Word word={word}/></li>)
    return (
      <ul>
        {words}
      </ul>
    )
  }

  render() {
    return (
      <div className="wordlist">
        <h2>Start Practicing {this.context.language.name}</h2>
        <h3>Words to practice</h3>
        {this.renderWordList()}
        <Link to='/learn'>
          Start practicing
        </Link>
        <h4 className="total-correct">Total correct answers: {this.context.language.total_score}</h4>
      </div>
    )
  }
}

export default WordList;