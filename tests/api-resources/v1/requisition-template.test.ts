// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource requisitionTemplate', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.requisitionTemplate.create({
      organizationId: 'organizationId',
      templateName: 'x',
      type: 0,
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
    const response = await client.v1.requisitionTemplate.create({
      organizationId: 'organizationId',
      templateName: 'x',
      type: 0,
      description: 'description',
      isActive: true,
      items: [
        { daysToDeliver: 1, itemId: 'x', itemTypeId: 0, qty: 0.01, description: 'description', uom: 0 },
      ],
      locations: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.requisitionTemplate.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.v1.requisitionTemplate.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      organizationId: 'organizationId',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.requisitionTemplate.update({
      organizationId: 'organizationId',
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      templateName: 'x',
      type: 0,
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
    const response = await client.v1.requisitionTemplate.update({
      organizationId: 'organizationId',
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      templateName: 'x',
      type: 0,
      description: 'description',
      isActive: true,
      items: [
        { daysToDeliver: 1, itemId: 'x', itemTypeId: 0, qty: 0.01, description: 'description', uom: 0 },
      ],
      locations: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.requisitionTemplate.list({ organizationId: 'organizationId' });
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
    const response = await client.v1.requisitionTemplate.list({
      organizationId: 'organizationId',
      isActive: true,
      locationIds: 'locationIds',
      name: 'name',
      pageNumber: 0,
      pageSize: 0,
    });
  });

  // Prism tests are disabled
  test.skip('count: only required params', async () => {
    const responsePromise = client.v1.requisitionTemplate.count({ organizationId: 'organizationId' });
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
    const response = await client.v1.requisitionTemplate.count({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('updateBulk: only required params', async () => {
    const responsePromise = client.v1.requisitionTemplate.updateBulk({
      organizationId: 'organizationId',
      ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      isActive: true,
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
  test.skip('updateBulk: required and optional params', async () => {
    const response = await client.v1.requisitionTemplate.updateBulk({
      organizationId: 'organizationId',
      ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      isActive: true,
    });
  });
});
