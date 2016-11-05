import { BaseThermocouple } from './base-thermocouple';
import { TypeBThermocouple } from './type-b-thermocouple';
import { TypeEThermocouple } from './type-e-thermocouple';
import { TypeJThermocouple } from './type-j-thermocouple';
import { TypeKThermocouple } from './type-k-thermocouple';
import { TypeNThermocouple } from './type-n-thermocouple';
import { TypeRThermocouple } from './type-r-thermocouple';
import { TypeSThermocouple } from './type-s-thermocouple';
import { TypeTThermocouple } from './type-t-thermocouple';

export class Thermocouple {
  public static thermocouples: { [tcType: string]: BaseThermocouple } = [
    new TypeBThermocouple(),
    new TypeEThermocouple(),
    new TypeJThermocouple(),
    new TypeKThermocouple(),
    new TypeNThermocouple(),
    new TypeRThermocouple(),
    new TypeSThermocouple(),
    new TypeTThermocouple(),
  ].reduce((obj, tc) => {
    obj[tc.name] = tc;
    return obj;
  }, {});

  public static millivoltsToTemp(tcType: string, mVolts: number): number {
    tcType = this.ensureType(tcType);
    return this.thermocouples[tcType].millivoltsToTemp(mVolts);
  }

  public static tempToMillivolts(tcType: string, temp: number): number {
    tcType = this.ensureType(tcType);
    return this.thermocouples[tcType].tempToMillivolts(temp);
  }

  private static ensureType(tcType: string): string {
    if (tcType.length > 1) {
      throw new Error('type should only be a single character');
    }

    tcType = tcType.toLowerCase();

    if (this.thermocouples[tcType] === undefined) {
      throw new Error(`thermocouple type ${tcType} could not be found`);
    }

    return tcType;
  }
}