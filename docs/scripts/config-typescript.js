System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  },
  paths: {
    "thermocouple": "https://unpkg.com/thermocouple/lib/index"
  },
  map: {
    typescript: 'https://cdnjs.cloudflare.com/ajax/libs/typescript/1.9.0/typescript.min.js'
  },
  packages: {
    "src": {
      defaultJSExtensions: true,
      defaultExtension: "ts"
    },
    "thermocouple": {
      defaultJSExtensions: true,
      defaultExtension: "ts"
    }
  }
});