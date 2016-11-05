import { BaseThermocouple, PolynomialPart } from './base-thermocouple';

export class TypeRThermocouple extends BaseThermocouple {
  public name = 'r';
  public voltageRange = [-0.226, 21.101];
  protected polynomials = [
    new PolynomialPart(
      [-50, 1064.18],
      [
        0.0,
        5.28961729765e-3,
        1.39166589782e-5,
        -2.38855693017e-8,
        3.56916001063e-11,
        -4.62347666298e-14,
        5.00777441034e-17,
        -3.73105886191e-20,
        1.57716482367e-23,
        -2.81038625251e-27,
      ]
    ),
    new PolynomialPart(
      [1064.180, 1664.500],
      [
        2.95157925316,
        -2.52061251332e-3,
        1.59564501865e-5,
        -7.64085947576e-9,
        2.05305291024e-12,
        -2.93359668173e-16,
      ]
    ),
    new PolynomialPart(
      [1664.5, 1768.1],
      [
        1.52232118209e2,
        -2.68819888545e-1,
        1.71280280471e-4,
        -3.45895706453e-8,
        -9.34633971046e-15,
      ]
    )
  ];
}