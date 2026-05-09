import { ComponentType } from 'react';

export interface RuntimeWidgetDefinition {
  readonly id: string;
  readonly name: string;
  readonly component: ComponentType;
}
