import user from '../models/user.js';
import bcrypt from 'bcrypt';

export const getUser = async (req, res) => {
    try {
        const users = await user.findAll();
        res.status(200).json({
            status: true,
            message: 'Get all users successfully.',
            data: users
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
}

export const findById = async (req, res) => {
    try {
        const result = await user.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            status: true,
            message: 'Get all user successfully.',
            data: result
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
}

export const createUser = async (req, res) => {
    try {
         await bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                user.create({
                    name: req.body.name,
                    email: req.body.email,
                    noHp: req.body.noHp,
                    address: req.body.address,
                    password: hash,
                    salt: salt
                });
                res.status(201).json({
                    status: true,
                    message: 'Create user successfully.'
                });
            });
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
}

export const updateUser = async (req, res) => {
    try {
        const users = await user.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            status: true,
            message: 'Update users successfully.'
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const users = await user.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            status: true,
            message: 'Delete users successfully.'
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
}