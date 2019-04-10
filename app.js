const config = require('./configs/environment');
const request = require('request');

request.get(config.server, {
    json: true
}, (error, _response, body) => {
    if (error) throw new Error(error);
  
    console.log(body);
  });