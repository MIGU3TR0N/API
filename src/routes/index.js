const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUserById, updateUser } = require('../controllers/index.controller');

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.delete('user/:id', deleteUserById);
router.put('users/:id', updateUser);

module.exports = router;