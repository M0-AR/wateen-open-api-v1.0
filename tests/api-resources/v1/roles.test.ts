// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource roles', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.roles.create({ organizationId: 'organizationId', rolesIds: [0] });
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
    const response = await client.v1.roles.create({
      organizationId: 'organizationId',
      rolesIds: [0],
      isActive: true,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.roles.retrieve(0, { organizationId: 'organizationId' });
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
    const response = await client.v1.roles.retrieve(0, { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.roles.update(0, {
      organizationId: 'organizationId',
      name: 'x',
      scopes: [0],
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
    const response = await client.v1.roles.update(0, {
      organizationId: 'organizationId',
      name: 'x',
      scopes: [0],
      description: 'description',
      isActive: true,
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.roles.list({ organizationId: 'organizationId' });
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
    const response = await client.v1.roles.list({
      organizationId: 'organizationId',
      isActive: true,
      name: 'name',
      pageNumber: 0,
      pageSize: 0,
    });
  });

  // Prism tests are disabled
  test.skip('addUserRole: only required params', async () => {
    const responsePromise = client.v1.roles.addUserRole({
      query_organizationId: 'organizationId',
      locationId: 'x',
      body_organizationId: 'x',
      roleId: 0,
      userId: 0,
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
  test.skip('addUserRole: required and optional params', async () => {
    const response = await client.v1.roles.addUserRole({
      query_organizationId: 'organizationId',
      locationId: 'x',
      body_organizationId: 'x',
      roleId: 0,
      userId: 0,
      isPreferredLocation: true,
    });
  });

  // Prism tests are disabled
  test.skip('deleteRemoveUserRole: only required params', async () => {
    const responsePromise = client.v1.roles.deleteRemoveUserRole({
      organizationId: 'organizationId',
      userRoleLocationId: 0,
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
  test.skip('deleteRemoveUserRole: required and optional params', async () => {
    const response = await client.v1.roles.deleteRemoveUserRole({
      organizationId: 'organizationId',
      userRoleLocationId: 0,
    });
  });

  // Prism tests are disabled
  test.skip('retrieveCount: only required params', async () => {
    const responsePromise = client.v1.roles.retrieveCount({ organizationId: 'organizationId' });
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
    const response = await client.v1.roles.retrieveCount({ organizationId: 'organizationId', rank: 0 });
  });

  // Prism tests are disabled
  test.skip('retrieveUsers: only required params', async () => {
    const responsePromise = client.v1.roles.retrieveUsers(0, { organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveUsers: required and optional params', async () => {
    const response = await client.v1.roles.retrieveUsers(0, {
      organizationId: 'organizationId',
      pageNumber: 0,
      pageSize: 0,
      username: 'username',
    });
  });
});
