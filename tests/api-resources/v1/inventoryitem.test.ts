// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0, { toFile } from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inventoryitem', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.inventoryitem.create({
      organizationId: 'organizationId',
      AvgCost: 0,
      Name: 'Name',
      PARLevel: 0,
      ReorderLevel: 0,
      StartingCost: 0,
      Status: 0,
      Tolerance: 0,
      WastagePercentage: 0,
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
    const response = await client.v1.inventoryitem.create({
      organizationId: 'organizationId',
      AvgCost: 0,
      Name: 'Name',
      PARLevel: 0,
      ReorderLevel: 0,
      StartingCost: 0,
      Status: 0,
      Tolerance: 0,
      WastagePercentage: 0,
      Calory: 0,
      CategoryId: 'CategoryId',
      Code: 'Code',
      CountingFrequency: [0],
      Image: await toFile(Buffer.from('# my file contents'), 'README.md'),
      InventoryCount: ['string'],
      IsAutoCodeGeneration: true,
      ItemAllocation: ['string'],
      ParentUnitOfMeasureTypeId: 0,
      PurchaseOptions: [
        {
          id: 'id',
          currency: 0,
          enablePurchase: true,
          isActive: true,
          itemAllocationIds: ['string'],
          itemCode: 'itemCode',
          prefered: true,
          price: 0,
          productId: 'productId',
          supplierId: 'supplierId',
          supplierItem: 'supplierItem',
          taxRate: 0,
          unitOfMeasureId: 0,
          unitOfMeasureQty: 0,
        },
      ],
      ReportUnit: ['string'],
      StorageAreaIds: ['string'],
      Transfer: ['string'],
      Wastage: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.inventoryitem.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.inventoryitem.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.inventoryitem.update({ organizationId: 'organizationId', Id: 'Id' });
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
    const response = await client.v1.inventoryitem.update({
      organizationId: 'organizationId',
      Id: 'Id',
      AvgCost: 0,
      Calory: 0,
      CategoryId: 'CategoryId',
      Code: 'Code',
      CountingFrequency: [0],
      Image: await toFile(Buffer.from('# my file contents'), 'README.md'),
      InventoryCount: ['string'],
      IsAutoCodeGeneration: true,
      ItemAllocation: ['string'],
      Name: 'Name',
      ParentUnitOfMeasureTypeId: 0,
      PARLevel: 0,
      ReorderLevel: 0,
      ReportUnit: ['string'],
      StartingCost: 0,
      Status: 0,
      StorageAreaIds: ['string'],
      Tolerance: 0,
      Transfer: ['string'],
      Wastage: ['string'],
      WastagePercentage: 0,
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.inventoryitem.list({ organizationId: 'organizationId' });
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
    const response = await client.v1.inventoryitem.list({
      organizationId: 'organizationId',
      CategoryIds: ['string'],
      ItemAllocation: ['string'],
      Name: 'Name',
      PageNumber: 0,
      PageSize: 0,
      Status: 0,
      SupplierIds: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.v1.inventoryitem.delete({ organizationId: 'organizationId', id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.v1.inventoryitem.delete({ organizationId: 'organizationId', id: 'x' });
  });

  // Prism tests are disabled
  test.skip('bulkUpdate: only required params', async () => {
    const responsePromise = client.v1.inventoryitem.bulkUpdate({
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
    const response = await client.v1.inventoryitem.bulkUpdate({
      organizationId: 'organizationId',
      ids: ['string'],
      categoryId: 'categoryId',
      countingFrequency: [0],
      itemAllocationId: 0,
      parLevel: 0,
      reorderLevel: 0,
      status: 0,
      taxRate: 0,
    });
  });

  // Prism tests are disabled
  test.skip('count: only required params', async () => {
    const responsePromise = client.v1.inventoryitem.count({ organizationId: 'organizationId' });
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
    const response = await client.v1.inventoryitem.count({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('currentStock: only required params', async () => {
    const responsePromise = client.v1.inventoryitem.currentStock({
      ItemId: 'ItemId',
      organizationId: 'organizationId',
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
  test.skip('currentStock: required and optional params', async () => {
    const response = await client.v1.inventoryitem.currentStock({
      ItemId: 'ItemId',
      organizationId: 'organizationId',
      BrandName: 'BrandName',
      LocationName: 'LocationName',
      PageNumber: 0,
      PageSize: 0,
    });
  });

  // Prism tests are disabled
  test.skip('rollbackTransaction: only required params', async () => {
    const responsePromise = client.v1.inventoryitem.rollbackTransaction({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('rollbackTransaction: required and optional params', async () => {
    const response = await client.v1.inventoryitem.rollbackTransaction({
      organizationId: 'organizationId',
      itemId: 'itemId',
    });
  });

  // Prism tests are disabled
  test.skip('stockChanges: only required params', async () => {
    const responsePromise = client.v1.inventoryitem.stockChanges({
      ItemId: 'ItemId',
      LocationId: 'LocationId',
      organizationId: 'organizationId',
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
  test.skip('stockChanges: required and optional params', async () => {
    const response = await client.v1.inventoryitem.stockChanges({
      ItemId: 'ItemId',
      LocationId: 'LocationId',
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      TransactionTypeId: 'TransactionTypeId',
      TransactionTypeName: 'TransactionTypeName',
    });
  });

  // Prism tests are disabled
  test.skip('uploadImportFile: only required params', async () => {
    const responsePromise = client.v1.inventoryitem.uploadImportFile({
      organizationId: 'organizationId',
      File: await toFile(Buffer.from('# my file contents'), 'README.md'),
      ImportType: 'ImportType',
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
  test.skip('uploadImportFile: required and optional params', async () => {
    const response = await client.v1.inventoryitem.uploadImportFile({
      organizationId: 'organizationId',
      File: await toFile(Buffer.from('# my file contents'), 'README.md'),
      ImportType: 'ImportType',
    });
  });
});
