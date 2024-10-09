const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.authenticateUser = (req, res, next) => {
    // Verify token and user role
};

exports.authenticateAdmin = (req, res, next) => {
    // Verify token and admin role
};
