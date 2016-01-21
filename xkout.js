var app, express, router;

express = require('express');

router = require('./scripts/router');

app = express();

app.set('view engine', 'jade');

app.set('views', './views');

app.use('/', router);

app.use('/public', express["static"]('./public'));

app.listen(3000, function() {
  console.log('Listening on 3000');
});
