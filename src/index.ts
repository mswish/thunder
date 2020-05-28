import { Client }  from 'discord.js';
import { Bot } from './bot';
import * as config from './config.json';

const bot = new Bot();
bot.run(config);