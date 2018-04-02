export class ApiEntity {

  id: number;

  constructor(data: Record<string, any>) {
    Object.assign(this, data);
  }

}
