// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transferOut', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.transfer.transferOut.retrieve('id', {
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
    const response = await client.v1.transfer.transferOut.retrieve('id', {
      organizationId: 'organizationId',
    });
  });

  // Prism tests are disabled
  test.skip('approve: only required params', async () => {
    const responsePromise = client.v1.transfer.transferOut.approve('id', {
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
  test.skip('approve: required and optional params', async () => {
    const response = await client.v1.transfer.transferOut.approve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('finalize: only required params', async () => {
    const responsePromise = client.v1.transfer.transferOut.finalize('id', {
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
  test.skip('finalize: required and optional params', async () => {
    const response = await client.v1.transfer.transferOut.finalize('id', {
      organizationId: 'organizationId',
    });
  });

  // Prism tests are disabled
  test.skip('fulfill: only required params', async () => {
    const responsePromise = client.v1.transfer.transferOut.fulfill({
      organizationId: 'organizationId',
      id: 'x',
      fulfillmentDate: '2019-12-27T18:11:19.117Z',
      transferItems: [{ id: 'x', itemQuantities: [{ quantity: 0, unitOfMeasureQuantityId: 'x' }] }],
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
  test.skip('fulfill: required and optional params', async () => {
    const response = await client.v1.transfer.transferOut.fulfill({
      organizationId: 'organizationId',
      id: 'x',
      fulfillmentDate: '2019-12-27T18:11:19.117Z',
      transferItems: [{ id: 'x', itemQuantities: [{ quantity: 0, unitOfMeasureQuantityId: 'x' }] }],
      sourceNote: 'sourceNote',
    });
  });

  // Prism tests are disabled
  test.skip('reject: only required params', async () => {
    const responsePromise = client.v1.transfer.transferOut.reject('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.transfer.transferOut.reject('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('retrieveCount: only required params', async () => {
    const responsePromise = client.v1.transfer.transferOut.retrieveCount({
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
  test.skip('retrieveCount: required and optional params', async () => {
    const response = await client.v1.transfer.transferOut.retrieveCount({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('retrieveTransferOut: only required params', async () => {
    const responsePromise = client.v1.transfer.transferOut.retrieveTransferOut({
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
  test.skip('retrieveTransferOut: required and optional params', async () => {
    const response = await client.v1.transfer.transferOut.retrieveTransferOut({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      Date: { End: '2019-12-27T18:11:19.117Z', Start: '2019-12-27T18:11:19.117Z' },
      LocationId: 'LocationId',
      SearchTerm: 'SearchTerm',
      Status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.v1.transfer.transferOut.submit('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.transfer.transferOut.submit('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('transferOut: only required params', async () => {
    const responsePromise = client.v1.transfer.transferOut.transferOut({
      organizationId: 'organizationId',
      destinationLocationId: 'x',
      fulfillmentDate: '2019-12-27T18:11:19.117Z',
      sourceLocationId: 'x',
      transferItems: [
        { id: 'x', unitOfMeasureType: { id: 0, unitOfMeasureQuantities: [{ id: 0, quantity: 0 }] } },
      ],
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
  test.skip('transferOut: required and optional params', async () => {
    const response = await client.v1.transfer.transferOut.transferOut({
      organizationId: 'organizationId',
      destinationLocationId: 'x',
      fulfillmentDate: '2019-12-27T18:11:19.117Z',
      sourceLocationId: 'x',
      transferItems: [
        { id: 'x', unitOfMeasureType: { id: 0, unitOfMeasureQuantities: [{ id: 0, quantity: 0 }] } },
      ],
      sourceNote: 'sourceNote',
    });
  });

  // Prism tests are disabled
  test.skip('updateTransferOut: only required params', async () => {
    const responsePromise = client.v1.transfer.transferOut.updateTransferOut({
      organizationId: 'organizationId',
      id: 'x',
      destinationLocationId: 'x',
      fulfillmentDate: '2019-12-27T18:11:19.117Z',
      sourceLocationId: 'x',
      transferItems: [
        { id: 'x', unitOfMeasureType: { id: 0, unitOfMeasureQuantities: [{ id: 0, quantity: 0 }] } },
      ],
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
  test.skip('updateTransferOut: required and optional params', async () => {
    const response = await client.v1.transfer.transferOut.updateTransferOut({
      organizationId: 'organizationId',
      id: 'x',
      destinationLocationId: 'x',
      fulfillmentDate: '2019-12-27T18:11:19.117Z',
      sourceLocationId: 'x',
      transferItems: [
        { id: 'x', unitOfMeasureType: { id: 0, unitOfMeasureQuantities: [{ id: 0, quantity: 0 }] } },
      ],
      sourceNote: 'sourceNote',
    });
  });
});
