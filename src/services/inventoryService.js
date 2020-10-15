var mysql_con = require('../database/MySql')

let getProducts = (orgID,pid)=> {
    return new Promise((resolve,reject)=>{
            orgID = orgID?String(orgID):null
            pid   = pid?pid:null
            var response = {}

            if(!orgID || orgID==null){
                reject(new Error("Invalid Request"));
            }else{
                let dbquery = `SELECT * FROM revaa.inventory WHERE orgID=${orgID} AND status='A' `;
                if(pid || pid!=null){
                    dbquery += `AND productID=${pid}`;
                }
                mysql_con.query(dbquery, function (err, result) {
                    if (err) reject(err);
                    response = JSON.parse(JSON.stringify(result));
                    resolve(response);
                })
            }
    });
}

let addProducts = async (data)=> {
    return new Promise((resolve,reject)=>{
            let response = {}
            if(!data || data==null){
                reject(new Error("Invalid Request"));
            }else{
                let dbquery = `INSERT INTO inventory (productName,productType,quantity,status,created_by,orgID) VALUES ('${data.pname}','${data.ptype}',${data.pqty},'A','${data.created_by}','${data.orgID}')`;
                mysql_con.query(dbquery, function (err, result) {
                    if (err) reject(err);
                    response = result;
                    resolve(response);
                })
            }
    });
}

let updateProducts = async (data)=> {
    return new Promise((resolve,reject)=>{
        let pid  = data.pid?data.pid:null
        if(!data || pid==null){
            reject(new Error("Invalid Request"));
        }else{
            let dbquery = `UPDATE inventory SET productName = '${data.pname}', productType = '${data.ptype}', quantity = ${data.pqty} , updated_by = '${data.updated_by}' WHERE productID = ${pid}`;
            mysql_con.query(dbquery, function (err, result) {
                if (err) reject(err);
                response = result;
                resolve(response);
            })
        }
    });
}

let deleteProducts = async (pids)=> {
    return new Promise((resolve,reject)=>{
        pids = pids?pids:null
        if(!pids || pids.length == 0){
            reject(new Error("Invalid Request"));
        }else{
            let dbquery = `UPDATE inventory SET status = 'D' WHERE productID IN(?)`;
            mysql_con.query(dbquery,[pids], function (err, result) {
                if (err) reject(err);
                response = result;
                resolve(response);
            })
        }
    });
}

module.exports = {
    getProducts,
    addProducts,
    updateProducts,
    deleteProducts
}