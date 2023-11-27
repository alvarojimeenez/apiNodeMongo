const Team = require('../models/team')

const existEmail = async (email) =>{
    const emailDb = await Team.findOne({email});
    if (emailDb!=null){
        throw new Error(`Email ${email} already exists in database`);
    }
}

module.exports = {existEmail}