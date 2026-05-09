export type RuntimeRegistryDomain =
  | 'service'
  | 'widget'
  | 'window'
  | 'layout'
  | 'action'
  | 'event'
  | 'command'
  | 'automation';

export interface RuntimeRegistrationMetadata {
  readonly id: string;
  readonly createdAt: number;
  readonly source: string;
  readonly version: string;
  readonly tags?: readonly string[];
}

export interface RuntimeRegistryEntry<TDefinition> {
  readonly domain: RuntimeRegistryDomain;
  readonly metadata: RuntimeRegistrationMetadata;
  readonly definition: TDefinition;
}

export interface RuntimeRegistrySnapshot {
  readonly services: readonly string[];
  readonly widgets: readonly string[];
  readonly windows: readonly string[];
  readonly layouts: readonly string[];
  readonly actions: readonly string[];
  readonly events: readonly string[];
  readonly commands: readonly string[];
  readonly automations: readonly string[];
}
