/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
import { Injectable } from "@angular/core";


export enum LogLevel {
  Critical = 'Critical',
  Error = 'Error',
  Warn = 'Warning',
  Info = 'Info',
  Time = 'Time',
  Debug = 'Debug',
}

@Injectable({
  providedIn: 'root'
})
export class Logger {

  _console: {
    log: (...args: any[]) => void;
    error: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    trace: (...args: any[]) => void;
  } = (window as any).logger?._console || console;

  visibleLevels = [
    LogLevel.Debug,
    LogLevel.Critical,
    LogLevel.Error,
    // LogLevel.Warn,
    LogLevel.Time,
    // LogLevel.Info,
  ];


  _log(title: string, style: string, payload: any) {
    this._console.log(title, style, ...payload);
  }


  _error(...args: any[]) {
    this._console.error(...args);
  }

  _warn(...args: any[]) {
    this._console.warn(...args);
  }


  _debug(...args: any[]) {
    this._console.trace(...args);
  }

  log(title: string, payload?: any, level = LogLevel.Info, showTrace = true): any {
    if (!this.visibleLevels.includes(level)) {
      return;
    }
    const getStyle = (color: string) => `background: ${backgroundColor}; color: ${color}`;

    const backgroundColor = '#404040';

    const colors = {
      [LogLevel.Error]: '#f44336',
      [LogLevel.Critical]: '#c62828',
      [LogLevel.Warn]: '#ff9800',
      [LogLevel.Info]: '#2196f3',
      [LogLevel.Debug]: '#9575cd',
    };

    const logHandlers = {
      [LogLevel.Critical]: (title: string, payload: any) => this._error(`%c [☣️ ${title}]`, getStyle(colors[LogLevel.Critical]), payload),
      [LogLevel.Error]: (title: string, payload: any) => this._error(`%c [😅 ${title}] `, getStyle(colors[LogLevel.Error]), payload),
      [LogLevel.Warn]: (title: string, payload: any) => this._log(`%c [🤔 ${title}]`, getStyle(colors[LogLevel.Warn]), payload),
      [LogLevel.Info]: (title: string, payload: any) => this._log(`%c [👣 ${title}] `, getStyle(colors[LogLevel.Info]), payload),
      [LogLevel.Time]: (title: string, payload: any) => console.time(`[⌛ ${title}]`),
      [LogLevel.Debug]: (title: string, payload: any) => this[showTrace ? '_debug' : '_log']?.(`%c [🪰 ${title}]`, getStyle(colors[LogLevel.Debug]), payload),
    }

    return logHandlers[level](title, payload);
  }

  test() {
    this.log('LoggerInstance', this, LogLevel.Debug);
    this.log('Oops!', new Error('Something wrong happened'), LogLevel.Critical);
    this.log('Request Failed', new Error('Reason: statusCode: 404 '), LogLevel.Error);
    this.log('Deprecated', 'Use Logger.log instead', LogLevel.Warn);
    this.log('Logger', 'Logger Tested', LogLevel.Info);
  }

}



const generateWindowConsole = (oldConsole: { log: (...args: any[]) => void; error: (...args: any[]) => void; warn: (...args: any[]) => void; trace: (...args: any[]) => void; }) => {
  const logger = new Logger();
  logger._console = oldConsole;

  (window as any).logger = logger;

  return {
    log: (...args: any[]) => typeof args === logger.log(args[0], args.slice(1, args.length + 1), LogLevel.Info),
    debug: (...args: any[]) => typeof args === logger.log(args[0], args.slice(1, args.length + 1), LogLevel.Debug, false),
    error: oldConsole.error.bind(oldConsole),
    // error: (...args: any[]) => logger.log('Error', args, LogLevel.Error),
    warn: (...args: any[]) => logger.log(args[0], args.slice(1, args.length + 1), LogLevel.Warn),
    info: (...args: any[]) => logger.log(args[0], args.slice(1, args.length + 1), LogLevel.Info),
    time: (...args: any[]) => logger.log(args[0], LogLevel.Time),
    trace: (...args: any[]) => logger.log(args[0], args.slice(1, args.length + 1), LogLevel.Debug),
  }
}

((oldConsole) => {

  (window as any).console = generateWindowConsole(oldConsole);

})(window.console);

