var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./config/webpack.dev');
var fs = require("fs");
var app = express();
var compiler = webpack(config);
var port = process.env.PORT || 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/index', (req, res, next) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Home</title>
</head>

<body>
  <index></index><index2></index2>
  <script>
  
  window["serverState"] = ${ fs.readFileSync(__dirname + "/db.json") }
  </script>
  
  <script src="/static/app.js"></script>

</body>
</html>
`);
});

app.listen(port, 'localhost', err => {

  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);


  var jsonServer = require('json-server')
  var server = jsonServer.create()
  var router = jsonServer.router('db.json')
  var middlewares = jsonServer.defaults()

  app.use(middlewares);
  app.use(router);

  app.listen(3001, function () {
    console.log('JSON Server is running')
  })

});



