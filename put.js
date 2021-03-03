const request = require('request');
const json = {
    "name": "Dinesh Chugtai",
    "email": "dinesh@piedpiper.com",
};
request.post({
    url: 'http://host:3002/users',
    body: json,
    json: true,
},  (error, response, body) => {
    console.log(body);
});