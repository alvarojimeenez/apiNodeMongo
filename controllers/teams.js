const Team = require("../models/team");
const { validationResult } = require('express-validator');
const getTeams = async(req, res) => {
    try {
      const teams = await Team.find();
      res.status(200).json(teams);
    } catch (error) {
      res.status(500).json({message: error})
    }
  };

  const getTeamsById = async(req, res) => {
    try {
      const teams = await Team.findById({_id: req.params.id});
      if (teams){
        res.status(200).json(teams);
      }else {
        res.status(400).json({message: "Id no encontrado"})
      }
    } catch (error) {
      res.status(500).json({message: error})
    }
  };

const addTeam = async(req, res) => {
      const team = req.body
      const teams = new Team(team)
      try{
        await teams.save();
        res.status(201).json(teams)
      }catch(error){
        res.status(500).json({message: error})
      }
  };

const deleteTeam = async(req, res) => {
  try {
    const teams = await Team.findByIdAndRemove({_id: req.params.id})
    if (teams){
      res.status(200).json({message: "Eliminado"});
    }else {
      res.status(400).json({message: "Id no encontrado"})
    }
  } catch (error) {
    res.status(500).json({message: error})
  }
};

const editTeam = async (req, res) => {
  try{
    const team = req.body
    const teams = await Team.findByIdAndUpdate(req.params.id,team)
    if (teams){
      res.status(200).json({message: "Editado"}); 
    }else {
      res.status(400).json({message: "Id no encontrado"})
    }
  }catch (error) {
    res.status(500).json({message: error})
  }
}

module.exports = { getTeams, getTeamsById, addTeam, deleteTeam, editTeam}