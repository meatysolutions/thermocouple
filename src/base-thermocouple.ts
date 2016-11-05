

export class PolynomialPart {
  constructor(public range: number[], public coeff: number[], public exp?: number[]) {
    this.range = range;
    this.coeff = coeff;
    this.exp = exp;
  }
}

export abstract class BaseThermocouple {
  public abstract name: string;
  public abstract voltageRange: number[];
  protected abstract polynomials: PolynomialPart[];

  public get tempRange(): number[] {
    return [this.polynomials[0].range[0], this.polynomials[this.polynomials.length - 1].range[1]];
  }

  public millivoltsToTemp(mVolts: number): number {
    if (mVolts < this.voltageRange[0] || mVolts > this.voltageRange[1]) {
      return NaN;
    }

    let [low, high] = this.tempRange;
    let diff = high - low;

    while (diff > 1e-7) {
      let middle = low + (diff / 2)

      if (mVolts < this.tempToMillivolts(middle)) {
        high = middle;
      } else {
        low = middle;
      }

      diff = high - low;
    }

    return low;
  }

  public tempToMillivolts(temp: number): number {
    if (temp < this.tempRange[0] || temp > this.tempRange[1]) {
      return NaN;
    }

    let output = 0;
    let range = this.getPolynomialPart(this.polynomials, temp);

    for (let i = 0; i < range.coeff.length; i++) {
      output += range.coeff[i] * Math.pow(temp, i);
    }

    // Exponential addition for Type K
    if (range.exp !== undefined) {
      temp += range.exp[0] * Math.exp(range.exp[1] * Math.pow(range.exp[2], 2));
    }

    return output;
  }

  private getPolynomialPart(polynomials: PolynomialPart[], value: number): PolynomialPart {
    for (let polynomial of polynomials) {
      if (value < polynomial.range[1]) {
        return polynomial;
      }
    }

    // we're higher than the last range so use that
    return polynomials[polynomials.length - 1];
  }
}