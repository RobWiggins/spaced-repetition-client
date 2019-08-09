import config from '../config';
import TokenService from './token-service'
import LearningContext from '../contexts/LearningContext'

const LanguageApiService = {
  getWords() {
    console.log('Getting words');
    return fetch(`${config.API_ENDPOINT}/api/language`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getHead() {
    console.log('Getting words');
    return fetch(`${config.API_ENDPOINT}/api/language/head`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  submitGuess(guess) {
    console.log('fetching guess: ', guess)
    const body = JSON.stringify(
      { 
        guess: guess 
      });

    return fetch(`${config.API_ENDPOINT}/api/language/guess`, {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: body,
    })
      .then(res => {
        if (!res.ok) {
          LearningContext.setError('Oops! Something went wrong while processing your guess.')
          return res.json().then(e => Promise.reject(e.error))
        }
        console.log('res: ', res);
        return res.json()
      })
      .catch(e => console.error('guess fetch failure.'))
      
  }
}

export default LanguageApiService;