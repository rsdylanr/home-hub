export interface RuntimeWindowPosition {
  readonly x: number;
  readonly y: number;
}

export interface RuntimeWindowSize {
  readonly width: number;
  readonly height: number;
}

export interface RuntimeWindowDefinition {
  readonly id: string;
  readonly title: string;
  readonly position: RuntimeWindowPosition;
  readonly size: RuntimeWindowSize;
}
