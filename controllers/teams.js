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
    const teams = await Team.findOneAndDelete({name: req.params.name})
    res.status(201).json({message: Eliminado});
  } catch (error) {
    res.status(500).json({message: error})
  }
};

const editTeam = async (req, res) => {
  try{
    const team = req.body
    const teams = await Team.findOneAndUpdate(team)
    res.status(200).json({message: Editado}); 
  }catch (error) {
    res.status(500).json({message: error})
  }
}

module.exports = { getTeams, addTeam, deleteTeam, editTeam}