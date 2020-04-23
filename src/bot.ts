import { Client , Collection} from 'discord.js';
import data from './config.json';
import logger from './utility/logger';
import { Icommand } from './commands/command';

interface command {
  arguments: any[];
}

export class Bot {
  private client: Client;
  private key: string;
  private prefix: string;
  private commands: Collection<string, Icommand>;

  constructor() {
    this.client = new Client();
    this.key = data.key;
    this.prefix = data.prefix;
    this.commands = new Collection();
  }

  public run(): void {
    this.client.login(this.key);

    this.client.on('ready', async () => {
      logger.log('debug', `Ready and waiting`);
    });

    this.client.on('message', (message) => {
      if(message.content.slice(0, this.prefix.length) === this.prefix) {

      }
    });
  }
}