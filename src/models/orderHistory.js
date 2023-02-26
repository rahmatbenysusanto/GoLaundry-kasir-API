import { Sequelize, DataTypes } from 'sequelize';
import db from "../config/databaseConfig.js";

const orderHistory = db.define('order_history', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_id: {
        type: DataTypes.INTEGER,
    },
    title_history: {
        type: DataTypes.TEXT,
    },
    desc_history: {
        type: DataTypes.TEXT,
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

export default orderHistory;