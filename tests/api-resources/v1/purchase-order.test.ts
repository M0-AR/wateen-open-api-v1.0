// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0, { toFile } from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource purchaseOrder', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.v1.purchaseOrder.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.purchaseOrder.create(
        {
          deliveryDate: '2019-12-27T18:11:19.117Z',
          description: 'description',
          items: [
            {
              cost: 0,
              description: 'description',
              discount: 0,
              itemId: 'itemId',
              landedCost: 0,
              purchaseOptionId: 'purchaseOptionId',
              quantity: 0,
              taxId: 0,
              totalAmount: 0,
              totalCost: 0,
              totalLineAmount: 0,
              uomId: 0,
            },
          ],
          locationId: 'locationId',
          orderDate: '2019-12-27T18:11:19.117Z',
          organizationId: 'organizationId',
          status: 0,
          supplierId: 'supplierId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WateenOpenAPIV1_0.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.purchaseOrder.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.purchaseOrder.retrieve(
        'id',
        { organizationId: 'organizationId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WateenOpenAPIV1_0.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.v1.purchaseOrder.update();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.purchaseOrder.update(
        {
          id: 'id',
          deliveryDate: '2019-12-27T18:11:19.117Z',
          description: 'description',
          items: [
            {
              cost: 0,
              description: 'description',
              discount: 0,
              itemId: 'itemId',
              landedCost: 0,
              purchaseOptionId: 'purchaseOptionId',
              quantity: 0,
              taxId: 0,
              totalAmount: 0,
              totalCost: 0,
              totalLineAmount: 0,
              uomId: 0,
            },
          ],
          locationId: 'locationId',
          orderDate: '2019-12-27T18:11:19.117Z',
          organizationId: 'organizationId',
          status: 0,
          supplierId: 'supplierId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WateenOpenAPIV1_0.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.purchaseOrder.list({ PageNumber: 0, PageSize: 0 });
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
    const response = await client.v1.purchaseOrder.list({
      PageNumber: 0,
      PageSize: 0,
      BrandId: 'BrandId',
      FromDate: 'FromDate',
      LocationId: 'LocationId',
      Name: 'Name',
      OrganizationId: 'OrganizationId',
      Status: 'Status',
      ToDate: 'ToDate',
    });
  });

  // Prism tests are disabled
  test.skip('addReceiving', async () => {
    const responsePromise = client.v1.purchaseOrder.addReceiving();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addReceiving: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.purchaseOrder.addReceiving(
        {
          AmountIncTax: 0,
          Attachments: [await toFile(Buffer.from('# my file contents'), 'README.md')],
          GRNDiscountType: 'GRNDiscountType',
          GRNDiscountValue: 0,
          GRNSubTotal: 0,
          GRNTaxesSummary: [{ id: 0, value: 0 }],
          GRNTotal: 0,
          GRNTotalTax: 0,
          InvoiceNumber: 'InvoiceNumber',
          Items: [
            {
              discount: 0,
              discountAmount: 0,
              discountType: 'discountType',
              itemId: 'itemId',
              landedCost: 0,
              orderedQty: 0,
              price: 0,
              receivedQty: 0,
              remainingQty: 0,
              taxId: 0,
              taxValue: 0,
              totalAmount: 0,
              uomId: 0,
            },
          ],
          NotesAndRemarks: 'NotesAndRemarks',
          OrganizationId: 'OrganizationId',
          PurchaseOrderId: 'PurchaseOrderId',
          ReceivingDate: '2019-12-27T18:11:19.117Z',
          TotalTax: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WateenOpenAPIV1_0.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('count', async () => {
    const responsePromise = client.v1.purchaseOrder.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.purchaseOrder.count(
        { locationId: 'locationId', organizationId: 'organizationId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WateenOpenAPIV1_0.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listItems: only required params', async () => {
    const responsePromise = client.v1.purchaseOrder.listItems({ PurchaseOrderId: 'PurchaseOrderId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listItems: required and optional params', async () => {
    const response = await client.v1.purchaseOrder.listItems({
      PurchaseOrderId: 'PurchaseOrderId',
      CategoryId: 'CategoryId',
      ItemTypeId: 'ItemTypeId',
      OrganizationId: 'OrganizationId',
      SearchTerm: 'SearchTerm',
      StorageAreas: 'StorageAreas',
    });
  });

  // Prism tests are disabled
  test.skip('listReceiving: only required params', async () => {
    const responsePromise = client.v1.purchaseOrder.listReceiving({
      PurchaseOrderReceivingId: 'PurchaseOrderReceivingId',
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
  test.skip('listReceiving: required and optional params', async () => {
    const response = await client.v1.purchaseOrder.listReceiving({
      PurchaseOrderReceivingId: 'PurchaseOrderReceivingId',
      ItemName: 'ItemName',
      OrganizationId: 'OrganizationId',
    });
  });

  // Prism tests are disabled
  test.skip('updateStatus', async () => {
    const responsePromise = client.v1.purchaseOrder.updateStatus();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateStatus: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.purchaseOrder.updateStatus(
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          organizationGuid: 'organizationGuid',
          organizationId: 'organizationId',
          status: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WateenOpenAPIV1_0.NotFoundError);
  });
});
