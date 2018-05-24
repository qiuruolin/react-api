var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(id, name, age) values (0, ?, ?)',
        validate: 'select uid from user where username=? and password=?'
    }
}

module.exports = sqlMap;