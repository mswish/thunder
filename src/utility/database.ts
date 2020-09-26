import config from '../../config.json'
import logger from './logger';
import { createConnection, Connection } from 'typeorm';
import { Scrim } from '../entity/scrim';

async function connectDatabase() {
    const connection = await createConnection({
        type: 'postgres',
        url: config.database,
        entities: [Scrim]
    });
    try {
        logger.log('debug', 'Connected');
    } catch (err) {
        logger.log('error', 'Failed to authenticate the connection.');
    }
}

export default connectDatabase;
