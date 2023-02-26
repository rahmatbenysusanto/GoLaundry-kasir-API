import layanan from "../models/layanan.js";

export const getLayanan = async (req, res) => {
    try {
        const result = await layanan.findAll({
            where: {
                user_id: req.body.user_id,
            }
        });
        res.status(200).json({
            status: true,
            message: 'Get layanan successfully',
            data: result
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
        const result = await layanan.findOne({
            where: {
                id: req.params.id,
                user_id: req.body.user_id,
            }
        });
        res.status(200).json({
            status: true,
            message: 'Get layanan successfully',
            data: result
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
}

export const createLayanan = async (req, res) => {
    try {
        const result = await layanan.create(req.body);
        res.status(201).json({
            status: true,
            message: 'Create layanan successfully'
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
}

export const updateLayanan = async (req, res) => {
    try {
        const update = await layanan.update(req.body ,{
            where: {
                id: req.params.id,
                user_id: req.body.user_id,
            }
        });
        res.status(200).json({
            status:  true,
            message: 'Update layanan successfully'
        });
    } catch (err) {
        res.status(400).json({
           status: false,
           message: err.message
        });
    }
}

export const deleteLayanan = async (req, res) => {
    try {
        const deletelayanan = await layanan.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json({
            status: true,
            message: 'Delete layanan successfully'
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
}