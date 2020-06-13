import { IBotCommand } from "../interfaces";
import logger from "../utility/logger";
import { Client, Message, MessageEmbed } from "discord.js";

export default class hello implements IBotCommand {
    public get name(): string { return this._name};

    private _name: string = 'hello';

    public async run(args, message): Promise<void> {
        if(!args[1]) { 
            message.channel.send(`Hello! I hope you have a wonderful day. Thanks for saying hello to me.`);
            return;
        };

       
    public getHelp(res: MessageEmbed): MessageEmbed {
        res.addField('Hello: Say hello to thunder bot for fun!');
        return res;
    }

}
