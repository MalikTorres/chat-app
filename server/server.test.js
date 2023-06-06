'use strict';

jest.mock('socket.io-client');

require('dotenv').config();
const io = require('socket.io');
const http = require('http');
const { Server } = require('socket.io');
const Client = require('socket.io-client');
const { OpenAIApi } = require('openai');
const openai = new OpenAIApi({ apiKey: process.env.OPENAI_API_KEY } );
const PORT = 3001;

let server;
let ioServer;
let clientSocket;

beforeAll((done) => {
  server = http.createServer().listen(PORT, () => {
    ioServer = new Server(server);
    clientSocket = new Client(`http://localhost:3001`);
    clientSocket.on('connect_error', (error) => {
      console.log('Connection Error', error);
    });
    clientSocket.on('connect', done);
  });
}, 30000);

beforeEach((done) => {
  exec(`lsof -i :${PORT} | awk 'NR!=1 {print $2}' | xargs kill -9`, done);
});

afterAll((done) => {
  ioServer.close();
  server.close(done);
  jest.resetAllMocks();
});

describe('socket.io connection', () => {
  test('should work', (done) => {
    clientSocket.on('connect', () => {
      expect(clientSocket.connected).toBeTruthy();
      done();
    });
  }, 30000);

  test('should receive message', async () => {
    // Mock the OpenAI createChatCompletion method
    jest.spyOn(openai, 'createChatCompletion').mockResolvedValue({
      data: {
        choices: [
          {
            message: {
              content: 'Hello, how can I assist you today?',
            },
          },
        ],
      },
    });

    const messagePromise = new Promise((resolve, reject) => {
      clientSocket.on('message', (message) => {
        resolve(message);
      });
    });

    clientSocket.emit('sendMessage', 'Hello');

    const response = await messagePromise;
    expect(response).toBe('Hello, how can I assist you today?');
  }, 30000);
});
