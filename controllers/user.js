const User = require("../models/user");
const {validationResult} = require('express-validator');


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
    const user = req.body;
    const users = new User(user);
    try{
        await users.save();
        res.status(201).json(users);
    }catch(error){
        res.status(500).json({message: error})
    }
}

const deleteUser = async(req,res) => {
    try{
        const user = await User.findById({_id: req.params.id});
        user.active = false;
        await user.save();
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

module.exports = {getUsers, getUserById, addUser, deleteUser, editUser}