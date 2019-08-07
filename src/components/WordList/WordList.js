import React from 'react';
import { Link } from 'react-router-dom';
import Word from '../Word/Word';
// import Button from '../Button/Button';
import LanguageApiService from '../../services/language-api-service';

import './WordList.css';

class WordList extends React.Component {
  constructor() {
    super();
    this.state = {
      language: '',
      words: []
    }
  }

  componentWillMount() {
    LanguageApiService.getWords()
      .then(res => {
        console.log(res);
        this.setState({
          language: res.language,
          words: res.words
        })
      });
  }

  handleClick = () => {
    this.props.startLearning();
  }

  getTotalCorrect = () => {
    console.log('Adding');
    let total = 0;
    this.state.words.map(word => {
      total += word.correct_count;
    }) 
    return total;
  }

  renderWordList() {
    const words = this.state.words.map((word, i) => <li key={i}><Word word={word}/></li>)
    return (
      <ul>
        {words}
      </ul>
    )
  }

  render() {
    return (
      <div className="WordList">
        <h2>Start Practicing {this.state.language.name}</h2>
        <h3>Words to practice</h3>
        {this.renderWordList()}
        <Link to='/learn'>
          Start practicing
        </Link>
        <h4 className="total-correct">Total correct answers: {this.state.language.total_score}</h4>
      </div>
    )
  }
}

export default WordList;