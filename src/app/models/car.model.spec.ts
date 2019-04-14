import { CarModel } from './car.model';

describe('Car', () => {
  it('should create an instance', () => {
    expect(new CarModel()).toBeTruthy();
  });
});
