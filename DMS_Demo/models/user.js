class User {


    constructor(id, username, passwordhash, contactid,loginenabled,lastlogon,timezone,createdby,createdon,deletedby,deletedon,lastmodifiedby,lastmodifiedon) {
        this.id = id;
        this.username = username;
        this.passwordhash = passwordhash;
        this.contactid = contactid;
        this.loginenabled = loginenabled;
        this.lastlogon = lastlogon;
        this.timezone = timezone;
        this.createdby = createdby;
        this.createdon = createdon;
        this.deletedby = deletedby;
        this.deletedon = deletedon;
        this.lastmodifiedby = lastmodifiedby;
        this.lastmodifiedon = lastmodifiedon;
    }
}

module.exports = User;