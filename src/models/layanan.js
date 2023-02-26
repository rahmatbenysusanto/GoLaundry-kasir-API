import db from "../config/databaseConfig.js";
import { Sequelize, DataTypes } from 'sequelize';

const layanan = db.define('layanan', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    nama_layanan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    harga: {
        type: DataTypes.DECIMAL(15, 0)
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

export default layanan;
