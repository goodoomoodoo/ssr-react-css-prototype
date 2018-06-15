'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _App = require('./server/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var indexHTML = _fs2.default.readFileSync(__dirname + '/browser/index.html', 'utf8');
var PORT = process.env.PORT || 3000;

app.use(_express2.default.static('browser'));

app.get('/', function (req, res) {
    var content = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));
    var finalHTML = indexHTML.replace('<!--App-->', content);
    console.log(finalHTML);
    res.end(indexHTML);
});

app.listen(PORT, function () {
    console.log('Serving on port ' + PORT + ' ...');
});