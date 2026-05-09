import {
  RuntimeErrorDefinition,
} from './runtime-error.types';

export class ErrorService {
  private readonly errors: RuntimeErrorDefinition[] = [];

  public capture(
    error: RuntimeErrorDefinition,
  ): void {
    this.errors.push(error);

    console.error(error);
  }

  public getErrors(): readonly RuntimeErrorDefinition[] {
    return Object.freeze([...this.errors]);
  }
}
