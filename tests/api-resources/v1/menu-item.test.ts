// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource menuItem', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.menuItem.create({
      organizationId: 'organizationId',
      CategoryId: 'CategoryId',
      Name: 'Name',
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
    const response = await client.v1.menuItem.create({
      organizationId: 'organizationId',
      CategoryId: 'CategoryId',
      Name: 'Name',
      AdditionalInfo: 'AdditionalInfo',
      Code: 'Code',
      CookInstructions: 'CookInstructions',
      CookTime: 0,
      FoodCost: 0,
      IsAutoCodeGeneration: true,
      MaxFoodCost: 0,
      PosCode: 'PosCode',
      PrepTime: 0,
      Price: 0,
      RecipeCost: 0,
      ShowLocationsColumn: true,
      Status: 0,
      Synchoronization: true,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.menuItem.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.menuItem.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.menuItem.update({ organizationId: 'organizationId', Id: 'Id' });
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
    const response = await client.v1.menuItem.update({
      organizationId: 'organizationId',
      Id: 'Id',
      AdditionalInfo: 'AdditionalInfo',
      CategoryId: 'CategoryId',
      Code: 'Code',
      CookInstructions: 'CookInstructions',
      CookTime: 0,
      FoodCost: 0,
      IsAutoCodeGeneration: true,
      MaxFoodCost: 0,
      Name: 'Name',
      PosCode: 'PosCode',
      PrepTime: 0,
      Price: 0,
      RecipeCost: 0,
      ShowLocationsColumn: true,
      Status: 0,
      Synchoronization: true,
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.menuItem.list({ organizationId: 'organizationId' });
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
    const response = await client.v1.menuItem.list({
      organizationId: 'organizationId',
      BrandIds: ['string'],
      CategoryIds: ['string'],
      PageNumber: 0,
      PageSize: 0,
      SearchTerm: 'SearchTerm',
      Status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('bulkUpdate: only required params', async () => {
    const responsePromise = client.v1.menuItem.bulkUpdate({
      organizationId: 'organizationId',
      ids: ['string'],
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
  test.skip('bulkUpdate: required and optional params', async () => {
    const response = await client.v1.menuItem.bulkUpdate({
      organizationId: 'organizationId',
      ids: ['string'],
      categoryId: 'categoryId',
      maxFoodCostPercentage: 0,
      status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('count: only required params', async () => {
    const responsePromise = client.v1.menuItem.count({ organizationId: 'organizationId' });
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
    const response = await client.v1.menuItem.count({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('getBrandLocationDiningOptions: only required params', async () => {
    const responsePromise = client.v1.menuItem.getBrandLocationDiningOptions({
      organizationId: 'organizationId',
      pageNumber: 0,
      pageSize: 0,
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
  test.skip('getBrandLocationDiningOptions: required and optional params', async () => {
    const response = await client.v1.menuItem.getBrandLocationDiningOptions({
      organizationId: 'organizationId',
      pageNumber: 0,
      pageSize: 0,
      diningOptionIds: ['string'],
      locationIds: ['string'],
      searchTerm: 'searchTerm',
    });
  });

  // Prism tests are disabled
  test.skip('getIngredientList: only required params', async () => {
    const responsePromise = client.v1.menuItem.getIngredientList({
      menuItemId: 'menuItemId',
      organizationId: 'organizationId',
      pageNumber: 0,
      pageSize: 0,
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
  test.skip('getIngredientList: required and optional params', async () => {
    const response = await client.v1.menuItem.getIngredientList({
      menuItemId: 'menuItemId',
      organizationId: 'organizationId',
      pageNumber: 0,
      pageSize: 0,
      diningOptionIds: ['string'],
      locationIds: ['string'],
      searchTerm: 'searchTerm',
    });
  });
});
