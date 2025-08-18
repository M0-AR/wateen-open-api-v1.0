// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0, { toFile } from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource marketPlaceApp', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.marketPlaceApp.create({ Name: 'Name' });
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
    const response = await client.v1.marketPlaceApp.create({
      Name: 'Name',
      Category: 'Category',
      Description: 'Description',
      Icon: await toFile(Buffer.from('# my file contents'), 'README.md'),
      ManagedBy: 0,
      Price: 0,
      PriceType: 0,
      Provider: 0,
      Status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.marketPlaceApp.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.marketPlaceApp.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.marketPlaceApp.update({ Id: 'Id' });
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
    const response = await client.v1.marketPlaceApp.update({
      Id: 'Id',
      Category: 'Category',
      Description: 'Description',
      Icon: await toFile(Buffer.from('# my file contents'), 'README.md'),
      ManagedBy: 0,
      Name: 'Name',
      Price: 0,
      PriceType: 0,
      Provider: 0,
      Status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.v1.marketPlaceApp.delete('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.marketPlaceApp.delete('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('install: only required params', async () => {
    const responsePromise = client.v1.marketPlaceApp.install({ marketPlaceAppId: 'x', organizationId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('install: required and optional params', async () => {
    const response = await client.v1.marketPlaceApp.install({
      marketPlaceAppId: 'x',
      organizationId: 'x',
      createdBy: 'createdBy',
      createdDate: 'createdDate',
      locationMappings: [
        { locationId: 'locationId', revelPosLocationId: 'revelPosLocationId', time: 'time' },
      ],
      modifiedBy: 'modifiedBy',
      modifiedDate: 'modifiedDate',
      status: 'status',
      systemConnection: { apiKey: 'apiKey', menuSync: true, salesSync: true, secretKey: 'secretKey' },
      taxMappings: [{ taxName: 'taxName', taxRatePercentage: 0 }],
    });
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.v1.marketPlaceApp.search({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.v1.marketPlaceApp.search({
      organizationId: 'organizationId',
      categoryIds: ['string'],
      managedBy: [0],
      pageNumber: 0,
      pageSize: 0,
      priceTypes: [0],
      provider: [0],
      searchTerm: 'searchTerm',
      status: [0],
    });
  });

  // Prism tests are disabled
  test.skip('uninstall: only required params', async () => {
    const responsePromise = client.v1.marketPlaceApp.uninstall({
      marketPlaceAppId: 'x',
      organizationId: 'x',
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
  test.skip('uninstall: required and optional params', async () => {
    const response = await client.v1.marketPlaceApp.uninstall({
      marketPlaceAppId: 'x',
      organizationId: 'x',
      modifiedBy: 'modifiedBy',
      modifiedDate: 'modifiedDate',
      status: 'status',
    });
  });
});
