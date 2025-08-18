// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0, { toFile } from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.buyer.users.create({
      organizationId: 'organizationId',
      EmailAddress: 'dev@stainless.com',
      FirstName: 'FirstName',
      LastName: 'LastName',
      PhoneNumber: 'PhoneNumber',
      Username: 'Username',
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
    const response = await client.v1.buyer.users.create({
      organizationId: 'organizationId',
      EmailAddress: 'dev@stainless.com',
      FirstName: 'FirstName',
      LastName: 'LastName',
      PhoneNumber: 'PhoneNumber',
      Username: 'Username',
      ConfirmPassword: 'ConfirmPassword',
      CreateEmployeeCard: true,
      ExpiryDate: '2019-12-27T18:11:19.117Z',
      IsActive: true,
      Password: 'Password',
      RoleLocations: [{ isPreferredLocation: true, locationId: 'locationId', roleId: 0 }],
      SendInvitation: true,
      UserPhoto: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.buyer.users.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.buyer.users.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.buyer.users.update('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.buyer.users.update('id', {
      organizationId: 'organizationId',
      ConfirmPassword: 'ConfirmPassword',
      CreateEmployeeCard: true,
      EmailAddress: 'dev@stainless.com',
      ExpiryDate: '2019-12-27T18:11:19.117Z',
      FirstName: 'FirstName',
      IsActive: true,
      LastName: 'LastName',
      Password: 'Password',
      PhoneNumber: 'PhoneNumber',
      RoleLocations: [{ isPreferredLocation: true, locationId: 'locationId', roleId: 0 }],
      UserPhoto: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.buyer.users.list({ organizationId: 'organizationId' });
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
    const response = await client.v1.buyer.users.list({
      organizationId: 'organizationId',
      pageNumber: 0,
      pageSize: 0,
      searchValue: 'searchValue',
      status: [0],
    });
  });

  // Prism tests are disabled
  test.skip('count: only required params', async () => {
    const responsePromise = client.v1.buyer.users.count({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('count: required and optional params', async () => {
    const response = await client.v1.buyer.users.count({ organizationId: 'organizationId' });
  });
});
