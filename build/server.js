'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _App = require('./views/src/App');

var _App2 = _interopRequireDefault(_App);

var _template = require('./views/src/template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

app.use('/assets', _express2.default.static('assets'));

app.get('/', function (req, res) {
    var content = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));
    var finalHTML = (0, _template2.default)('CSS in JS', content);
    res.end(finalHTML);
});

app.listen(PORT, function () {
    console.log('Serving on port ' + PORT + ' ...');
});
