import { Client }  from 'discord.js';
import { Bot } from './bot';
import * as config from '../config.json';
import 'reflect-metadata';

const bot = new Bot();
bot.run(config);
