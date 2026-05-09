import {
  RuntimeEvent,
  RuntimeEventListener,
} from './event.types';

export class EventBusService {
  private readonly listeners = new Map<
    string,
    Set<RuntimeEventListener<unknown>>
  >();

  public subscribe<TPayload>(
    eventType: string,
    listener: RuntimeEventListener<TPayload>,
  ): () => void {
    const existingListeners =
      this.listeners.get(eventType) ?? new Set();

    existingListeners.add(
      listener as RuntimeEventListener<unknown>,
    );

    this.listeners.set(eventType, existingListeners);

    return () => {
      existingListeners.delete(
        listener as RuntimeEventListener<unknown>,
      );
    };
  }

  public async emit<TPayload>(
    event: RuntimeEvent<TPayload>,
  ): Promise<void> {
    const listeners = this.listeners.get(event.type);

    if (!listeners) {
      return;
    }

    for (const listener of listeners) {
      await listener(event);
    }
  }
}
