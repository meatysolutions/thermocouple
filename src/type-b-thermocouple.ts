import { BaseThermocouple, PolynomialPart } from './base-thermocouple';

export class TypeBThermocouple extends BaseThermocouple {
  public name = 'b';
  public voltageRange = [0, 13.820];
  protected polynomials = [
    new PolynomialPart(
      [0, 630.615],
      [
        0.0,
        -2.4650818346e-4,
        5.9040421171e-6,
        -1.3257931636e-9,
        1.5668291901e-12,
        -1.694529240e-15,
        6.2990347094e-19
      ]
    ),
    new PolynomialPart(
      [630.615, 1820],
      [
        -3.8938168621,
        2.857174747e-2,
        -8.4885104785e-5,
        1.5785280164e-7,
        -1.6835344864e-10,
        1.1109794013e-13,
        -4.4515431033e-17,
        9.8975640821e-21,
        -9.3791330289e-25,
      ]
    )
  ];
}