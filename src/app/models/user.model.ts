import {Deserializable} from './deserializable.model';
import {Car} from './car.model';

export class User implements Deserializable {
  public id: number;
  public name: string;
  public age: number;
  public gender: 'male' | 'female';
  public occupation: string;
  public cars: Car[];

  deserialize(input: any): this {
    this.cars = input.cars.map(car => new Car().deserialize(car));

    return Object.assign(this, input);
  }
}
