import {Deserializable} from './deserializable.model';
import {Car} from './car.model';

export class User implements Deserializable {
  public id: number;
  public firstName: string;
  public lastName: string;
  public position: string;
  public cars: Car[];

  deserialize(input: any): this {
    // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
    Object.assign(this, input);

    // Iterate over all cars for our user and map them to a proper `Car` model
    this.cars = input.cars.map(car => new Car().deserialize(car));

    return this;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
