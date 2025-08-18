// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource genericItem', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.genericItem.retrieve('itemId', { organizationId: 'organizationId' });
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
    const response = await client.v1.genericItem.retrieve('itemId', {
      organizationId: 'organizationId',
      itemLocationId: 'itemLocationId',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.genericItem.list({ organizationId: 'organizationId' });
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
    const response = await client.v1.genericItem.list({
      organizationId: 'organizationId',
      CategoryIds: ['string'],
      CountingFrequency: 'CountingFrequency',
      ItemAllocation: ['string'],
      ItemIds: ['string'],
      ItemTypes: 'ItemTypes',
      Name: 'Name',
      PageNumber: 0,
      PageSize: 0,
      PrepItemTypes: [0],
      RequisitionTemplateIds: ['string'],
      Status: 0,
      StorageAreaIds: ['string'],
      UseLocationsFilter: true,
    });
  });
});
