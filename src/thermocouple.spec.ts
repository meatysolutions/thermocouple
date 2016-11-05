import { Thermocouple } from './thermocouple';

describe("thermocouple", () => {
  it("should return NaN when out of range low", () => {
    expect(Thermocouple.millivoltsToTemp('k', -30)).toEqual(NaN);
  });

  it("should return NaN when out of range high", () => {
    expect(Thermocouple.millivoltsToTemp('k', 200)).toEqual(NaN);
  });

  it("should work with type name in capitals", () => {
    expect(Thermocouple.millivoltsToTemp('K', -6.262)).toBeCloseTo(-230, 1);
  });

  it("should throw for unknown thermocouple", () => {
    expect(() => Thermocouple.millivoltsToTemp('g', -6.262)).toThrowError();
  });

  it("should throw for type longer than 1 character", () => {
    expect(() => Thermocouple.millivoltsToTemp('kk', -6.262)).toThrowError();
  });

  it('983.45 degC on type K should be 40.629mV', () => {
    expect(Thermocouple.tempToMillivolts('k', 983.45)).toBeCloseTo(40.629, 1);
  });

  it('13.591mV from type B should be 1800 degrees', () => {
    expect(Thermocouple.millivoltsToTemp('b', 13.591)).toBeCloseTo(1800, 1);
  });

  it('-8.825mV from E-type should be -200 degrees', () => {
    expect(Thermocouple.millivoltsToTemp('e', -8.825)).toBeCloseTo(-200, 1);
  });

  it('68.787mV from E-type should be 900 degrees', () => {
    expect(Thermocouple.millivoltsToTemp('e', 68.787)).toBeCloseTo(900, 1);
  });

  it('0mV from J-type should be 0 degrees', () => {
    expect(Thermocouple.millivoltsToTemp('j', 0)).toBeCloseTo(0, 2);
  });

  it('-7.402mV from J-type should be -180 degrees', () => {
    expect(Thermocouple.millivoltsToTemp('j', -7.402)).toBeCloseTo(-180, 1);
  });
});