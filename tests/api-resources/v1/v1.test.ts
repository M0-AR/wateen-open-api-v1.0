// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Prism tests are disabled
  test.skip('createSale', async () => {
    const responsePromise = client.v1.createSale();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createSale: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.createSale(
        {
          endTime: '2019-12-27T18:11:19.117Z',
          externalId: 'externalId',
          integrationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          locationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          organizationId: 'organizationId',
          saleDate: '2019-12-27T18:11:19.117Z',
          saleItems: [
            {
              amountExcludingTax: 0,
              amountIncludingTax: 0,
              date: '2019-12-27T18:11:19.117Z',
              discount: 0,
              externalId: 'externalId',
              itemId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              orderDiscount: 0,
              quantity: 0,
              transactionType: 0,
            },
          ],
          startTime: '2019-12-27T18:11:19.117Z',
          totalWithOutTax: 0,
          totalWithTax: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WateenOpenAPIV1_0.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getAdmins: only required params', async () => {
    const responsePromise = client.v1.getAdmins({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getAdmins: required and optional params', async () => {
    const response = await client.v1.getAdmins({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('getBusinessStructures: only required params', async () => {
    const responsePromise = client.v1.getBusinessStructures({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getBusinessStructures: required and optional params', async () => {
    const response = await client.v1.getBusinessStructures({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('getTimeZones: only required params', async () => {
    const responsePromise = client.v1.getTimeZones({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTimeZones: required and optional params', async () => {
    const response = await client.v1.getTimeZones({ organizationId: 'organizationId' });
  });
});
