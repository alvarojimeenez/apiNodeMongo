const express = require("express");
const router = express.Router()


const {check} = require('express-validator');
const {getTeams, addTeam, deleteTeam, editTeam} = require("./../controllers/teams");
const {validateFields} = require("./../middlewares/validate-fields")

router
.route('/')
.get(getTeams)
.post([
    check('name','Name is required').not().isEmpty(),
    check('city', 'City is required').not().isEmpty(),
    validateFields
], addTeam)

router
.route('/:name')
.delete(deleteTeam)
.put([
    check('name','Name is required').not().isEmpty(),
    check('city', 'City is required').not().isEmpty(),
    validateFields
], editTeam)

module.exports = router;
