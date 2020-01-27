const router = require('express').Router();
const UsersCtrl = require('../controllers/UsersController');

router.get('/', UsersCtrl.getUsers);

module.exports = router;
