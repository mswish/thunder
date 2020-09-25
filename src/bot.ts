import { Client, MessageEmbed, PresenceData, Presence } from 'discord.js';
import * as path from 'path';
import logger from './utility/logger';
import {
  IBotMessage,
  IBotCommand,
  IBotCommandHelp,
  IUser,
  IBot,
  IBotConfig
} from './interfaces';
interface command {
  arguments: any[];
}

export class Bot implements IBot {
  public get commands(): IBotCommand[] { return this.commands }

  public get allUsers(): IUser[] { return this._client ? [] : []}

  public get onlineUsers(): IUser[] { return [] }


  private readonly _commands: IBotCommand[] = [];
  private _client: Client
  private _config: IBotConfig
  private _botId: string

  public async run(config: IBotConfig): Promise<void> {
    this._client = new Client();
    this._config = config;

    this.loadCommands('./commands');

    if(!this._config.token) {
      logger.log('error', 'Invalid Discord token, exiting.');
      throw new Error('Invalid Discord token. Termination imminent.');
    };

    this._client.login(this._config.token);

    this._client.on('ready', async () => {
      logger.log('debug', `Ready and waiting`);
      this._botId = this._client.user.id;
      this._client.user.setPresence({
        status: 'dnd',
        activity: {
          name: `| Use ${ this._config.prefix }help for commands |`,
          type: 'LISTENING'
        }
      })
    });


    this._client.on('message', async (message) => {
      if(message.content.slice(0, this._config.prefix.length) === this._config.prefix) {
        if(message.author.id !== this._botId) {
          const content = message.cleanContent;
          const args = content.slice(this._config.prefix.length, content.length).split(' ');

          if(args[0] === 'help') {
            const res = new MessageEmbed();
            for(const cmds of this._commands) {
              cmds.getHelp(res);
            }
            message.channel.send(res);
            return;
          }

          for(const cmds of this._commands) {
            try {
              if(args[0] === cmds.name) {
                logger.log('info', args.toString());
                const res = await cmds.run(args, message);
              }
            } catch (err) {
              logger.log('error', err);
            }
          }
        }
      }
    });
  }

private loadCommands(commandsPaths: string) {
    if (!this._config.commands || !Array.isArray(this._config.commands) || this._config.commands.length === 0) {
      throw new Error('Invalid / empty commands list')
  }
  for (const cmdName of this._config.commands) {
      const cmdClass = require(`${commandsPaths}/${cmdName}`).default
      const command = new cmdClass() as IBotCommand
      this._commands.push(command)
      logger.info(`command "${cmdName}" loaded...`);
  }
}
}
