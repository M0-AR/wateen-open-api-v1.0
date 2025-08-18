// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactionPrefix', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.transactionPrefix.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.transactionPrefix.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('deleteTransactionPrefix: only required params', async () => {
    const responsePromise = client.v1.transactionPrefix.deleteTransactionPrefix({
      organizationId: 'organizationId',
      id: 0,
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
  test.skip('deleteTransactionPrefix: required and optional params', async () => {
    const response = await client.v1.transactionPrefix.deleteTransactionPrefix({
      organizationId: 'organizationId',
      id: 0,
    });
  });

  // Prism tests are disabled
  test.skip('retrieveTransactionPrefix: only required params', async () => {
    const responsePromise = client.v1.transactionPrefix.retrieveTransactionPrefix({
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
  test.skip('retrieveTransactionPrefix: required and optional params', async () => {
    const response = await client.v1.transactionPrefix.retrieveTransactionPrefix({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      SearchTerm: 'SearchTerm',
    });
  });

  // Prism tests are disabled
  test.skip('updateBulkUpdateTransactionPrefix: only required params', async () => {
    const responsePromise = client.v1.transactionPrefix.updateBulkUpdateTransactionPrefix({
      organizationId: 'organizationId',
      transactionPrefixes: [{ id: 0 }],
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
  test.skip('updateBulkUpdateTransactionPrefix: required and optional params', async () => {
    const response = await client.v1.transactionPrefix.updateBulkUpdateTransactionPrefix({
      organizationId: 'organizationId',
      transactionPrefixes: [
        {
          id: 0,
          initialNumber: 0,
          minimumDigits: 0,
          prefix: 'prefix',
          useBrand: true,
          useLocation: true,
          useYear: true,
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('updateTransactionPrefix: only required params', async () => {
    const responsePromise = client.v1.transactionPrefix.updateTransactionPrefix({
      organizationId: 'organizationId',
      id: 0,
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
  test.skip('updateTransactionPrefix: required and optional params', async () => {
    const response = await client.v1.transactionPrefix.updateTransactionPrefix({
      organizationId: 'organizationId',
      id: 0,
      initialNumber: 0,
      minimumDigits: 0,
      prefix: 'prefix',
      useBrand: true,
      useLocation: true,
      useYear: true,
    });
  });
});
