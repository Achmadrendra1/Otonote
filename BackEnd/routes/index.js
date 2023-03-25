const { Router } = require('express')
const user = require('../controller/users')

const router = new Router()

router.get('/users', user.FindAllUsers);
router.get('/users/:id', user.FindUserById);
router.post('/users', user.CreateUser);
router.put('/users/:id', user.UpdateUser);
router.delete('/users/:id', user.DeleteUser)

module.exports = router;