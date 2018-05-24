// var pool = require('./db');

// var user_m = {
//     validateUser: function(username, password, cb){
//         pool.getConnection(function(err, connection){
//             console.log(pool)
//             if(err) throw err;
//             connection.query("select `uid` from `user` where `username`=? and `password`=?", [username, password], function(err, result){
//                 if(err) throw err;
//                 cb(result);
//                 connection.release();
//             })
//         })
//     }
// }

// export default user_m;

var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.post('/validateUser', (req, res) => {
    // var sql = $sql.user.validate;
    // var params = req.body;
    console.log("vala")
    // console.log(params);
    // conn.query(sql, [params.username, params.age], function(err, result) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     if (result) {
    //         jsonWrite(res, result);
    //     }
    // })
});

module.exports = router;