import { RuntimeWidgetDefinition } from './widget.types';

export class WidgetRegistryService {
  private readonly widgets = new Map<
    string,
    RuntimeWidgetDefinition
  >();

  public registerWidget(
    widget: RuntimeWidgetDefinition,
  ): void {
    if (this.widgets.has(widget.id)) {
      throw new Error(
        `Widget already registered: ${widget.id}`,
      );
    }

    this.widgets.set(widget.id, widget);
  }

  public getWidget(
    widgetId: string,
  ): RuntimeWidgetDefinition | null {
    return this.widgets.get(widgetId) ?? null;
  }

  public getWidgets(): readonly RuntimeWidgetDefinition[] {
    return Object.freeze([
      ...this.widgets.values(),
    ]);
  }
}
