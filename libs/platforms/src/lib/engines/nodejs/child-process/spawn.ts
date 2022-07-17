import { spawn as spawnChildProcess } from 'child_process';
import { Observable, tap } from 'rxjs';

import { Logger } from '@nestjs/common';

const logger = new Logger('Spawn ChildProcess');

export const spawnWithResult = (
  command: string,
  args: string[] = [],
  options = {}
): Observable<string> => {
  let result = '';
  return new Observable((observer) => {
    return spawn(command, args, options)
      .pipe(
        tap({
          next: (val) => {
            result = result + val;
          },
          error: (err) => observer.error(err),
          complete: () => {
            observer.next(result);
            observer.complete();
          },
        })
      )
      .subscribe();
  });
};

export const spawn = (
  command: string,
  args: string[] = [],
  options = {}
): Observable<string> => {
  const cmdStr = `${command} ${args.join(' ')}`;

  return new Observable((observer) => {
    const spawnee = spawnChildProcess(command, args, {
      ...options,
      shell: process.platform === 'win32',
    });
    logger.log(`Running: ${cmdStr}`);

    spawnee.stdout.on('data', (data) => {
      // logger.verbose(`${data}`);
      observer.next(`${data}`);
    });

    spawnee.stderr.on('data', (data) => {
      logger.error(`${data}`);
      observer.error(`${data}`);
    });

    spawnee.on('close', (code) => {
      if (code === 0) {
        logger.log(`Successfully executed ${cmdStr}`);
        observer.complete();
      } else {
        logger.error(`Failed with code ${code}: ${cmdStr}`);
        observer.error(`Failed with code ${code}: ${cmdStr}`);
      }
    });

    spawnee.on('error', (error) => {
      logger.error(error);
      observer.error(new Error(`Child Process Error: ${error}`));
    });
  });
};
