import { Sequelize, DataTypes } from 'sequelize';
import db from "../config/databaseConfig.js";

const client = db.define('client', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    noHp: {
        type: DataTypes.DECIMAL(15, 0)
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true
});

export default client;