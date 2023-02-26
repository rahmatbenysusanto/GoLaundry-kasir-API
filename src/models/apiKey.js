import { Sequelize, DataTypes } from 'sequelize';
import db from "../config/databaseConfig.js";

const apiKey = db.define('api_key', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    apiKey: {
        type: DataTypes.STRING,
    },
    countHit: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true,
});

export default apiKey;