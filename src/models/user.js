import {Sequelize, DataTypes} from 'sequelize';
import db from '../config/databaseConfig.js';

const user = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    noHp: {
        type: DataTypes.DECIMAL(15, 0),
    },
    address: {
        type: DataTypes.TEXT,
    },
    otp: {
        type: DataTypes.INTEGER,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salt: {
        type: DataTypes.TEXT,
    },
    expired: {
        type: DataTypes.DATE,
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

export default user;
