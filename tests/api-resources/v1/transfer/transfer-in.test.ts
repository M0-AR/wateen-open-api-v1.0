// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transferIn', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.transfer.transferIn.retrieve('id', {
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
    const response = await client.v1.transfer.transferIn.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('approve: only required params', async () => {
    const responsePromise = client.v1.transfer.transferIn.approve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.transfer.transferIn.approve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('finalize: only required params', async () => {
    const responsePromise = client.v1.transfer.transferIn.finalize('id', {
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
    const response = await client.v1.transfer.transferIn.finalize('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('receive: only required params', async () => {
    const responsePromise = client.v1.transfer.transferIn.receive({
      organizationId: 'organizationId',
      id: 'x',
      receivingDate: '2019-12-27T18:11:19.117Z',
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
  test.skip('receive: required and optional params', async () => {
    const response = await client.v1.transfer.transferIn.receive({
      organizationId: 'organizationId',
      id: 'x',
      receivingDate: '2019-12-27T18:11:19.117Z',
      transferItems: [{ id: 'x', itemQuantities: [{ quantity: 0, unitOfMeasureQuantityId: 'x' }] }],
      destinationNote: 'destinationNote',
    });
  });

  // Prism tests are disabled
  test.skip('reject: only required params', async () => {
    const responsePromise = client.v1.transfer.transferIn.reject('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.transfer.transferIn.reject('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('retrieveCount: only required params', async () => {
    const responsePromise = client.v1.transfer.transferIn.retrieveCount({ organizationId: 'organizationId' });
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
    const response = await client.v1.transfer.transferIn.retrieveCount({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('retrieveTransferIn: only required params', async () => {
    const responsePromise = client.v1.transfer.transferIn.retrieveTransferIn({
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
  test.skip('retrieveTransferIn: required and optional params', async () => {
    const response = await client.v1.transfer.transferIn.retrieveTransferIn({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      FulfillingDate: { End: '2019-12-27T18:11:19.117Z', Start: '2019-12-27T18:11:19.117Z' },
      LocationId: 'LocationId',
      RequestDate: { End: '2019-12-27T18:11:19.117Z', Start: '2019-12-27T18:11:19.117Z' },
      SearchTerm: 'SearchTerm',
      Status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.v1.transfer.transferIn.submit('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.transfer.transferIn.submit('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('transferIn: only required params', async () => {
    const responsePromise = client.v1.transfer.transferIn.transferIn({
      organizationId: 'organizationId',
      destinationLocationId: 'x',
      sourceLocationId: 'x',
      suggestedDeliveryDate: '2019-12-27T18:11:19.117Z',
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
  test.skip('transferIn: required and optional params', async () => {
    const response = await client.v1.transfer.transferIn.transferIn({
      organizationId: 'organizationId',
      destinationLocationId: 'x',
      sourceLocationId: 'x',
      suggestedDeliveryDate: '2019-12-27T18:11:19.117Z',
      transferItems: [
        { id: 'x', unitOfMeasureType: { id: 0, unitOfMeasureQuantities: [{ id: 0, quantity: 0 }] } },
      ],
      destinationNote: 'destinationNote',
    });
  });

  // Prism tests are disabled
  test.skip('updateTransferIn: only required params', async () => {
    const responsePromise = client.v1.transfer.transferIn.updateTransferIn({
      organizationId: 'organizationId',
      id: 'x',
      destinationLocationId: 'x',
      sourceLocationId: 'x',
      suggestedDeliveryDate: '2019-12-27T18:11:19.117Z',
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
  test.skip('updateTransferIn: required and optional params', async () => {
    const response = await client.v1.transfer.transferIn.updateTransferIn({
      organizationId: 'organizationId',
      id: 'x',
      destinationLocationId: 'x',
      sourceLocationId: 'x',
      suggestedDeliveryDate: '2019-12-27T18:11:19.117Z',
      transferItems: [
        { id: 'x', unitOfMeasureType: { id: 0, unitOfMeasureQuantities: [{ id: 0, quantity: 0 }] } },
      ],
      destinationNote: 'destinationNote',
    });
  });
});
