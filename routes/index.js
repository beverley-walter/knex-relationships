var express = require('express')
var router = express.Router()

var db = require('../db')



router.get('/', function(req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function(users) {
      res.render('index', {
        users: users
      })
    })
    .catch(function(err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/user', (req,res) =>{
  res.render('index')
})

router.get('/:id', function(req, res) {
  var id = req.params.id
  db.getUser(id, req.app.get('connection'))
    .first()
    .select('users.name', 'profile.*')
    .join('profile', 'users.id', '=', 'profile.user_id')
    .then(function(results) {
      res.render('profile', results)
    })
    .catch(function(error) {
      //console.log(error.message)
    })
})

router.post('/users', (req, res) => {
db.newUser(req.body, req.app.get('connection'))
  .then(() => {
    res.redirect('/')
  })
  .catch(function(err){
res.status(500).send("Dasebase Error:" + err.message)
})
})


module.exports = router
