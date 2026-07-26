import React from 'react';
import { Link } from 'react-router-dom';
import Word from '../Word/Word';
import LanguageApiService from '../../services/language-api-service';
import LanguageContext from '../../contexts/LanguageContext';
import Button from '../Button/Button'

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
    const words = this.context.words.map((word, i) => (
      <li key={i} className="wordlist-item">
        <Word word={word}/>
      </li>
    ))

    return (
      <ul className="wordlist-grid">
        {words}
      </ul>
    )
  }

  render() {
    const languageName = this.context.language.name || 'your language';
    const totalScore = this.context.language.total_score || 0;

    return (
      <div className="wordlist">
        <div className="dashboard-hero">
          <span className="eyebrow">Today&apos;s session</span>
          <h2>Practice {languageName}</h2>
          <p>
            Review your deck, then start a focused repetition round to strengthen the words that need it most.
          </p>
          <div className="dashboard-actions">
            <Button className="start-practice-btn">
              <Link to='/learn'>
                Start practicing
              </Link>
            </Button>
            <span className="total-correct">Total correct answers: {totalScore}</span>
          </div>
        </div>
        <div className="wordlist-header">
          <div>
            <span className="eyebrow">Deck overview</span>
            <h3 className="list-summary">Words to practice</h3>
          </div>
          <span className="word-count">{this.context.words.length} words</span>
        </div>
        {this.renderWordList()}
      </div>
    )
  }
}

export default WordList;
