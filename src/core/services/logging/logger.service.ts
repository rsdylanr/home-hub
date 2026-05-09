import {
  LoggerContext,
  LogSeverity,
  StructuredLog,
} from './logger.types';

export class LoggerService {
  public log(
    severity: LogSeverity,
    message: string,
    context: LoggerContext,
  ): void {
    const payload: StructuredLog = {
      timestamp: new Date().toISOString(),
      severity,
      message,
      filePath: context.filePath,
      functionName: context.functionName,
      metadata: context.metadata ?? {},
    };

    console.log(payload);
  }

  public debug(
    message: string,
    context: LoggerContext,
  ): void {
    this.log('debug', message, context);
  }

  public info(
    message: string,
    context: LoggerContext,
  ): void {
    this.log('info', message, context);
  }

  public warn(
    message: string,
    context: LoggerContext,
  ): void {
    this.log('warn', message, context);
  }

  public error(
    message: string,
    context: LoggerContext,
  ): void {
    this.log('error', message, context);
  }

  public fatal(
    message: string,
    context: LoggerContext,
  ): void {
    this.log('fatal', message, context);
  }
}
