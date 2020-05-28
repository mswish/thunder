export interface IBot {
  readonly commands: IBotCommand[]
  readonly allUsers: IUser[]
  readonly onlineUsers: IUser[]
  run(config: IBotConfig): Promise<void>
}

export interface IBotCommand {
  readonly name: string
  getHelp(): string
  run(msg: string): Promise<void>
}

export interface IBotConfig {
  token: string
  commands: string[]
  prefix: string
  game?: string
  username?: string
}

export interface IBotCommandHelp {
  caption: string
  description: string
}

export interface IUser {
  id: string
  username: string
  discriminator: string
  tag: string
}

export interface IBotMessage {
  readonly user: IUser
  setTextOnly(text: string): IBotMessage
  addField(name: string, value: string): IBotMessage
  addBlankField(): IBotMessage
  setColor(color: color): IBotMessage
  setDescription(description: string): IBotMessage
  setFooter(text: string, icon?: string): IBotMessage
  setImage(url: string):IBotMessage
  setThumbnail(url: string): IBotMessage
  setTitle(title: string): IBotMessage
  setURL(url: string): IBotMessage
}

type color =
[number, number, number]
| number
| string