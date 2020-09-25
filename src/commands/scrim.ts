import { IBotCommand } from '../interfaces';
import logger from '../utility/logger';
import { MessageEmbed } from 'discord.js';
import connectDatabase from '../utility/database';
export default class scrim implements IBotCommand {
    public get name(): string { return this._name };

    private _name: string = 'scrim';

    public async run(args, message): Promise<void> {
        logger.log('debug', `run ${ this._name } `);
        await connectDatabase();
        logger.log('debug', 'after connect database');
    }

    public getHelp(res: MessageEmbed): MessageEmbed {
        res.addField('Adds a scrim to our database', 'Add a match history link');
        return res;
    }
}

