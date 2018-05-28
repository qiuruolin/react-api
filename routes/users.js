var express = require('express');
var router = express.Router();
var userDao = require('../models/api/user');

/* GET users listing. */
router.post('/validateUser', function(req, res, next) {
  // console.log('登录传给后台的数据', req.body.username, req.body.password)
  userDao.validateUser(req.body.username, req.body.password, function (result) {
    if(result.length){
      // console.log(result[0].uid);
      var response = {
        code: 200,
        uid: result[0].uid
      }
      res.json(response);
    }
    else{
      var response = {
        code: 0
      }
      res.json(response);
    }
  })
});

router.post('/registerUser', function(req, res, next){
  let user = JSON.parse(req.body.user)
  userDao.registerUser(user, function(result){
      if(result.affectedRows){
        var response = {
          code: 200,
          uid: result.insertId
        }
        res.json(response);
      }
      else{
        var response = {
          code: 0
        }
        res.json(response);
      }
  })
})

module.exports = router;
