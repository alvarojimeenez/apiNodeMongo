const FootballPlayer = require("../models/footballPlayer");
const {validationResult} = require('express-validator');

const getFootballPlayers = async(req, res) => {
    try{
        const players = await FootballPlayer.find();
        res.status(200).json(players);
    }catch(error){
        res.status(500).json({message: error})
    }
}

const getFootballPlayersById = async(req, res) => {
    try{
        const players = await FootballPlayer.findById({_id: req.params.id});
        res.status(200).json(players);
    }catch(error){
        res.status(500).json({message: error})
    }
}

const addFootballPlayer = async(req,res) => {
    const player = req.body;
    const players = new FootballPlayer(player);
    try{
        await players.save();
        res.status(201).json(players);
    }catch(error){
        res.status(500).json({message: error})
    }
}

const deleteFootballPlayer = async(req,res) => {
    try{
        await FootballPlayer.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({message: "Eliminado"})
    }catch(error){
        res.status(500).json({message: error})
    }
}

const editFootballPlayer = async(req, res) =>{
    try{
        const player = req.body;
        await FootballPlayer.findByIdAndUpdate(req.params.id,player);
        res.status(200).json({message: "Editado"})
    }catch(error){
        res.status(500).json({message: error})
    }
}

module.exports = {getFootballPlayers, getFootballPlayersById, addFootballPlayer, deleteFootballPlayer, editFootballPlayer}