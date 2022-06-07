import {Sequelize} from 'Sequelize';

const database = new Sequelize('database_mern', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default database;