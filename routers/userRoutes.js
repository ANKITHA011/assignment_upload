const express = require('express');
const { register, login, uploadAssignment, getAllAdmins } = require('../controllers/userController');
const { authenticateUser } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/upload', authenticateUser, uploadAssignment);
router.get('/admins', authenticateUser, getAllAdmins);

module.exports = router;
