import { Sequelize } from 'sequelize';

const db = new Sequelize('golaundry_kasir', 'postgres', 'postgres', {
    'host': '127.0.0.1',
    'dialect': 'postgres'
});

export default db;

// (async () => {
//     await db.sync();
// })();