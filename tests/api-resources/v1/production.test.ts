// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource production', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.production.create({
      organizationId: 'organizationId',
      items: [{}],
      locationId: 'x',
      productionDateTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.v1.production.create({
      organizationId: 'organizationId',
      items: [
        {
          baseUnit: 0,
          batchUnit: 0,
          ingredients: [{ amount: 0, currentStock: 0, ingredientId: 'ingredientId', qty: 0 }],
          itemId: 'itemId',
          totalAmount: 0,
          totalQty: 0,
        },
      ],
      locationId: 'x',
      productionDateTime: '2019-12-27T18:11:19.117Z',
      description: 'description',
      sectionId: 'sectionId',
      status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.production.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.production.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.production.update({
      organizationId: 'organizationId',
      id: 'x',
      items: [{}],
      locationId: 'x',
      productionDateTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.v1.production.update({
      organizationId: 'organizationId',
      id: 'x',
      items: [
        {
          baseUnit: 0,
          batchUnit: 0,
          ingredients: [{ amount: 0, currentStock: 0, ingredientId: 'ingredientId', qty: 0 }],
          itemId: 'itemId',
          totalAmount: 0,
          totalQty: 0,
        },
      ],
      locationId: 'x',
      productionDateTime: '2019-12-27T18:11:19.117Z',
      description: 'description',
      sectionId: 'sectionId',
      status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.production.list({ organizationId: 'organizationId' });
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
    const response = await client.v1.production.list({
      organizationId: 'organizationId',
      BrandId: 'BrandId',
      Code: 'Code',
      FromDate: 'FromDate',
      LocationId: 'LocationId',
      PageNumber: 0,
      PageSize: 0,
      StatusIds: ['string'],
      ToDate: 'ToDate',
    });
  });

  // Prism tests are disabled
  test.skip('approve: only required params', async () => {
    const responsePromise = client.v1.production.approve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.production.approve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('bulkUpdate: only required params', async () => {
    const responsePromise = client.v1.production.bulkUpdate({ organizationId: 'organizationId' });
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
    const response = await client.v1.production.bulkUpdate({
      organizationId: 'organizationId',
      ids: ['string'],
      status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('changeToEditPost: only required params', async () => {
    const responsePromise = client.v1.production.changeToEditPost('id', { organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('changeToEditPost: required and optional params', async () => {
    const response = await client.v1.production.changeToEditPost('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('count: only required params', async () => {
    const responsePromise = client.v1.production.count({ organizationId: 'organizationId' });
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
    const response = await client.v1.production.count({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('lockUnlock: only required params', async () => {
    const responsePromise = client.v1.production.lockUnlock({ organizationId: 'organizationId' });
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
    const response = await client.v1.production.lockUnlock({
      organizationId: 'organizationId',
      ids: ['string'],
      lock: true,
    });
  });

  // Prism tests are disabled
  test.skip('reject: only required params', async () => {
    const responsePromise = client.v1.production.reject('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.production.reject('id', {
      organizationId: 'organizationId',
      reasonForRejection: 'reasonForRejection',
    });
  });

  // Prism tests are disabled
  test.skip('submitForApproval: only required params', async () => {
    const responsePromise = client.v1.production.submitForApproval('id', {
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
  test.skip('submitForApproval: required and optional params', async () => {
    const response = await client.v1.production.submitForApproval('id', { organizationId: 'organizationId' });
  });
});
