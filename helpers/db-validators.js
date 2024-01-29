const Team = require('../models/team')
const User = require('../models/user')

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

const existEmailUser = async (email) =>{
    const emailDb = await User.findOne({email});
    if (emailDb!=null){
        throw new Error(`Email ${email} already exists in database`);
    }
}

const existEmailPutUser = async (email, {req})=>{
    const emails = await User.findOne({email});
    if (emails && emails.id!= req.params.id) {
        throw new Error(`Email ${email} already exists in database`);
    }
}

const existLogin = async (login) =>{
    const loginDb = await User.findOne({login});
    if (loginDb!=null){
        throw new Error(`Login ${login} already exists in database`);
    }
}

const existLoginPut = async (login, {req})=>{
    const logins = await User.findOne({login});
    if (logins && logins.id!= req.params.id) {
        throw new Error(`Login ${login} already exists in database`);
    }
}

module.exports = {existEmail, existEmailPut, existEmailUser, existEmailPutUser, existLogin, existLoginPut}