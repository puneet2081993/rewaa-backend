var mysql_con = require('../database/MySql')
var pdata = [
    {"pid":"1234","pname":"asd","ptype":"sad","pqty":"1","orgID":"122"},
    {"pid":"12345","pname":"asd","ptype":"sad","pqty":"1","orgID":"122"}
];

let getProducts = async (orgID,pid)=> {
    try{
        orgID = orgID?String(orgID):null
        pid   = pid?pid:null
        if(!orgID || orgID==null){
            throw new Error("Invalid OrgID");
        }else{
            return pdata;
        }
    }catch(e){
        throw new Error(e)
    }
}

let addProducts = async (data)=> {
    try{
        let response = {}
        if(!data || data==null){
            throw new Error("Invalid data");
        }else{
            let dbquery = `INSERT INTO inventory (productName,productType,quantity,status,created_by,orgID) VALUES ('${data.pname}','${data.ptype}',${data.pqty},'A','${data.created_by}','${data.orgID}')`;
            await mysql_con.query(dbquery, function (err, result) {
                if (err) throw err;
                console.log("Inserted ID : "+result.insertId)
                response = result;
            })
        }
        return response;
    }catch(e){
        throw new Error(e)
    }
}

let updateProducts = async (pid)=> {
    pid   = pid?pid:null
    try{
        if(!pid || pid==null){
            throw new Error("Invalid data");
        }else{
            return pdata;
        }
    }catch(e){
        throw new Error(e)
    }
}

let deleteProducts = async (pids)=> {
    try{
        pids   = pids?pids:null
        if(!pids || pids.length == 0){
            throw new Error("Invaid PID's");
        }else{
            return pdata;
        }
    }catch(e){
        throw new Error(e)
    }
}

module.exports = {
    getProducts,
    addProducts,
    updateProducts,
    deleteProducts
}