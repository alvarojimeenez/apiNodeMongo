const Team = require('../models/team')

const existEmail = async (email) =>{
    const emailDb = await Team.findOne({email});
    if (emailDb!=null){
        throw new Error(`Email ${email} already exists in database`);
    }
}

const existEmailPut = async (email, {req})=>{
    const emails = await Team.findOne({email});
    if (emails && emails.id!= req.params.id) {
        throw new Error(`Email ${email} already exists in database`);
    }
}

module.exports = {existEmail, existEmailPut}