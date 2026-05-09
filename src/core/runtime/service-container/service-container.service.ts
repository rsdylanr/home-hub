import {
  ServiceContainerRegistration,
} from './service-container.types';

export class ServiceContainerService {
  private readonly services = new Map<
    string,
    unknown
  >();

  public register<TService>(
    registration: ServiceContainerRegistration<TService>,
  ): void {
    if (this.services.has(registration.id)) {
      throw new Error(
        `Service already registered: ${registration.id}`,
      );
    }

    this.services.set(
      registration.id,
      registration.service,
    );
  }

  public resolve<TService>(
    id: string,
  ): TService {
    const service = this.services.get(id);

    if (!service) {
      throw new Error(
        `Service not found: ${id}`,
      );
    }

    return service as TService;
  }
}
