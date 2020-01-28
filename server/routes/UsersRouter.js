const router = require('express').Router();
const UsersCtrl = require('../controllers/UsersController');

router.get('/', UsersCtrl.getUsers);

router.get('/ranking', UsersCtrl.getRanking);

router.put('/', UsersCtrl.setScores);

module.exports = router;
