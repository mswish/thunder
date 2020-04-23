import { Message } from 'discord.js';
import { Icommand } from './command';

const name = 'role';
export function role(args: any[]) {
  args[0]?.channel.send('were here');
};


export {name};
export {role as command};