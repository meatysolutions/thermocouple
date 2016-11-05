import { BaseThermocouple, PolynomialPart } from './base-thermocouple';

export class TypeNThermocouple extends BaseThermocouple {
  public name = 'n';
  public voltageRange = [-4.345, 47.513];
  protected polynomials = [
    new PolynomialPart(
      [-270, 0],
      [
        0.0,
        2.6159105962e-2,
        1.0957484228e-5,
        -9.3841111554e-8,
        -4.6412039759e-11,
        -2.6303357716e-12,
        -2.2653438003e-14,
        -7.6089300791e-17,
        -9.3419667835e-20
      ]
    ),
    new PolynomialPart(
      [0, 1300],
      [
        0.0,
        2.5929394601e-2,
        1.5710141880e-5,
        4.3825627237e-8,
        -2.5261169794e-10,
        6.4311819339e-13,
        -1.0063471519e-15,
        9.9745338992e-19,
        -6.0863245607e-22,
        2.0849229339e-25,
        -3.0682196151e-29
      ]
    )
  ];
}