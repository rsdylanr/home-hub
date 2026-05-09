import { RuntimeRegistryService } from '../core/runtime/registry/runtime-registry.service';
import { ServiceContainerService } from '../core/runtime/service-container/service-container.service';
import { LoggerService } from '../core/services/logging/logger.service';
import { EventBusService } from '../core/services/events/event-bus.service';
import { WindowManagerService } from '../core/services/windows/window-manager.service';
import { WidgetRegistryService } from '../core/services/widgets/widget-registry.service';
import { ErrorService } from '../core/services/errors/error.service';

export interface RuntimeBootstrapContext {
  readonly registry: RuntimeRegistryService;
  readonly container: ServiceContainerService;
}

export function bootstrapKitchenOS(): RuntimeBootstrapContext {
  const registry = new RuntimeRegistryService();

  const container = new ServiceContainerService();

  const loggerService = new LoggerService();

  const eventBusService = new EventBusService();

  const windowManagerService =
    new WindowManagerService();

  const widgetRegistryService =
    new WidgetRegistryService();

  const errorService = new ErrorService();

  container.register({
    id: 'logger-service',
    service: loggerService,
  });

  container.register({
    id: 'event-bus-service',
    service: eventBusService,
  });

  container.register({
    id: 'window-manager-service',
    service: windowManagerService,
  });

  container.register({
    id: 'widget-registry-service',
    service: widgetRegistryService,
  });

  container.register({
    id: 'error-service',
    service: errorService,
  });

  return {
    registry,
    container,
  };
}
