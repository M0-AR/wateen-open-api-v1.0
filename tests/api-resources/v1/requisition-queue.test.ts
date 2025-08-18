// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource requisitionQueue', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.requisitionQueue.create({ organizationId: 'x', poDataList: [{}] });
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
    const response = await client.v1.requisitionQueue.create({
      organizationId: 'x',
      poDataList: [
        {
          deliveryDate: 'deliveryDate',
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
              rejectReason: 'rejectReason',
              requisitionQueueAction: 0,
              taxId: 0,
              totalAmount: 0,
              totalCost: 0,
              totalLineAmount: 0,
              uomId: 0,
            },
          ],
          locationId: 'locationId',
          orderDate: 'orderDate',
          purchaseRequestId: 'purchaseRequestId',
          status: 0,
          supplierId: 'supplierId',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.requisitionQueue.list({
      OrganizationId: 'OrganizationId',
      PageNumber: 1,
      PageSize: 1,
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
    const response = await client.v1.requisitionQueue.list({
      OrganizationId: 'OrganizationId',
      PageNumber: 1,
      PageSize: 1,
      FromDate: 'FromDate',
      ItemName: 'ItemName',
      ItemType: 'ItemType',
      LocationId: 'LocationId',
      PurchaseRequestIds: 'PurchaseRequestIds',
      ToDate: 'ToDate',
    });
  });
});
