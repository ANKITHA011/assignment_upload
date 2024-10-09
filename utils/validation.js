const Joi = require('joi');

// Validation schema for registering users and admins
const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(255).required(),
        password: Joi.string().min(6).required(),
        role: Joi.string().valid('user', 'admin').required(),
    });
    return schema.validate(data);
};

// Validation schema for logging in users and admins
const loginValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    });
    return schema.validate(data);
};

// Validation for uploading assignments
const assignmentValidation = (data) => {
    const schema = Joi.object({
        task: Joi.string().min(3).required(),
        admin: Joi.string().required(), // Assuming it's an ObjectId string
    });
    return schema.validate(data);
};

module.exports = {
    registerValidation,
    loginValidation,
    assignmentValidation,
};

