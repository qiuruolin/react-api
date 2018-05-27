var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(username, password, email) values (?, ?, ?)',
        validate: 'select uid from user where username=? and password=?'
    }
}

module.exports = sqlMap;