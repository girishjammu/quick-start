Getting Started building voice apps with Amazon Alexa

We are building an Alexa to-do app.

Environment
node v6.0.0

Here is what it can do:
- Create a new list of items
- Name your list of items
- Add to your list of items
- Remove from your list of items
- Delete your list of items

1. Create your project workspace
mkdir alexa-nodejs-quickstart
cd alexa-nodejs-quickstart
npm init (just press enter to run through the options)
npm install --save alexa-sdk
typings install dt~alexa-sdk --save --global

2. Main
mkdir src
touch src/index.ts

3. Unit Testing
mkdir test
touch test/index.js
npm install mocha chai --save-dev
npm install aws-lambda-mock-context --save-dev

