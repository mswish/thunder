import { Sequelize, Model, DataTypes } from 'sequelize';
import config from '../../config.json'
import logger from './logger';

async function connectDatabase() {
    const sequelize = new Sequelize(config.database);

    try {
        await sequelize.authenticate();
        logger.log('debug', 'Connected');
    } catch (err) {
        logger.log('error', 'Failed to authenticate the connection.');
    }
}

export default connectDatabase;
