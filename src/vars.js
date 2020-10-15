let node_env = process.NODE_ENV
let port = process.env.PORT
let mysql_user = process.env.MYSQL_USER
let mysql_password = process.env.MYSQL_PASSWORD
let mysql_host = process.env.MYSQL_HOST
let mysql_db = process.env.MYSQL_DB

module.exports = {
    env : node_env, 
    port : port,
    mysql_user: mysql_user,
    mysql_password : mysql_password,
    mysql_host : mysql_host,
    mysql_db : mysql_db
}