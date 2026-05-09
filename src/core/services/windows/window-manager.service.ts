import {
  RuntimeWindowDefinition,
} from './window.types';

export class WindowManagerService {
  private readonly windows = new Map<
    string,
    RuntimeWindowDefinition
  >();

  public openWindow(
    definition: RuntimeWindowDefinition,
  ): void {
    if (this.windows.has(definition.id)) {
      throw new Error(
        `Window already exists: ${definition.id}`,
      );
    }

    this.windows.set(definition.id, definition);
  }

  public closeWindow(windowId: string): void {
    this.windows.delete(windowId);
  }

  public getWindow(
    windowId: string,
  ): RuntimeWindowDefinition | null {
    return this.windows.get(windowId) ?? null;
  }

  public getWindows(): readonly RuntimeWindowDefinition[] {
    return Object.freeze([
      ...this.windows.values(),
    ]);
  }
}
