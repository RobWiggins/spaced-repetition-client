# Spaced-Repetition

This web application utilizes spaced repetition to help people memorize words in French. The app will display words in French, and ask you to recall the translation of the corresponding word in English.

As a prospective user, you can register an account so that you can login and use the application to save your progress. As a registered user, you can login to the application to begin learning.

The home dashboard shows your language, words to learn, and score for each word. The learning page asks you to input the translation of a word, which will subsequently give you feedback on whether you were correct. The words that you miss more frequently are shown more frequently. Upon mastery of each word, each word will get asked progressively less often.

### Live Demo: https://spaced-repetition.michaelromero09.now.sh

![Register page](https://github.com/RobertWiggins/spaced-repetition-client/blob/orphan-assets/screenshots/register.jpg "Register page")
![Learning dashboard](https://github.com/RobertWiggins/spaced-repetition-client/blob/orphan-assets/screenshots/dashboard.jpg "learning dashboard")
![Word translation question page](https://github.com/RobertWiggins/spaced-repetition-client/blob/orphan-assets/screenshots/apprende_word.jpg "Word translation question page")
![Answer result feedback page](https://github.com/RobertWiggins/spaced-repetition-client/blob/orphan-assets/screenshots/answer_result.jpg "Answer result feedback page")


## Getting Started
These instructions will get you a copy of the front-end project up and running on your local machine for development and testing purposes. This client runs locally in conjunction with the Spaced-Repetition server, which can be found at (https://github.com/thinkful-ei-dragonfly/spaced-repetition-api-rob-michaelR).

This project was bootstrapped with Create React App.

## Available Scripts
In the project directory, you can run:

`npm install`
Installs necessary dependencies.

`npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

`npm test`
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

`npm run build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

`npm run eject`
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Running the tests
This project uses Cypress IO for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
- You can change the address of this expectation in the ./cypress.json file.
- Your ./src/config.js is using http://localhost:8000 as the API_ENDPOINT

To start the tests run the command:

`npm run cypress:open`

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the ./cypress/integration/ directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

`npm run cypress:run`
This will save video recordings of the test runs in the directory ./cypress/videos/.

## Prerequisites
- NPM (Node Package Manager)

## Built With
- React - The web framework used
- Node package manager - Dependency Management
- Node.js - backend web server (https://github.com/thinkful-ei-dragonfly/spaced-repetition-api-rob-michaelR) 
- Express - backend web server (https://github.com/thinkful-ei-dragonfly/spaced-repetition-api-rob-michaelR) 
- Cypress - (testing)

### Authors
- Robert Wiggins 
- Michael Romero
- tomatou (github) - authentication starter code
