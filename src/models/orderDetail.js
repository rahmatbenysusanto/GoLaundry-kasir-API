import { Sequelize, DataTypes } from 'sequelize';
import db from "../config/databaseConfig.js";
import order from "./order.js";

const orderDetail = db.define('order_detail', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
    client_id: {
        type: DataTypes.INTEGER,
    },
    order_id: {
        type: DataTypes.INTEGER,
    },
    layanan_id: {
        type: DataTypes.INTEGER,
    },
    price: {
        type: DataTypes.DECIMAL(15, 0),
    },
    count: {
        type: DataTypes.INTEGER,
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

export default orderDetail;