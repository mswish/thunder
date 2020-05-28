import { IBotCommand, IBotMessage, IBotCommandHelp } from "../interfaces";
import logger from "../utility/logger";

export default class role implements IBotCommand {
  public get name(): string { return this._name };

  private _name: string = 'role';

  public async run(msg: string): Promise<void> {
    logger.log('info', 'we in');
  }

  public getHelp(): string{
    logger.log('info', 'we in help');
    return 'This does stuff';
  }
}