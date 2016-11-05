import { BaseThermocouple, PolynomialPart } from './base-thermocouple';

export class TypeKThermocouple extends BaseThermocouple {
  public name = 'k';
  public voltageRange = [-6.458, 54.886];
  protected polynomials = [
    new PolynomialPart(
      [-270, 0],
      [
        0.0,
        3.9450128025e-2,
        2.3622373598e-5,
        -3.2858906784e-7,
        -4.9904828777e-9,
        -6.7509059173e-11,
        -5.7410327428e-13,
        -3.1088872894e-15,
        -1.0451609365e-17,
        -1.9889266878e-20,
        -1.6322697486e-23
      ]
    ),
    new PolynomialPart(
      [0, 1372],
      [
        -1.7600413686e-2,
        3.8921204975e-2,
        1.8558770032e-5,
        -9.9457592874e-8,
        3.1840945719e-10,
        -5.6072844889e-13,
        5.6075059059e-16,
        -3.2020720003e-19,
        9.7151147152e-23,
        -1.2104721275e-26,
      ],
      [
        1.185976e-1,
        -1.183432e-4,
        1.269686e2
      ]
    )
  ];
}