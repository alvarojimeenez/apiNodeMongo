const Origen = require("../models/origen");
const {validationResult} = require('express-validator');

const getOrigen = async(req, res) => {
    try{
        const origins = await Origen.find();
        res.status(200).json(origins);
    }catch(error){
        res.status(500).json({message: error})
    }
}

const getOrigenById = async(req, res) => {
    try{
        const origin = await Origen.find({_id: req.params.id});
        res.status(200).json(origin);
    }catch(error){
        res.status(500).json({message: error})
    }
}

const addOrigen = async(req,res) => {
    const origin = req.body;
    const origins = new Origen(origin);
    try{
        await origins.save();
        res.status(201).json(origins);
    }catch(error){
        res.status(500).json({message: error})
    }
}

const deleteOrigen = async(req,res) => {
    try{
        await Origen.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({message: "Eliminado"})
    }catch(error){
        res.status(500).json({message: error})
    }
}

const editOrigen = async(req, res) =>{
    try{
        const origin = req.body;
        await Origin.findByIdAndUpdate(req.params.id, origin);
        res.status(200).json({message: "Editado"})
    }catch(error){
        res.status(500).json({message: error})
    }
}

module.exports = {getOrigen, getOrigenById, addOrigen, deleteOrigen, editOrigen}