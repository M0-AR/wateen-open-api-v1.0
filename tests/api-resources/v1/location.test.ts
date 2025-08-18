// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0, { toFile } from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource location', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.location.create({
      organizationId: 'organizationId',
      AddressLine1: 'AddressLine1',
      AddressName: 'AddressName',
      ContactName: 'ContactName',
      Country: 'Country',
      Email: 'Email',
      LocationName: 'LocationName',
      LocationType: 0,
      ParentLocation: 'ParentLocation',
      PhoneNumber: 'PhoneNumber',
      TownCity: 'TownCity',
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
    const response = await client.v1.location.create({
      organizationId: 'organizationId',
      AddressLine1: 'AddressLine1',
      AddressName: 'AddressName',
      ContactName: 'ContactName',
      Country: 'Country',
      Email: 'Email',
      LocationName: 'LocationName',
      LocationType: 0,
      ParentLocation: 'ParentLocation',
      PhoneNumber: 'PhoneNumber',
      TownCity: 'TownCity',
      AdditionalInfo: 'AdditionalInfo',
      AddressLine2: 'AddressLine2',
      BuildingNumber: 'BuildingNumber',
      EmailTemplate: 'EmailTemplate',
      IsActive: true,
      IsAutoCodeGeneration: true,
      IsTransactionAllowed: true,
      LocationCode: 'LocationCode',
      Logo: await toFile(Buffer.from('# my file contents'), 'README.md'),
      PostalCode: 'PostalCode',
      StateRegion: 'StateRegion',
      TimeZone: 'TimeZone',
      UseParentLogo: true,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.location.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.location.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.location.update({
      organizationId: 'organizationId',
      AddressLine1: 'AddressLine1',
      AddressName: 'AddressName',
      ContactName: 'ContactName',
      Country: 'Country',
      Email: 'Email',
      Id: 'Id',
      LocationName: 'LocationName',
      LocationType: 0,
      ParentLocation: 'ParentLocation',
      PhoneNumber: 'PhoneNumber',
      TownCity: 'TownCity',
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
    const response = await client.v1.location.update({
      organizationId: 'organizationId',
      AddressLine1: 'AddressLine1',
      AddressName: 'AddressName',
      ContactName: 'ContactName',
      Country: 'Country',
      Email: 'Email',
      Id: 'Id',
      LocationName: 'LocationName',
      LocationType: 0,
      ParentLocation: 'ParentLocation',
      PhoneNumber: 'PhoneNumber',
      TownCity: 'TownCity',
      AdditionalInfo: 'AdditionalInfo',
      AddressLine2: 'AddressLine2',
      BuildingNumber: 'BuildingNumber',
      EmailTemplate: 'EmailTemplate',
      IsActive: true,
      IsTransactionAllowed: true,
      LocationCode: 'LocationCode',
      Logo: await toFile(Buffer.from('# my file contents'), 'README.md'),
      PostalCode: 'PostalCode',
      StateRegion: 'StateRegion',
      TimeZone: 'TimeZone',
      UseParentLogo: true,
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.location.list({
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
    const response = await client.v1.location.list({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      IsActive: true,
      LocationTypes: [0],
      Name: 'Name',
      ParentLocations: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('countAll: only required params', async () => {
    const responsePromise = client.v1.location.countAll({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('countAll: required and optional params', async () => {
    const response = await client.v1.location.countAll({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('getHierarchy: only required params', async () => {
    const responsePromise = client.v1.location.getHierarchy({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getHierarchy: required and optional params', async () => {
    const response = await client.v1.location.getHierarchy({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('getHierarchyByActive: only required params', async () => {
    const responsePromise = client.v1.location.getHierarchyByActive({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getHierarchyByActive: required and optional params', async () => {
    const response = await client.v1.location.getHierarchyByActive({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('listAll: only required params', async () => {
    const responsePromise = client.v1.location.listAll({
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
  test.skip('listAll: required and optional params', async () => {
    const response = await client.v1.location.listAll({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      IsActive: true,
      LocationTypes: [0],
      Name: 'Name',
      ParentLocations: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('updateBulk: only required params', async () => {
    const responsePromise = client.v1.location.updateBulk({
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
  test.skip('updateBulk: required and optional params', async () => {
    const response = await client.v1.location.updateBulk({
      organizationId: 'organizationId',
      ids: ['string'],
      isActive: true,
    });
  });
});
