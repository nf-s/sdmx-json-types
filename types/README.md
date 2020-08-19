# SDMX-JSON Type definitions

### Step 1: Download schema

From https://github.com/sdmx-twg/sdmx-json

- [structure-json](https://github.com/sdmx-twg/sdmx-json/blob/structure-message-release/structure-message/tools/schemas/1.0/sdmx-json-structure-schema.json) (note: structure-schema hasn't been pushed to their master branch yet)

- [data-json](https://github.com/sdmx-twg/sdmx-json/blob/master/data-message/tools/schemas/1.0/sdmx-json-data-schema.json)

### Step 2: Remove resource types which upset `json-schema-to-typescript` package.

These are the **working** structure data types:

- `dataStructures`, `conceptSchemes`, `codelists`, `agencySchemes`, `dataProviderSchemes`, `dataConsumerSchemes`, `organisationUnitSchemes`, `dataflows`, `metadataflows`, `provisionAgreements`, `structureSets`, `categorisations`, `attachmentConstraints`, `contentConstraints`

### Step 3: Run - `node index.js`
