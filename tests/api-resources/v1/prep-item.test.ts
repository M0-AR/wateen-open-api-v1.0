// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0, { toFile } from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prepItem', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.prepItem.create({
      organizationId: 'organizationId',
      CategoryId: 'CategoryId',
      Name: 'Name',
      YieldUOMId: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.prepItem.create({
      organizationId: 'organizationId',
      CategoryId: 'CategoryId',
      Name: 'Name',
      YieldUOMId: 0,
      AdditionalInfo: 'AdditionalInfo',
      Calory: 0,
      Code: 'Code',
      CookInstructions: 'CookInstructions',
      CookTime: 0,
      CostPerUnit: 0,
      CostPerYield: 0,
      CountingFrequency: [{ frequency: 0, locationId: 0, locationName: 'locationName' }],
      Image: await toFile(Buffer.from('# my file contents'), 'README.md'),
      Ingredients: [
        {
          id: 'id',
          costPerUnit: 0,
          grossQty: 0,
          itemId: 'itemId',
          itemName: 'itemName',
          netQuantity: 0,
          quantity: 0,
          totalCost: 0,
          type: 0,
          unitOfMeasureId: 0,
          unitOfMeasureName: 'unitOfMeasureName',
          wastageInPercentage: 0,
        },
      ],
      InventoryCount: ['string'],
      IsAutoCodeGeneration: true,
      ItemAllocationIds: ['string'],
      PARLevel: 0,
      PrepTime: 0,
      ProcedureFiles: [await toFile(Buffer.from('# my file contents'), 'README.md')],
      ReorderLevel: 0,
      ReportUnit: ['string'],
      Status: 0,
      StorageAreaIds: ['string'],
      Transfer: ['string'],
      Type: 0,
      Wastage: ['string'],
      YieldQty: 0,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.prepItem.retrieve('id', { organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.v1.prepItem.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.prepItem.update({ organizationId: 'organizationId', Id: 'Id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.v1.prepItem.update({
      organizationId: 'organizationId',
      Id: 'Id',
      AdditionalInfo: 'AdditionalInfo',
      Calory: 0,
      CategoryId: 'CategoryId',
      CookInstructions: 'CookInstructions',
      CookTime: 0,
      CostPerUnit: 0,
      CostPerYield: 0,
      CountingFrequency: [{ frequency: 0, locationId: 0, locationName: 'locationName' }],
      Image: await toFile(Buffer.from('# my file contents'), 'README.md'),
      Ingredients: [
        {
          id: 'id',
          costPerUnit: 0,
          grossQty: 0,
          itemId: 'itemId',
          itemName: 'itemName',
          netQuantity: 0,
          quantity: 0,
          totalCost: 0,
          type: 0,
          unitOfMeasureId: 0,
          unitOfMeasureName: 'unitOfMeasureName',
          wastageInPercentage: 0,
        },
      ],
      InventoryCount: [
        {
          baseConversionRate: 0,
          conversionRate: 0,
          unitOfMeasureId: 0,
          unitOfMeasureName: 'unitOfMeasureName',
        },
      ],
      ItemAllocationIds: ['string'],
      Name: 'Name',
      PARLevel: 0,
      PrepTime: 0,
      ProcedureFiles: [await toFile(Buffer.from('# my file contents'), 'README.md')],
      ReorderLevel: 0,
      ReportUnit: [
        {
          baseConversionRate: 0,
          conversionRate: 0,
          unitOfMeasureId: 0,
          unitOfMeasureName: 'unitOfMeasureName',
        },
      ],
      Status: 0,
      StorageAreaIds: ['string'],
      Transfer: [
        {
          baseConversionRate: 0,
          conversionRate: 0,
          unitOfMeasureId: 0,
          unitOfMeasureName: 'unitOfMeasureName',
        },
      ],
      Wastage: [
        {
          baseConversionRate: 0,
          conversionRate: 0,
          unitOfMeasureId: 0,
          unitOfMeasureName: 'unitOfMeasureName',
        },
      ],
      YieldQty: 0,
      YieldUOMId: 0,
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.prepItem.list({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.v1.prepItem.list({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      CategoryIds: 'CategoryIds',
      ItemAllocations: 'ItemAllocations',
      Name: 'Name',
      Status: 0,
      Types: 'Types',
    });
  });

  // Prism tests are disabled
  test.skip('bulkUpdate: only required params', async () => {
    const responsePromise = client.v1.prepItem.bulkUpdate({
      organizationId: 'organizationId',
      ids: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('bulkUpdate: required and optional params', async () => {
    const response = await client.v1.prepItem.bulkUpdate({
      organizationId: 'organizationId',
      ids: ['string'],
      itemAllocationIds: ['string'],
      parLevel: 0,
      reorderLevel: 0,
      status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('count: only required params', async () => {
    const responsePromise = client.v1.prepItem.count({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('count: required and optional params', async () => {
    const response = await client.v1.prepItem.count({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('getCurrentStock: only required params', async () => {
    const responsePromise = client.v1.prepItem.getCurrentStock({
      ItemId: 'ItemId',
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getCurrentStock: required and optional params', async () => {
    const response = await client.v1.prepItem.getCurrentStock({
      ItemId: 'ItemId',
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      BrandName: 'BrandName',
      LocationName: 'LocationName',
    });
  });

  // Prism tests are disabled
  test.skip('getIngredientList: only required params', async () => {
    const responsePromise = client.v1.prepItem.getIngredientList({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      PrepItemId: 'PrepItemId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getIngredientList: required and optional params', async () => {
    const response = await client.v1.prepItem.getIngredientList({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      PrepItemId: 'PrepItemId',
      LocationId: 'LocationId',
    });
  });

  // Prism tests are disabled
  test.skip('getStockChanges: only required params', async () => {
    const responsePromise = client.v1.prepItem.getStockChanges({
      ItemId: 'ItemId',
      LocationId: 'LocationId',
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getStockChanges: required and optional params', async () => {
    const response = await client.v1.prepItem.getStockChanges({
      ItemId: 'ItemId',
      LocationId: 'LocationId',
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      TransactionTypeId: 'TransactionTypeId',
      TransactionTypeName: 'TransactionTypeName',
    });
  });
});
