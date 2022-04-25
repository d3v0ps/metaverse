import { Injectable } from '@angular/core';

export type CommandInput = string;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CommandHandler = (...params: any[]) => void;

export interface CommandExecutionParams {
  input: CommandInput;
  command: string;
  parameters: string[];
}

export const defaultCommand = 'search';

@Injectable({
  providedIn: 'root',
})
export class CommandService {
  private commands: Record<string, CommandHandler[]> = {};

  execute(input: CommandInput): void {
    let command = defaultCommand;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let params: any[] = [];

    if (typeof input === 'string') {
      const [inputCommand, ...inputParams] = input.split(' ');
      const inputHasHandlers = this.hasHandlers(inputCommand);
      command = inputHasHandlers ? inputCommand : defaultCommand;
      params = inputHasHandlers ? inputParams : [inputCommand, ...inputParams];
    }

    const hasHandlers = this.hasHandlers(command);

    if (!hasHandlers) {
      return;
    }

    const handlers = this.commands[command];

    handlers.forEach((handler) => handler(...params));
  }

  register(command: string, handler: CommandHandler) {
    if (this.isRegistered(command, handler)) {
      throw new Error(`Command ${command} is already registered`);
    }

    this.commands[command] = this.commands[command] || [];

    this.commands[command].push(handler);
  }

  private hasHandlers(command: string) {
    return this.commands[command] && this.commands[command].length;
  }

  private isRegistered(command: string, handler: CommandHandler) {
    const commandExists = this.commands[command] ? true : false;

    if (!commandExists) {
      return false;
    }

    return this.commands[command] &&
      this.commands[command].indexOf(handler) === -1
      ? false
      : true;
  }
}
