import { IBotCommand } from '../interfaces';
import logger from '../utility/logger';
import { MessageEmbed } from 'discord.js';

export default class scrim implements IBotCommand {
    public get name(): string { return this._name };

    private _name: string = 'scrim';

    public async run(args, message): Promise<void> {
        logger.log('debug', `run ${ this._name } `);
    }

    public getHelp(res: MessageEmbed): MessageEmbed {
        res.addField('Adds a scrim to our database', 'Add a match history link');
        return res;
    }
}

