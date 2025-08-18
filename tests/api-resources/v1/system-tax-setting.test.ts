// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource systemTaxSetting', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.systemTaxSetting.retrieve(0, { organizationId: 'organizationId' });
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
    const response = await client.v1.systemTaxSetting.retrieve(0, { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('deleteSystemTaxSetting: only required params', async () => {
    const responsePromise = client.v1.systemTaxSetting.deleteSystemTaxSetting({
      id: 0,
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
  test.skip('deleteSystemTaxSetting: required and optional params', async () => {
    const response = await client.v1.systemTaxSetting.deleteSystemTaxSetting({
      id: 0,
      organizationId: 'organizationId',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveSystemTaxSetting: only required params', async () => {
    const responsePromise = client.v1.systemTaxSetting.retrieveSystemTaxSetting({
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
  test.skip('retrieveSystemTaxSetting: required and optional params', async () => {
    const response = await client.v1.systemTaxSetting.retrieveSystemTaxSetting({
      organizationId: 'organizationId',
      PageNumber: 1,
      PageSize: 1,
      SearchTerm: 'SearchTerm',
      Status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('seedInitialDataToElasticSearch: only required params', async () => {
    const responsePromise = client.v1.systemTaxSetting.seedInitialDataToElasticSearch({
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
  test.skip('seedInitialDataToElasticSearch: required and optional params', async () => {
    const response = await client.v1.systemTaxSetting.seedInitialDataToElasticSearch({
      organizationId: 'organizationId',
    });
  });

  // Prism tests are disabled
  test.skip('systemTaxSetting: only required params', async () => {
    const responsePromise = client.v1.systemTaxSetting.systemTaxSetting({
      organizationId: 'organizationId',
      IsDefault: true,
      Name: 'x',
      RatePercentage: 0,
      Status: 0,
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
  test.skip('systemTaxSetting: required and optional params', async () => {
    const response = await client.v1.systemTaxSetting.systemTaxSetting({
      organizationId: 'organizationId',
      IsDefault: true,
      Name: 'x',
      RatePercentage: 0,
      Status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('updateSystemTaxSetting: only required params', async () => {
    const responsePromise = client.v1.systemTaxSetting.updateSystemTaxSetting({
      organizationId: 'organizationId',
      Id: 0,
      IsDefault: true,
      Name: 'x',
      RatePercentage: 0,
      Status: 0,
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
  test.skip('updateSystemTaxSetting: required and optional params', async () => {
    const response = await client.v1.systemTaxSetting.updateSystemTaxSetting({
      organizationId: 'organizationId',
      Id: 0,
      IsDefault: true,
      Name: 'x',
      RatePercentage: 0,
      Status: 0,
    });
  });
});
