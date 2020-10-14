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
        if(!data || data==null){
            throw new Error("Invalid data");
        }else{
            pdata.push(data);
            return pdata;
        }
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