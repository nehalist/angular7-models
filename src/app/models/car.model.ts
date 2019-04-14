import {Deserializable} from './deserializable.model';

export class Car implements Deserializable {
  public brand: string;
  public model: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
