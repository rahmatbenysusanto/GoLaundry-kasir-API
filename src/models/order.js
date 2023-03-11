import { Sequelize, DataTypes } from 'sequelize';
import db from "../config/databaseConfig.js";
import orderDetail from "./orderDetail.js";
import client from "./client.js";

const order = db.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    client_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
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

order.hasMany(orderDetail, { foreignKey: 'order_id' });
order.hasOne(client, { foreignKey: 'client_id' });
order.belongsTo(client, { foreignKey: 'client_id'});

export default order;