const express = require("express");
const router = express.Router()


const {check} = require('express-validator');
const {getUsers, getUserById, addUser, editUser, deleteUser} = require("./../controllers/user");
const {validateFields} = require("./../middlewares/validate-fields")
const {existEmailUser, existEmailPutUser, existLogin, existLoginPut} = require("./../helpers/db-validators")


router
.route('/')
.get(getUsers)
.post([
    check('name','Name is required').not().isEmpty(),
    //check('password', "Password is incorrect").matches("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8}$/"),
    check('email').isEmail(),
    check('email').custom(existEmailUser),
    check('login').custom(existLogin),
    check('role', 'Role is required').not().isEmpty(),
    validateFields
], addUser);

router
.route('/:id')
.get(getUserById)
.delete(deleteUser)
.put([
    check('id', "Not valid mongo id").isMongoId(),
    check('name','Name is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('email').custom(existEmailPutUser),
    check('login').custom(existLoginPut),
    check('team', 'Team is required').not().isEmpty(),
    check('role', 'Role is required').not().isEmpty(),
    validateFields
], editUser);

module.exports = router;