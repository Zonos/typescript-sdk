# Zonos TypeScript SDK

The Zonos TypeScript SDK offers a seamless way to interact with the Zonos Graph, providing a streamlined interface for the most commonly used queries and mutations. This SDK is designed to help developers easily access and manipulate data related to international ecommerce transactions, including product catalog items, classifications, and full landed cost calculations.

## Installation

To use the Zonos TypeScript SDK in your project, install it via npm:

```bash
npm install @zonos/typescript-sdk
```

Or, if you prefer using Yarn:

```bash
yarn add @zonos/typescript-sdk
```

## Quick Start

First, import the SDK and initialize it with your Zonos API credentials:

```typescript
import { zonosClient } from '@zonos/typescript-sdk';

// Replace 'your_credential_token' with your actual Zonos API credential token
const credentialToken = 'your_credential_token';
```

<details>
<summary>

### Fetching a Catalog Item

</summary>

To fetch a catalog item, use the `catalogItem` method. This method requires a `credentialToken` and a `variables` object containing the `id` or the `productId`, and `sku` of the catalog item you want to retrieve.

#### Example:

```typescript
const variables = {
  id: 'catalog_item_7a628c98-9ded-48c8-8831-b227f919e25d',
  productId: 'test',
  sku: 'test',
};

const { json, errors } = await zonosClient.catalogItem({
  credentialToken,
  variables,
});
```

#### Zonos Graph Documentation:

For more details on the `catalogItem` query and its parameters, visit the [Query.catalogItem](https://zonos.com/developer/queries/catalogItem) documentation.

</details>

<details>
<summary>

### Classifying an item

</summary>

To classify an item, use the `classificationsCalculate` method. This method requires a `credentialToken` and a `variables` object containing the `inputs` array. Each item in the `inputs` array should have a `name` property.

#### Example:

```typescript
const variables = {
  inputs: [{ name: 'backpack' }],
};

const { json, errors } = await zonosClient.classificationsCalculate({
  credentialToken,
  variables,
});
```

#### Zonos Graph Documentation:

For more details on the `classificationsCalculate` mutation and its parameters, visit the [Mutation.classificationsCalculate](https://zonos.com/developer/mutations/classificationsCalculate) documentation.

</details>

<details>
<summary>

### Full Landed Cost

</summary>

To calculate the full landed cost of items, use the `fullLandedCost` method. This method requires a `credentialToken` and a `variables` object containing the `itemCreateWorkflowInput` array, the `landedCostCalculateWorkflowInput` object, and the `partyCreateWorkflowInput` array.

#### Example:

```typescript
const variables = {
  itemCreateWorkflowInput: [
    {
      amount: 20,
      countryOfOrigin: 'CN',
      currencyCode: 'USD',
      description: 'Backpack',
      hsCode: '4202.92',
      productId: 'e89861c0-f04e-11ee-bc4f-4b0822420556',
      quantity: 1,
    },
    {
      amount: 1,
      countryOfOrigin: 'CN',
      currencyCode: 'USD',
      description: 'Fancy pen',
      hsCode: '4202.92',
      productId: 'g12345d1-f04e-11ee-bc4f-8c1393819393',
      quantity: 4,
    },
  ],
  landedCostCalculateWorkflowInput: {
    calculationMethod: 'DDP',
    endUse: 'NOT_FOR_RESALE',
    tariffRate: 'ZONOS_PREFERRED',
  },
  partyCreateWorkflowInput: [
    {
      location: {
        administrativeArea: '',
        administrativeAreaCode: 'QC',
        countryCode: 'CA',
        line1: '4398 St Laurent av',
        line2: ' ',
        locality: 'Montreal',
        postalCode: 'H2W 1Z5',
      },
      type: 'ORIGIN',
    },
    {
      location: {
        administrativeArea: '',
        administrativeAreaCode: '',
        countryCode: 'GB',
        line1: 'location line 1',
        locality: '',
        postalCode: 'SW1W 0NY',
      },
      type: 'DESTINATION',
    },
  ],
};

const { errors, json } = await zonosClient.fullLandedCost({
  credentialToken,
  variables,
});
```

#### Zonos Graph Documentation:

For more details on the `itemCreateWorkflowInput`, visit the [Input.ItemCreateWorkflowInput](https://zonos.com/developer/types/ItemCreateWorkflowInput) documentation.

For more details on the `landedCostCalculateWorkflowInput`, visit the [Input.LandedCostCalculateWorkflowInput](https://zonos.com/developer/types/LandedCostWorkFlowInput) documentation.

For more details on the `partyCreateWorkflowInput`, visit the [Input.PartyCreateWorkflowInput](https://zonos.com/developer/types/PartyCreateWorkflowInput) documentation.

</details>

## API Reference

For a detailed API reference, including the full list of queries and mutations available, as well as their corresponding input parameters and return types, please refer to the TypeScript type definitions included in the SDK.

## License

The Zonos TypeScript SDK is licensed under the MIT License. See the LICENSE file for more details.
