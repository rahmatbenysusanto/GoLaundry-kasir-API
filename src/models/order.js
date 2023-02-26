import { Sequelize, DataTypes } from 'sequelize';
import db from "../config/databaseConfig.js";

const order = db.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    client_id: {
        type: DataTypes.INTEGER,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    price: {
        type: DataTypes.DECIMAL(15, 0)
    },
    status: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
}, {
    freezeTableName: true
});

export default order;