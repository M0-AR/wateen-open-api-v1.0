// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource categoryPrefix', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.categoryPrefix.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.categoryPrefix.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.categoryPrefix.update({ organizationId: 'organizationId', id: 0 });
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
    const response = await client.v1.categoryPrefix.update({
      organizationId: 'organizationId',
      id: 0,
      initialNumber: 0,
      isActive: true,
      minimumDigits: 0,
      override: true,
      prefix: 'prefix',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.categoryPrefix.list({
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
    const response = await client.v1.categoryPrefix.list({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      CategoryIds: 'CategoryIds',
      ClassIds: 'ClassIds',
      SearchTerm: 'SearchTerm',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.v1.categoryPrefix.delete({ organizationId: 'organizationId', id: 0 });
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
    const response = await client.v1.categoryPrefix.delete({ organizationId: 'organizationId', id: 0 });
  });

  // Prism tests are disabled
  test.skip('bulkUpdate: only required params', async () => {
    const responsePromise = client.v1.categoryPrefix.bulkUpdate({
      organizationId: 'organizationId',
      categoryPrefixes: [{ id: 0 }],
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
    const response = await client.v1.categoryPrefix.bulkUpdate({
      organizationId: 'organizationId',
      categoryPrefixes: [
        {
          id: 0,
          initialNumber: 0,
          isActive: true,
          minimumDigits: 0,
          name: 'name',
          override: true,
          prefix: 'prefix',
        },
      ],
    });
  });
});
