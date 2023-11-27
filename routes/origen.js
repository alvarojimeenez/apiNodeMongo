const express = require("express");
const router = express.Router()


const {check} = require('express-validator');
const {getOrigen, getOrigenById, addOrigen, deleteOrigen, editOrigen} = require("./../controllers/origen");
const {validateFields} = require("./../middlewares/validate-fields")

router
.route('/')
.get(getOrigen)
.post([
    check('city','City is required').not().isEmpty(),
    check('year', 'Year is required').isInt({min: 1869, max: 2023}),
    validateFields
], addOrigen);

router
.route('/:id')
.get(getOrigenById)
.delete(deleteOrigen)
.put([
    check('id', "Not valid mongo id").isMongoId(),
    check('city','City is required').not().isEmpty(),
    check('year', 'Year is required').isInt({min: 1869, max: 2023}),
    validateFields
], editOrigen);

module.exports = router;