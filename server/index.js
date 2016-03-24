'use strict';

var express = require('express'),
    path = require('path'),
    gzippo = require('gzippo');

var app = express();
app.use(gzippo.staticGzip(path.join(__dirname, "..", "/client")));
app.use(gzippo.staticGzip(path.join(__dirname, "..", "/node_modules")));


app.use('/*', function (req, res) {
    res.status(404).send('Not found');
});

app.listen(process.env.PORT || 5000);
