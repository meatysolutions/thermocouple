import { observable } from 'aurelia-framework';
import Thermocouple from 'thermocouple';
import {
  BaseThermocouple,
  TypeBThermocouple, TypeEThermocouple, TypeJThermocouple, TypeKThermocouple,
  TypeNThermocouple, TypeRThermocouple, TypeSThermocouple, TypeTThermocouple
} from 'thermocouple';

export class App {
  public thermocouples: BaseThermocouple[] = [
    new TypeBThermocouple(),
    new TypeEThermocouple(),
    new TypeJThermocouple(),
    new TypeKThermocouple(),
    new TypeNThermocouple(),
    new TypeRThermocouple(),
    new TypeSThermocouple(),
    new TypeTThermocouple()
  ];

  public selectedTc: BaseThermocouple = null;
  @observable public inputVoltage: number = null;
  public outputTemp: number = null;

  @observable public inputTemp: number = null;
  public outputVoltage: number = null;

  constructor() {

  }

  inputVoltageChanged(newValue) {
    if (this.selectedTc != null) {
      this.outputTemp = this.selectedTc.millivoltsToTemp(newValue);
    }
  }

  inputTempChanged(newValue) {
    if (this.selectedTc != null) {
      this.outputVoltage = this.selectedTc.tempToMillivolts(newValue);
    }
  }
}