const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const session = require('express-session');
const flash = require('connect-flash');
const router = express.Router();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'demo-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.get('/', function(req,res){
  res.render('index')
});

// This is samplecode from the whitehouse node module. Guessing this would actually go in my script.js as that's where currenct Ajax/API call is taking place.
// var wh = require('whitehouse'),
//     whApi = wh.createWhiteHouse()

// whApi.getPetitions(function(output) {
//   var obj = JSON.parse(output)
//   console.log(obj)
// })


app.post('/searches', function(req, res){
  console.log(req.body);
  db.none('INSERT INTO searches (searchentry) VALUES ($1)', [req.body.data])
  console.log('create done')
})




// app.use(flash());

app.listen(3000, function () {
  console.log('Citizenry App Online!');
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

// const router = require('./router')(app);
