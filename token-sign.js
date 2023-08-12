const jwt = require('jsonwebtoken');

const secret = 'mysecretcat';
const payload = {
    sub: 1,
    role: 'customer'
};

const signedToken = (payload, secret) => jwt.sign(payload, secret);

const token = signedToken(payload, secret);
console.log(token);