export interface RuntimeEvent<TPayload> {
  readonly type: string;
  readonly payload: TPayload;
  readonly timestamp: number;
  readonly source: string;
}

export type RuntimeEventListener<TPayload> = (
  event: RuntimeEvent<TPayload>,
) => Promise<void> | void;
