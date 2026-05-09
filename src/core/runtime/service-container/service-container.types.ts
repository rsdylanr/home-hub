export interface ServiceContainerRegistration<TService> {
  readonly id: string;
  readonly service: TService;
}
