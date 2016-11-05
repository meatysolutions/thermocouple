# Thermocouple  Voltage Conversion

This library converts between voltage and temperature and vice versa for the 8 most common thermocouple types.

```javascript
import Thermocouple from 'thermocouple';

let tempC = Thermocouple.millivoltsToTemp('e', 68.787);
let mVolts = Thermocouple.tempToMillivolts('k', 983.45);
```

## millivoltsToTemp
```typescript
static millivoltsToTemp(tcType: string, mVolts: number): number
```

Argument | Type   | Description
-------- | ------ | -------------
tcType   | string | Thermocouple type. Valid types: `'b'|'e'|'j'|'k'|'n'|'r'|'s'|'t'`
mVolts   | number | Voltage value in millivolts. Valid range depends on thermocouple type
returns  | number | Temperature in °C. Returns `NaN` if input is outside thermocouple range

## tempToMillivolts
```typescript
static tempToMillivolts(tcType: string, temp: number): number
```

Argument | Type   | Description
-------- | ------ | -------------
tcType   | string | Thermocouple type. Valid types: `'b'|'e'|'j'|'k'|'n'|'r'|'s'|'t'`
temp     | number | Temperature value in °C. valid range depends on thermocouple type
returns  | number | Voltage in millivolts. Returns `NaN` if input is outside thermocouple range

## Thermocouple specific classes

In addition, there are thermocouple specific classes which have similar methods plus access to the valid input ranges.

```javascript
import { TypeKThermocouple } from 'thermocouple';

let typeK = new TypeKThermocouple();

let tempC = typeK.millivoltsToTemp(28.484);   // 684.62...
let mVolts = typeK.tempToMillivolts(983.45);  // 40.629...

let [minV, maxV] = typeK.voltageRange;        // [-6.458, 54.886]
let [minT, maxT] = typeK.tempRange;           // [-270, 1372]
let name = typek.name                         // 'k'

```

## To build this library

```bash
> npm install && npm run build
```

## To run the tests

```bash
> npm install && npm test
```