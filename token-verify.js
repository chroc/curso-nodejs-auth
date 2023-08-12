const jwt = require('jsonwebtoken');

const secret = 'mysecretcat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5MTg2OTM4M30.412lwEJo2s2MZRqj2KXmjdLJQHgUw5jp2vwVUJexoQc';

const verifyToken = (token, secret) => jwt.verify(token, secret);

const payload = verifyToken(token, secret);
console.log(payload);