const express = require("express");
const router = express.Router()


const {check} = require('express-validator');
const {getFootballPlayers, getFootballPlayersById, addFootballPlayer, deleteFootballPlayer, editFootballPlayer} = require("./../controllers/footballPlayer");
const {validateFields} = require("./../middlewares/validate-fields")


router
.route('/')
.get(getFootballPlayers)
.post([
    check('name','Name is required').not().isEmpty(),
    check('age', 'Age is required').isInt({min:0}),
    check('team', 'Team is required').not().isEmpty(),
    validateFields
], addFootballPlayer);

router
.route('/:id')
.get(getFootballPlayersById)
.delete(deleteFootballPlayer)
.put([
    check('id', "Not valid mongo id").isMongoId(),
    check('name','Name is required').not().isEmpty(),
    check('age', 'Age is required').isNumeric(),
    check('team', 'Team is required').not().isEmpty(),
    validateFields
], editFootballPlayer);

module.exports = router;