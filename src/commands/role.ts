import { IBotCommand, IBotMessage, IBotCommandHelp } from "../interfaces";
import logger from "../utility/logger";
import { Message, GuildMember ,Client, MessageEmbed } from "discord.js";


export default class role implements IBotCommand {
  public get name(): string { return this._name };

  private _name: string = 'role';

  public async run(args, message: Message): Promise<void> {
    if(args[1]) {
      const roleType: string = args[1].toLowerCase();
      switch(roleType) {
        case 'top':
          const top = await message.guild.roles.fetch('719955683637985320');
          message.member.roles.add(top);
          message.channel.send(`Role added to ${message.author.username}: Top`);
          break;
        case 'jungle':
          const jungle = await message.guild.roles.fetch('719955779267854518');
          message.member.roles.add(jungle);
          message.channel.send(`Role added to ${message.author.username}: jungle`);
          break;
        case 'mid':
          const mid = await message.guild.roles.fetch('719955847140081765');
          message.member.roles.add(mid);
          message.channel.send(`Role added to ${message.author.username}: mid`);
          break;
        case 'bot':
          const bot = await message.guild.roles.fetch('719956344698044497');
          message.member.roles.add(bot);
          message.channel.send(`Role added to ${message.author.username}: bot`);
          break;
        case 'support':
          const support = await message.guild.roles.fetch('719956440365924352');
          message.member.roles.add(support);
          message.channel.send(`Role added to ${message.author.username}: support`);
          break;
        case 'fill':
          const fill = await message.guild.roles.fetch('720688831837503588');
          message.member.roles.add(fill);
          message.channel.send(`Role added to ${message.author.username}: fill`);
          break;
        case 'student':
          const student = await message.guild.roles.fetch('730022599060488202');
          message.member.roles.add(student);
          message.channel.send(`Role added to ${message.author.username}: student`);
          break;
        case 'inhouse':
            const inhouse = await message.guild.roles.fetch('735243723125817437');
            message.member.roles.add(inhouse);
            message.channel.send(`Role added to ${message.author.username}: inhouse`);
            break;
        default: {
          message.channel.send(`No role for ${roleType}. Please pass valid role.`);
        }
      }
    }
  }

  public getHelp(res: MessageEmbed): MessageEmbed{
    res.addField('Role: adds a role to the guild member', 'Available roles: top, mid, bot, jungle, support, fill, and inhouse.');
    return res;
  }
}
