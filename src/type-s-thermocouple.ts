import { BaseThermocouple, PolynomialPart } from './base-thermocouple';

export class TypeSThermocouple extends BaseThermocouple {
  public name = 's';
  public voltageRange = [-0.236, 18.693];
  protected polynomials = [
    new PolynomialPart(
      [-50, 1064.18],
      [
        0.0,
        5.40313308631e-3,
        1.25934289740e-5,
        -2.32477968689e-8,
        3.22028823036e-11,
        -3.31465196389e-14,
        2.55744251786e-17,
        -1.25068871393e-20,
        2.71443176145e-24,
      ]
    ),
    new PolynomialPart(
      [1064.180, 1664.500],
      [
        1.32900444085,
        3.34509311344e-3,
        6.54805192818e-6,
        -1.64856259209e-9,
        1.29989605174e-14,
      ]
    ),
    new PolynomialPart(
      [1664.5, 1768.1],
      [
        1.46628232636e2,
        -2.58430516752e-1,
        1.63693574641e-4,
        -3.30439046987e-8,
        -9.43223690612e-15,
      ]
    )
  ];
}