'use strict';

var fs = require('fs');
var path = require('path');

var express = require('express');

var app = express();

app.get('/test', (req, res) => {
  res.send({ value: true });
});

var listen = app.listen(process.env.port || 80);
if (listen) {
  console.log('connected ******************');
} else {
  console.log('Failed ******************')
}
exports.get = function (event, context, callback) {
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: { 'content-type': 'text/html' }
  };
  console.log('We can do');
  callback(null, result);
};
