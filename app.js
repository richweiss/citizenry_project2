const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const session = require('express-session');
const flash = require('connect-flash');
const router = express.Router();
const pgp = require('pg-promise')();
const db = pgp('postgres://rich@localhost:5432/auth');

const bcrypt = require('bcrypt');
const salt = bcrypt.genSalt(10);

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

// this is my Login Page - works!
app.get('/', function(req,res){
  res.render('sessions/new')
});
//this is my Signup Page - works!
app.get('/users/new', function(req,res){
  res.render('users/new')
});

app.get('/sessions/create', function(req,res){
  res.render('sessions/new')
});

// This saves SEARCH ENTRIES into DB
app.post('/searches', function(req, res){
  console.log(req.body);
  db.none('INSERT INTO searches (searchentry) VALUES ($1)', [req.body.data])
  console.log('create done')
});
//This is routing SEARCH RESULT DATA to which index? *REVISIT*
// res. render('index', data);

// app.get('/searches', function(req, res){
//   db.any('SELECT * FROM searches').then(function(data){
//     var search_data = {
//       "User": "User_ID",
//       "Searches": data
//     });

  // res.render('index', search_data);
//   });
// });


app.get('/users',function(req,res){
  db.any('SELECT * FROM users').then(function(data){
    var users = {'users':data}
    res.render('index',users)
  })
});

app.get('/users/:id',function(req,res){
  db.one('SELECT * FROM users WHERE id = $1',[req.params.id]).then(function(data){
    var user = data
    res.render('single',user)
  })
});

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
});

app.get('/sessions/create',function(req,res){
  res.render('index')
});

app.post('/sessions/create', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var auth_error = 'Incorrect Email / Password!';

  db.one(
    "SELECT * FROM users WHERE email = $1",
    [email]
  ).catch(function(){
    res.error = auth_error;
    next();
  }).then(function(user){
    bcrypt.compare(
      password,
      user.password_digest,
      function(err, cmp){
        if(cmp){
          req.session.user = {
            'email': user.email
          };
          next();
        } else {
          res.error = auth_error;
          next();
        }
      }
    );
  });
});

app.post('/users/create',function(req, res){
  console.log(req.body);
  var user = req.body;
  bcrypt.hash(user.password, 10, function(err, hashed_password){
    db.none(
      "INSERT INTO users (email, password_digest) VALUES ($1, $2)",
      [user.email, hashed_password]
    ).catch(function(){
      // res.error = 'Error. User could not be created.';
      // next();
    }).then(function(user){
      req.session.user = {
        'email': email
      };
      console.log('success')
      res.redirect('../')
      // next();
    });
  });
});

app.get('/users/create', function(req,res){
  res.render('users/create')
});

// This is sample code from the whitehouse node module. Guessing this would actually go in my script.js as that's where currenct Ajax/API call is taking place.
// var wh = require('whitehouse'),
//     whApi = wh.createWhiteHouse()

// whApi.getPetitions(function(output) {
//   var obj = JSON.parse(output)
//   console.log(obj)
// })

// app.use(flash());

app.listen(3000, function () {
  console.log('Citizenry App Online!');
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

// const router = require('./router')(app);
