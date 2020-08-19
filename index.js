const jsonSchemaParser = require("json-schema-to-typescript");
const fs = require("fs");

jsonSchemaParser
  .compileFromFile("sdmx-json-structure-schema.json", {
    unreachableDefinitions: false,
  })
  .then((ts) => fs.writeFileSync("types/struc.d.ts", ts));

jsonSchemaParser
  .compileFromFile("sdmx-json-data-schema.json", {
    unreachableDefinitions: false,
  })
  .then((ts) => fs.writeFileSync("types/data.d.ts", ts));
