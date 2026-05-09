export type LogSeverity =
  | 'debug'
  | 'info'
  | 'warn'
  | 'error'
  | 'fatal';

export interface LoggerContext {
  readonly filePath: string;
  readonly functionName: string;
  readonly metadata?: Record<string, unknown>;
}

export interface StructuredLog {
  readonly timestamp: string;
  readonly severity: LogSeverity;
  readonly message: string;
  readonly filePath: string;
  readonly functionName: string;
  readonly metadata: Record<string, unknown>;
}
