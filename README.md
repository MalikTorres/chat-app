# LAB - Class 14

## Project: Chat Application

### Author: Heather Holocomb and Malik Sadiki-Torres

### Problem Domain

This application implements socket server functionality with the chat open ai to function that allows the user to interact with a chatbot.

### Links and Resources

- [GitHub Actions ci/cd]()
- [back-end server]()


### Collaborators

We built out the functionalities of this application with the help of sites such as [Medium](https://medium.com/codingthesmartway-com-blog/build-a-complete-context-aware-ai-chatbot-web-app-with-node-js-socket-io-and-gpt-4-api-916cab298769),[openAI](https://platform.openai.com/docs/guides/gpt-best-practices/six-strategies-for-getting-better-results) documentation, and referenced demo code provided by Ryan Gallaway. To debug CORS issue, referenced the [Socket.io Docs](https://socket.io/docs/v4/handling-cors/) that specifically addresses how to handle CORS configuration. Used AI to help with testing. 

### Setup

Install:

1. `npm init -y`
2. `npm install express socket.io socket.io-client openai`
2.  Create `env` file
3.  Receive api key from Openai(https://openai.com/)


#### `.env` requirements (where applicable)

port variable exists within the env sample


#### How to initialize/run your application (where applicable)

clone repo, `npm i` to install the required dependencies to run this application


#### Routes

Test with your localhost port

#### Tests

to run tests, after running `npm i`, run the command `npm test`

#### UML

![UML image](./assets/UML_lab14.png)

