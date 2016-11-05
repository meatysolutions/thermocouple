import { BaseThermocouple, PolynomialPart } from './base-thermocouple';

export class TypeEThermocouple extends BaseThermocouple {
  public name = 'e';
  public voltageRange = [-9.835, 76.373];
  protected polynomials = [
    new PolynomialPart(
      [-270, 0],
      [
        0.0,
        5.8665508708e-2,
        4.5410977124e-5,
        -7.7998048686e-7,
        -2.5800160843e-8,
        -5.9452583057e-10,
        -9.3214058667e-12,
        -1.0287605534e-13,
        -8.0370123621e-16,
        -4.3979497391e-18,
        -1.6414776355e-20,
        -3.9673619516e-23,
        -5.5827328721e-26,
        -3.4657842013e-29
      ]
    ),
    new PolynomialPart(
      [0, 1000],
      [
        0.0,
        5.866550871e-2,
        4.5032275582e-5,
        2.8908407212e-8,
        -3.3056896652e-10,
        6.5024403270e-13,
        -1.9197495504e-16,
        -1.2536600497e-18,
        2.1489217569e-21,
        -1.4388041782e-24,
        3.5960899481e-28,
      ]
    )
  ];
}