const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const authenticate = require('../middleware/authenticate');

const authRouter = require('./auth/authRouter');
const usersRouter = require('./users/usersRouter');

server.use(cors())
server.use(helmet())
server.use(express.json())

server.use('/api/users', authenticate, usersRouter)
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
  res.json({ status: 'online' })
})

module.exports = server;