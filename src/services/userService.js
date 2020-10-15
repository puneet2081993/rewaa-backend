var mysql_con = require('../database/MySql')

let validateUser = (username,password)=> {
    return new Promise((resolve,reject)=>{
            var response = {}
            if(username==null && password==null){
                reject(new Error("Invalid Request"));
            }else{
                let dbquery = `SELECT * FROM userauth WHERE username = '${username}' AND password= '${password}' AND status='A' `;
                mysql_con.query(dbquery, function (err, result) {
                    if (err) reject(err);
                    response = JSON.parse(JSON.stringify(result));
                    resolve(response);
                })
            }
    });
}

module.exports = {
    validateUser
}