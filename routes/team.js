const express = require("express");
const router = express.Router()


const {check} = require('express-validator');
const {getTeams, getTeamsById, addTeam, deleteTeam, editTeam} = require("./../controllers/teams");
const {validateFields} = require("./../middlewares/validate-fields")
const {existEmail} = require("./../helpers/db-validators")

router
.route('/')
.get(getTeams)
.post([
    check('name','Name is required').not().isEmpty(),
    check('city', 'City is required').not().isEmpty(),
    check('email').custom(existEmail),
    validateFields
], addTeam)

router
.route('/:id')
.get(getTeamsById)
.delete(deleteTeam)
.put([
    check('id', "Not valid mongo id").isMongoId(),
    check('name','Name is required').not().isEmpty(),
    check('city', 'City is required').not().isEmpty(),
    check('email').custom(existEmail),
    validateFields
], editTeam)


module.exports = router;
