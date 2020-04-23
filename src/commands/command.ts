export interface Icommand {
  name: string;
  command(args: any[]): void;
}