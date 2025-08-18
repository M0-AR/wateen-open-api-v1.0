// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource account', () => {
  // Prism tests are disabled
  test.skip('login', async () => {
    const responsePromise = client.account.login();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('login: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.account.login(
        {
          clientId: 'clientId',
          clientSecret: 'clientSecret',
          grantType: 'grantType',
          password: 'password',
          scope: 'scope',
          userName: 'userName',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WateenOpenAPIV1_0.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('refreshToken', async () => {
    const responsePromise = client.account.refreshToken();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('refreshToken: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.account.refreshToken(
        { clientId: 'clientId', clientSecret: 'clientSecret', refreshToken: 'refreshToken' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WateenOpenAPIV1_0.NotFoundError);
  });
});
