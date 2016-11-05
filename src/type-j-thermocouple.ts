import { BaseThermocouple, PolynomialPart } from './base-thermocouple';

export class TypeJThermocouple extends BaseThermocouple {
  public name = 'j';
  public voltageRange = [-8.095, 69.553];
  protected polynomials = [
    new PolynomialPart(
      [-210, 760],
      [
        0.0,
        5.0381187815e-2,
        3.047583693e-5,
        -8.568106572e-8,
        1.3228195295e-10,
        -1.7052958337e-13,
        2.0948090697e-16,
        -1.2538395336e-19,
        1.5631725697e-23,
      ]
    ),
    new PolynomialPart(
      [760, 1200],
      [
        2.9645625681e2,
        -1.4976127786,
        3.1787103924e-3,
        -3.1847686701e-6,
        1.5720819004e-9,
        -3.0691369056e-13,
      ]
    )
  ];
}