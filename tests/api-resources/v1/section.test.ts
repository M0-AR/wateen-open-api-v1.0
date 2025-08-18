// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource section', () => {
  // Prism tests are disabled
  test.skip('retrieveSection: only required params', async () => {
    const responsePromise = client.v1.section.retrieveSection({
      Location: 'Location',
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
  test.skip('retrieveSection: required and optional params', async () => {
    const response = await client.v1.section.retrieveSection({
      Location: 'Location',
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      IsActive: true,
      Name: 'Name',
    });
  });

  // Prism tests are disabled
  test.skip('section: only required params', async () => {
    const responsePromise = client.v1.section.section({
      organizationId: 'organizationId',
      parentLocation: 'x',
      sectionName: 'x',
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
  test.skip('section: required and optional params', async () => {
    const response = await client.v1.section.section({
      organizationId: 'organizationId',
      parentLocation: 'x',
      sectionName: 'x',
      isActive: true,
      isAutoCodeGeneration: true,
      sectionCode: 'sectionCode',
    });
  });

  // Prism tests are disabled
  test.skip('updateSection: only required params', async () => {
    const responsePromise = client.v1.section.updateSection({ organizationId: 'organizationId', id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateSection: required and optional params', async () => {
    const response = await client.v1.section.updateSection({
      organizationId: 'organizationId',
      id: 'x',
      isActive: true,
      sectionName: 'sectionName',
    });
  });

  // Prism tests are disabled
  test.skip('updateUpdateBulk: only required params', async () => {
    const responsePromise = client.v1.section.updateUpdateBulk({
      organizationId: 'organizationId',
      ids: ['string'],
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
  test.skip('updateUpdateBulk: required and optional params', async () => {
    const response = await client.v1.section.updateUpdateBulk({
      organizationId: 'organizationId',
      ids: ['string'],
      isActive: true,
    });
  });
});
