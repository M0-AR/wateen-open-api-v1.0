// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0, { toFile } from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource modifier', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.modifier.create({
      organizationId: 'organizationId',
      CategoryId: 'CategoryId',
      GroupId: 'GroupId',
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
    const response = await client.v1.modifier.create({
      organizationId: 'organizationId',
      CategoryId: 'CategoryId',
      GroupId: 'GroupId',
      Name: 'Name',
      AdditionalInfo: 'AdditionalInfo',
      Code: 'Code',
      CookInstructions: 'CookInstructions',
      CookTime: 0,
      FoodCost: 0,
      Image: await toFile(Buffer.from('# my file contents'), 'README.md'),
      Ingredients: [
        {
          id: 'id',
          costPerUnit: 0,
          excludeDiningOptionIds: ['string'],
          excludeLocationIds: ['string'],
          grossQty: 0,
          grossWastage: 0,
          itemId: 'itemId',
          netQty: 0,
          recipeCosting: true,
          totalCost: 0,
          type: 0,
          uomId: 0,
          wastageInPercentage: 0,
        },
      ],
      IsAutoCodeGeneration: true,
      MaxFoodCost: 0,
      POSCode: 'POSCode',
      PrepTime: 0,
      Price: 0,
      PriceList: [
        {
          brandId: 'brandId',
          diningOptionId: 'diningOptionId',
          foodCostPercentage: 0,
          isActive: true,
          itemId: 'itemId',
          locationId: 'locationId',
          maxCostPercentage: 0,
          netPrice: 0,
          recipeCost: 0,
        },
      ],
      ProcedureFiles: [await toFile(Buffer.from('# my file contents'), 'README.md')],
      RecipeCost: 0,
      ShowLocationsColumn: true,
      Status: 0,
      Synchoronization: true,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.modifier.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.modifier.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.modifier.update({ organizationId: 'organizationId', Id: 'Id' });
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
    const response = await client.v1.modifier.update({
      organizationId: 'organizationId',
      Id: 'Id',
      AdditionalInfo: 'AdditionalInfo',
      CategoryId: 'CategoryId',
      Code: 'Code',
      CookInstructions: 'CookInstructions',
      CookTime: 0,
      FoodCost: 0,
      GroupId: 'GroupId',
      Image: await toFile(Buffer.from('# my file contents'), 'README.md'),
      Ingredients: [
        {
          id: 'id',
          costPerUnit: 0,
          excludeDiningOptionIds: ['string'],
          excludeLocationIds: ['string'],
          grossQty: 0,
          grossWastage: 0,
          itemId: 'itemId',
          netQty: 0,
          recipeCosting: true,
          totalCost: 0,
          type: 0,
          uomId: 0,
          wastageInPercentage: 0,
        },
      ],
      IsAutoCodeGeneration: true,
      MaxFoodCost: 0,
      Name: 'Name',
      POSCode: 'POSCode',
      PrepTime: 0,
      Price: 0,
      PriceList: [
        {
          brandId: 'brandId',
          diningOptionId: 'diningOptionId',
          foodCostPercentage: 0,
          isActive: true,
          itemId: 'itemId',
          locationId: 'locationId',
          maxCostPercentage: 0,
          netPrice: 0,
          recipeCost: 0,
        },
      ],
      ProcedureFiles: [await toFile(Buffer.from('# my file contents'), 'README.md')],
      RecipeCost: 0,
      ShowLocationsColumn: true,
      Status: 0,
      Synchoronization: true,
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.modifier.list({
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
    const response = await client.v1.modifier.list({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      BrandIds: 'BrandIds',
      CategoryIds: 'CategoryIds',
      GroupIds: 'GroupIds',
      SearchTerm: 'SearchTerm',
      Status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('bulkUpdate: only required params', async () => {
    const responsePromise = client.v1.modifier.bulkUpdate({
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
    const response = await client.v1.modifier.bulkUpdate({
      organizationId: 'organizationId',
      ids: ['string'],
      categoryId: 'categoryId',
      groupId: 'groupId',
      maxFoodCostPercentage: 0,
      status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('count: only required params', async () => {
    const responsePromise = client.v1.modifier.count({ organizationId: 'organizationId' });
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
    const response = await client.v1.modifier.count({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('getBrandLocationDiningOptions: only required params', async () => {
    const responsePromise = client.v1.modifier.getBrandLocationDiningOptions({
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
  test.skip('getBrandLocationDiningOptions: required and optional params', async () => {
    const response = await client.v1.modifier.getBrandLocationDiningOptions({
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      DiningOptionIds: 'DiningOptionIds',
      LocationIds: 'LocationIds',
      SearchTerm: 'SearchTerm',
    });
  });

  // Prism tests are disabled
  test.skip('getIngredientList: only required params', async () => {
    const responsePromise = client.v1.modifier.getIngredientList({
      ModifierId: 'ModifierId',
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
  test.skip('getIngredientList: required and optional params', async () => {
    const response = await client.v1.modifier.getIngredientList({
      ModifierId: 'ModifierId',
      organizationId: 'organizationId',
      PageNumber: 0,
      PageSize: 0,
      DiningOptionIds: 'DiningOptionIds',
      LocationIds: 'LocationIds',
      SearchTerm: 'SearchTerm',
    });
  });
});
