import {
  RuntimeRegistryDomain,
  RuntimeRegistryEntry,
  RuntimeRegistrySnapshot,
} from './runtime-registry.types';

export class RuntimeRegistryService {
  private readonly registry = new Map<
    RuntimeRegistryDomain,
    Map<string, RuntimeRegistryEntry<unknown>>
  >();

  public constructor() {
    this.initializeRegistryDomains();
  }

  private initializeRegistryDomains(): void {
    const domains: RuntimeRegistryDomain[] = [
      'service',
      'widget',
      'window',
      'layout',
      'action',
      'event',
      'command',
      'automation',
    ];

    for (const domain of domains) {
      this.registry.set(domain, new Map());
    }
  }

  public register<TDefinition>(
    entry: RuntimeRegistryEntry<TDefinition>,
  ): void {
    const domainRegistry = this.registry.get(entry.domain);

    if (!domainRegistry) {
      throw new Error(`Registry domain missing: ${entry.domain}`);
    }

    if (domainRegistry.has(entry.metadata.id)) {
      throw new Error(
        `Duplicate runtime registration: ${entry.metadata.id}`,
      );
    }

    domainRegistry.set(entry.metadata.id, entry);
  }

  public unregister(
    domain: RuntimeRegistryDomain,
    id: string,
  ): void {
    const domainRegistry = this.registry.get(domain);

    if (!domainRegistry) {
      return;
    }

    domainRegistry.delete(id);
  }

  public get<TDefinition>(
    domain: RuntimeRegistryDomain,
    id: string,
  ): RuntimeRegistryEntry<TDefinition> | null {
    const domainRegistry = this.registry.get(domain);

    if (!domainRegistry) {
      return null;
    }

    return (
      (domainRegistry.get(id) as RuntimeRegistryEntry<TDefinition>) ??
      null
    );
  }

  public getAll<TDefinition>(
    domain: RuntimeRegistryDomain,
  ): readonly RuntimeRegistryEntry<TDefinition>[] {
    const domainRegistry = this.registry.get(domain);

    if (!domainRegistry) {
      return Object.freeze([]);
    }

    return Object.freeze([
      ...domainRegistry.values(),
    ]) as readonly RuntimeRegistryEntry<TDefinition>[];
  }

  public createSnapshot(): RuntimeRegistrySnapshot {
    return {
      services: this.collectKeys('service'),
      widgets: this.collectKeys('widget'),
      windows: this.collectKeys('window'),
      layouts: this.collectKeys('layout'),
      actions: this.collectKeys('action'),
      events: this.collectKeys('event'),
      commands: this.collectKeys('command'),
      automations: this.collectKeys('automation'),
    };
  }

  private collectKeys(
    domain: RuntimeRegistryDomain,
  ): readonly string[] {
    return Object.freeze([
      ...(this.registry.get(domain)?.keys() ?? []),
    ]);
  }
}
