import { IBotCommand} from "../interfaces";
import logger from "../utility/logger";
import { MessageEmbed } from "discord.js";

export default class clear implements IBotCommand {
    public get name(): string { return this._name};

    private _name: string = 'flip';

    public async run(args, message): Promise<void> {
        if(!args[1]) {
            message.channel.send("Flip requires a second argument.");
            return;
        }
        if(args[1] ==='tails' || args[1] === 'heads' ) {
            const result = Math.round(Math.random() * 1)? 'tails' : 'heads';
            if(args[1] === result) {
                const res = new MessageEmbed()
                .setTitle('Flip Results')
                .setColor('#CC0000')
                .addField('Congratulations!', 'You have won the coin toss');
                message.channel.send(res);
            } else {
                const res = new MessageEmbed()
                .setTitle('Flip Results')
                .setColor('#CC0000')
                .addField('I am sorry: ', 'You have lost the coin toss');
                message.channel.send(res);
            }
        } else {
            message.channel.send(`${args[1]} is not a a valid argument, try heads or tails`);
        }
    }

    public getHelp(res: MessageEmbed): MessageEmbed{
        res.addField('Flips a coin', 'Call heads or tails ex: ?flip heads');
        return res;
    }
}
