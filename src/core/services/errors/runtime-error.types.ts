export type RuntimeErrorSeverity =
  | 'low'
  | 'medium'
  | 'high'
  | 'critical';

export interface RuntimeErrorDefinition {
  readonly message: string;
  readonly severity: RuntimeErrorSeverity;
  readonly source: string;
  readonly timestamp: number;
}
