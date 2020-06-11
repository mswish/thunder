import { IBotCommand } from "../interfaces";
import logger from "../utility/logger";
import { Client, Message, MessageEmbed } from "discord.js";

export default class clear implements IBotCommand {
    public get name(): string { return this._name};

    private _name: string = 'clear';

    public async run(args, message): Promise<void> {
        if(!args[1]) { 
            message.channel.send(`Your command, ${args[0]}, requires a second argument: the number of messages to delete.`);
            return;
        };
        if(isNaN(args[1])) {
            message.channel.send(`Your command, ${args[0]}, requires the second argument to be a number`);
            return;
        }

        if(message.member.hasPermission('ADMINISTRATOR')) {
            await message.channel.messages.fetch({limit: args[1]})
            .then(messages => {
                message.channel.bulkDelete(messages);
            })
            .catch(error => {
                logger.log('debug', error);
            });
            return;
        }
    }

    public getHelp(res: MessageEmbed): MessageEmbed {
        res.addField('Clear: clears messages in the discord.(ADMIN)', 'Arguments: Integer; amount of messages to bulk delete.');
        return res;
    }

}
