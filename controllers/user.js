const User = require("../models/user");
const {validationResult} = require('express-validator');
const bcryptjs = require("bcryptjs")


const getUsers = async(req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({message: error})
    }
}

const getUserById = async(req, res) => {
    try{
        const users = await User.findById({_id: req.params.id});
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({message: error})
    }
}

const addUser = async(req,res) => {
    const salt = bcryptjs.genSaltSync();
    const user = req.body;
    encryptedPassword = bcryptjs.hashSync(user.password , salt);
    const users = new User({...user, active: true, password: encryptedPassword});
    try{
        users.active= true;
        await users.save();
        res.status(201).json(users);
    }catch(error){
        res.status(500).json({message: error})
    }
}

const deleteUser = async(req,res) => {
    try{
        await User.findByIdAndUpdate(req.params.id, {active: false});
        res.status(200).json({message: "Eliminado"})
    }catch(error){
        res.status(500).json({message: error})
    }
}

const editUser = async(req, res) =>{
    try{
        const user = req.body;
        await User.findByIdAndUpdate(req.params.id,player);
        res.status(200).json({message: "Editado"})
    }catch(error){
        res.status(500).json({message: error})
    }
}

const login = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})

    if (user){
        const validPassword = bcryptjs.compareSync( password, user.password);
        if (validPassword) {
            res.status(200).json({user})
        }else {
            return res.status(400).json({message: "Contraseña incorrecto"})
        }
    }else {
        
        return res.status(400).json({message: "Email incorrecto"})
    }


    
}

module.exports = {getUsers, getUserById, addUser, deleteUser, editUser, login}