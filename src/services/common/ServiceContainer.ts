import { BaseService } from "../common";

export class ServiceContainer {
  private static instances: Record<string, BaseService> = {};

  public static get(db: string) {
    if (!this.instances[db]) {
      throw new Error(`Instance ${db} not found`);
    }
    return this.instances[db];
  }

  public static inject<S extends BaseService>(service: S) {
    this.instances[service.name] = service;
  }
}
