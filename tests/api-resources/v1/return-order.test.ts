// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource returnOrder', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.returnOrder.create({
      organizationId: 'organizationId',
      items: [
        {
          itemId: 'x',
          price: 0,
          quantityOrdered: 0,
          quantityReceived: 0,
          returnQuantity: 0,
          taxId: 0,
          totalAmount: 0,
          totalCost: 0,
          totalLineAmount: 0,
          unitCost: 0,
          uomId: 0,
        },
      ],
      locationId: 'x',
      originalTotalAmount: 0,
      returnDate: 'x',
      status: 0,
      supplierId: 'x',
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
    const response = await client.v1.returnOrder.create({
      organizationId: 'organizationId',
      items: [
        {
          itemId: 'x',
          price: 0,
          quantityOrdered: 0,
          quantityReceived: 0,
          returnQuantity: 0,
          taxId: 0,
          totalAmount: 0,
          totalCost: 0,
          totalLineAmount: 0,
          unitCost: 0,
          uomId: 0,
          description: 'description',
          discount: 0,
          itemCondition: 'itemCondition',
          landedCost: 0,
          purchaseOrderItemId: 'purchaseOrderItemId',
          purchaseOrderReceivingItemId: 'purchaseOrderReceivingItemId',
          referenceNumber: 'referenceNumber',
          returnReason: 'returnReason',
          taxValue: 0,
        },
      ],
      locationId: 'x',
      originalTotalAmount: 0,
      returnDate: 'x',
      status: 0,
      supplierId: 'x',
      description: 'description',
      invoiceNumber: 'invoiceNumber',
      orderDate: 'orderDate',
      purchaseOrderId: 'purchaseOrderId',
      purchaseOrderNumber: 'purchaseOrderNumber',
      purchaseOrderReceivingId: 'purchaseOrderReceivingId',
      receivingDate: 'receivingDate',
      returnReason: 'returnReason',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.returnOrder.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.returnOrder.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.returnOrder.update({
      organizationId: 'organizationId',
      id: 'x',
      items: [
        {
          itemId: 'x',
          price: 0,
          quantityOrdered: 0,
          quantityReceived: 0,
          returnQuantity: 0,
          taxId: 0,
          totalAmount: 0,
          totalCost: 0,
          totalLineAmount: 0,
          unitCost: 0,
          uomId: 0,
        },
      ],
      locationId: 'x',
      originalTotalAmount: 0,
      returnDate: 'x',
      status: 0,
      supplierId: 'x',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.v1.returnOrder.update({
      organizationId: 'organizationId',
      id: 'x',
      items: [
        {
          itemId: 'x',
          price: 0,
          quantityOrdered: 0,
          quantityReceived: 0,
          returnQuantity: 0,
          taxId: 0,
          totalAmount: 0,
          totalCost: 0,
          totalLineAmount: 0,
          unitCost: 0,
          uomId: 0,
          id: 'id',
          description: 'description',
          discount: 0,
          itemCondition: 'itemCondition',
          landedCost: 0,
          purchaseOrderItemId: 'purchaseOrderItemId',
          purchaseOrderReceivingItemId: 'purchaseOrderReceivingItemId',
          referenceNumber: 'referenceNumber',
          returnReason: 'returnReason',
          taxValue: 0,
        },
      ],
      locationId: 'x',
      originalTotalAmount: 0,
      returnDate: 'x',
      status: 0,
      supplierId: 'x',
      description: 'description',
      invoiceNumber: 'invoiceNumber',
      orderDate: 'orderDate',
      purchaseOrderId: 'purchaseOrderId',
      purchaseOrderNumber: 'purchaseOrderNumber',
      purchaseOrderReceivingId: 'purchaseOrderReceivingId',
      receivingDate: 'receivingDate',
      returnReason: 'returnReason',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.returnOrder.list({
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
    const response = await client.v1.returnOrder.list({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      DateRange: ['string'],
      PurchaseOrderId: 'PurchaseOrderId',
      ReturnNumber: 'ReturnNumber',
      Status: 'Status',
      SupplierId: 'SupplierId',
    });
  });

  // Prism tests are disabled
  test.skip('approve: only required params', async () => {
    const responsePromise = client.v1.returnOrder.approve('id', { organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('approve: required and optional params', async () => {
    const response = await client.v1.returnOrder.approve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('count: only required params', async () => {
    const responsePromise = client.v1.returnOrder.count({ organizationId: 'organizationId' });
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
    const response = await client.v1.returnOrder.count({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('eligibleItems: only required params', async () => {
    const responsePromise = client.v1.returnOrder.eligibleItems({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('eligibleItems: required and optional params', async () => {
    const response = await client.v1.returnOrder.eligibleItems({
      organizationId: 'organizationId',
      LocationId: 'LocationId',
      PurchaseOrderId: 'PurchaseOrderId',
      SupplierId: 'SupplierId',
    });
  });

  // Prism tests are disabled
  test.skip('itemsDetail: only required params', async () => {
    const responsePromise = client.v1.returnOrder.itemsDetail('returnOrderId', {
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
  test.skip('itemsDetail: required and optional params', async () => {
    const response = await client.v1.returnOrder.itemsDetail('returnOrderId', {
      organizationId: 'organizationId',
      CategoryId: 'CategoryId',
      ItemTypeId: 'ItemTypeId',
      SearchTerm: 'SearchTerm',
    });
  });

  // Prism tests are disabled
  test.skip('lockUnlock: only required params', async () => {
    const responsePromise = client.v1.returnOrder.lockUnlock({
      organizationId: 'organizationId',
      id: 'x',
      isLocked: true,
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
  test.skip('lockUnlock: required and optional params', async () => {
    const response = await client.v1.returnOrder.lockUnlock({
      organizationId: 'organizationId',
      id: 'x',
      isLocked: true,
    });
  });

  // Prism tests are disabled
  test.skip('reject: only required params', async () => {
    const responsePromise = client.v1.returnOrder.reject('id', { organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('reject: required and optional params', async () => {
    const response = await client.v1.returnOrder.reject('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.v1.returnOrder.submit('id', { organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submit: required and optional params', async () => {
    const response = await client.v1.returnOrder.submit('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.v1.returnOrder.updateStatus({
      organizationId: 'organizationId',
      id: 'x',
      status: 0,
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
  test.skip('updateStatus: required and optional params', async () => {
    const response = await client.v1.returnOrder.updateStatus({
      organizationId: 'organizationId',
      id: 'x',
      status: 0,
    });
  });
});
