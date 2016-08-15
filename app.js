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
  res.render('sessions/new')
});

// This is sample code from the whitehouse node module. Guessing this would actually go in my script.js as that's where currenct Ajax/API call is taking place.
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

res. render('index', data);

app.get('/searches', function(req, res){
  db.any('SELECT * FROM searches').then(function(data){
    var search_data = {
      "User": "User_ID",
      "Searches": data
    };

  res.render('index', search_data);
  });
});


app.get('/users',function(req,res){
  db.any('SELECT * FROM users').then(function(data){
    var users = {'users':data}
    res.render('index',users)
  })
})

app.get('/users/:id',function(req,res){
  db.one('SELECT * FROM users WHERE id = $1',[req.params.id]).then(function(data){
    var user = data
    res.render('single',user)
  })
})

app.put('/users/:id',function(req,res){
  user = req.body
  db.none("UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4",
    [user.name,user.email,user.password,user.id]).then(function(data){
      console.log('it worked')
      res.json(user)
    })
})

app.delete('/users/:id',function(req,res){
  id = req.params.id
  db.none("DELETE FROM users WHERE id=$1",[id]).then(function(data){
      console.log('yay, deleted')
      res.render('index')
    })
})

app.get('/create',function(req,res){
  res.render('create')
})


app.post('/users',function(req, res){
  console.log(req.body)
  user = req.body
  db.none('INSERT INTO users (name,email,password) VALUES ($1,$2,$3)',[user.name,user.email,user.password])
  console.log('it created')
});


// app.use(flash());

app.listen(3000, function () {
  console.log('Citizenry App Online!');
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

// const router = require('./router')(app);
