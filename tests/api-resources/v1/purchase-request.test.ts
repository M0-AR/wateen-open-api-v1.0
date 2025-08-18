// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource purchaseRequest', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.purchaseRequest.create({
      deliveryDate: 'x',
      locationId: 'x',
      organizationId: 'x',
      requestDate: 'x',
      sectionId: 'x',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.purchaseRequest.create({
      deliveryDate: 'x',
      locationId: 'x',
      organizationId: 'x',
      requestDate: 'x',
      sectionId: 'x',
      status: 0,
      description: 'description',
      items: [
        { deliveryDate: 'x', itemId: 'x', qty: 0, type: 0, unitOfMeasureId: 0, description: 'description' },
      ],
      templateId: 'templateId',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.purchaseRequest.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.purchaseRequest.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.purchaseRequest.update({ id: 'x', organizationId: 'x' });
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
    const response = await client.v1.purchaseRequest.update({
      id: 'x',
      organizationId: 'x',
      deliveryDate: 'deliveryDate',
      description: 'description',
      items: [
        {
          deliveryDate: 'deliveryDate',
          description: 'description',
          itemId: 'itemId',
          qty: 0,
          type: 0,
          unitOfMeasureId: 0,
        },
      ],
      locationId: 'locationId',
      requestDate: 'requestDate',
      sectionId: 'sectionId',
      status: 'status',
      templateId: 'templateId',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.purchaseRequest.list({ organizationId: 'organizationId' });
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
    const response = await client.v1.purchaseRequest.list({
      organizationId: 'organizationId',
      fromDate: 'fromDate',
      locationIds: 'locationIds',
      pageNumber: 0,
      pageSize: 0,
      searchTerm: 'searchTerm',
      statusIds: 'statusIds',
      toDate: 'toDate',
    });
  });

  // Prism tests are disabled
  test.skip('approve: only required params', async () => {
    const responsePromise = client.v1.purchaseRequest.approve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.purchaseRequest.approve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('bulkUpdate: only required params', async () => {
    const responsePromise = client.v1.purchaseRequest.bulkUpdate({
      ids: ['string'],
      organizationId: 'x',
      status: 'x',
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
    const response = await client.v1.purchaseRequest.bulkUpdate({
      ids: ['string'],
      organizationId: 'x',
      status: 'x',
    });
  });

  // Prism tests are disabled
  test.skip('count: only required params', async () => {
    const responsePromise = client.v1.purchaseRequest.count({ organizationId: 'organizationId' });
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
    const response = await client.v1.purchaseRequest.count({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('reject: only required params', async () => {
    const responsePromise = client.v1.purchaseRequest.reject('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.purchaseRequest.reject('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.v1.purchaseRequest.submit('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.purchaseRequest.submit('id', { organizationId: 'organizationId' });
  });
});
