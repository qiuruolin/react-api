var pool = require('../db');
var sql = require('../sqlMap');

module.exports = {
    validateUser: function(username, password, callback){
        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(sql.user.validate, [username, password], function(err, result){
                if(err) throw err;
                callback(result);
                connection.release();
            })
        })
    }
}