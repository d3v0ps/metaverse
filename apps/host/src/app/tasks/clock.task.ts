import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ClockTask {
  run$ = new BehaviorSubject<Date>(new Date());

  private readonly logger = new Logger(ClockTask.name);

  @Cron(CronExpression.EVERY_SECOND)
  onCron() {
    this.logger.debug(`Clock tick ${new Date().toISOString()}`);
    this.run$.next(new Date());
  }
}
