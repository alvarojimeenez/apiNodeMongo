const express = require("express");
const router = express.Router()


const {check} = require('express-validator');
const {login} = require("../controllers/user");
const {validateFields} = require("../middlewares/validate-fields")


router
.route('/login')
.post([
    check('email').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields
], login);

module.exports = router;