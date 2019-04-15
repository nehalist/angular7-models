import {Deserializable} from './deserializable.model';

export class Car implements Deserializable {
  public brand: 'BMW' | 'Audi' | 'Lamborghini' | 'Mercedes';
  public model: string;
  public kW: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

  getHp() {
    return this.kW * 1.36;
  }
}
