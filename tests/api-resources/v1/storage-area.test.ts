// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource storageArea', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.storageArea.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.storageArea.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('retrieveStorageArea: only required params', async () => {
    const responsePromise = client.v1.storageArea.retrieveStorageArea({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStorageArea: required and optional params', async () => {
    const response = await client.v1.storageArea.retrieveStorageArea({
      organizationId: 'organizationId',
      BrandIds: ['string'],
      IsActive: true,
      LocationIds: ['string'],
      Name: 'Name',
      PageNumber: 0,
      PageSize: 0,
    });
  });

  // Prism tests are disabled
  test.skip('storageArea: only required params', async () => {
    const responsePromise = client.v1.storageArea.storageArea({
      organizationId: 'organizationId',
      name: 'x',
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
  test.skip('storageArea: required and optional params', async () => {
    const response = await client.v1.storageArea.storageArea({
      organizationId: 'organizationId',
      name: 'x',
      isActive: true,
    });
  });

  // Prism tests are disabled
  test.skip('updateStorageArea: only required params', async () => {
    const responsePromise = client.v1.storageArea.updateStorageArea({
      organizationId: 'organizationId',
      id: 'x',
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
  test.skip('updateStorageArea: required and optional params', async () => {
    const response = await client.v1.storageArea.updateStorageArea({
      organizationId: 'organizationId',
      id: 'x',
      isActive: true,
      name: 'name',
    });
  });
});
