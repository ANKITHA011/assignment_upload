const express = require('express');
const { register, login, viewAssignments, acceptAssignment, rejectAssignment } = require('../controllers/adminController');
const { authenticateAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/assignments', authenticateAdmin, viewAssignments);
router.post('/assignments/:id/accept', authenticateAdmin, acceptAssignment);
router.post('/assignments/:id/reject', authenticateAdmin, rejectAssignment);

module.exports = router;
