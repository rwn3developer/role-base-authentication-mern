const express = require('express');

const routes = express.Router();

const {registerUser, login ,adminAccess,managerAccess} = require('../controllers/AuthController');

const { verifyToken, authorizeRole } = require('../middleware/AuthMiddleware');

routes.post('/login',login)
routes.post('/register',registerUser)
routes.get('/admin-access',verifyToken,authorizeRole(['admin']),adminAccess)
routes.get('/manager-access',verifyToken,authorizeRole(['admin','manager']),managerAccess)


module.exports = routes;