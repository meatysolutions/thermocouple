import { BaseThermocouple, PolynomialPart } from './base-thermocouple';

export class TypeTThermocouple extends BaseThermocouple {
  public name = 't';
  public voltageRange = [-6.258, 20.872];
  protected polynomials = [
    new PolynomialPart(
      [-270, 0],
      [
        0.0,
        3.8748106364e-2,
        4.4194434347e-5,
        1.1844323105e-7,
        2.0032973554e-8,
        9.0138019559e-10,
        2.2651156593e-11,
        3.6071154205e-13,
        3.8493939883e-15,
        2.8213521925e-17,
        1.4251594779e-19,
        4.8768662286e-22,
        1.0795539270e-24,
        1.3945027062e-27,
        7.9795153927e-31,
      ]
    ),
    new PolynomialPart(
      [0, 400],
      [
        0.0,
        3.8748106364e-2,
        3.3292227880e-5,
        2.0618243404e-7,
        -2.1882256846e-9,
        1.0996880928e-11,
        -3.0815758772e-14,
        4.5479135290e-17,
        -2.7512901673e-20,
      ]
    )
  ];
}