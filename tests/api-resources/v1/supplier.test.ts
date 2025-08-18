// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WateenOpenAPIV1_0, { toFile } from 'wateen-open-api-v1.0';

const client = new WateenOpenAPIV1_0({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource supplier', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.supplier.retrieve('id', { organizationId: 'organizationId' });
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
    const response = await client.v1.supplier.retrieve('id', { organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('retrieveCount: only required params', async () => {
    const responsePromise = client.v1.supplier.retrieveCount({ organizationId: 'organizationId' });
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
    const response = await client.v1.supplier.retrieveCount({ organizationId: 'organizationId' });
  });

  // Prism tests are disabled
  test.skip('retrieveSupplier: only required params', async () => {
    const responsePromise = client.v1.supplier.retrieveSupplier({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveSupplier: required and optional params', async () => {
    const response = await client.v1.supplier.retrieveSupplier({
      organizationId: 'organizationId',
      CategoryIds: 'CategoryIds',
      Name: 'Name',
      PageNumber: 0,
      PageSize: 0,
      Status: 0,
      Type: 'Type',
    });
  });

  // Prism tests are disabled
  test.skip('supplier: only required params', async () => {
    const responsePromise = client.v1.supplier.supplier({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('supplier: required and optional params', async () => {
    const response = await client.v1.supplier.supplier({
      organizationId: 'organizationId',
      AdditionalInfo: 'AdditionalInfo',
      Address: 'Address',
      AddressLine1: 'AddressLine1',
      AddressLine2: 'AddressLine2',
      AltPhone: 'AltPhone',
      CategoryIds: ['string'],
      CCEmails: 'CCEmails',
      CityId: 'CityId',
      Code: 'Code',
      CountryId: 'CountryId',
      CRNumber: 'CRNumber',
      Distributers: [
        {
          id: 'id',
          address: 'address',
          ccEmails: 'ccEmails',
          cityId: 'cityId',
          countryId: 'countryId',
          email: 'email',
          firstName: 'firstName',
          isActive: true,
          lastName: 'lastName',
          locationIds: ['string'],
          name: 'name',
          phone: 'phone',
          viaEmail: true,
          viaSMS: true,
          viaWhatsApp: true,
        },
      ],
      Email: 'Email',
      FirstName: 'FirstName',
      Image: await toFile(Buffer.from('# my file contents'), 'README.md'),
      IsActive: true,
      IsAutoCodeGeneration: true,
      IsDraft: true,
      LastName: 'LastName',
      LegalName: 'LegalName',
      Name: 'Name',
      Phone: 'Phone',
      PostalCode: 'PostalCode',
      StateOrRegion: 'StateOrRegion',
      Type: 0,
      VATNumber: 'VATNumber',
      ViaEmail: true,
      ViaSMS: true,
      ViaWhatsApp: true,
    });
  });

  // Prism tests are disabled
  test.skip('updateBulkUpdate: only required params', async () => {
    const responsePromise = client.v1.supplier.updateBulkUpdate({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateBulkUpdate: required and optional params', async () => {
    const response = await client.v1.supplier.updateBulkUpdate({
      organizationId: 'organizationId',
      categoryIds: 'categoryIds',
      ids: ['string'],
      isActive: true,
      type: 0,
    });
  });

  // Prism tests are disabled
  test.skip('updateSupplier: only required params', async () => {
    const responsePromise = client.v1.supplier.updateSupplier({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateSupplier: required and optional params', async () => {
    const response = await client.v1.supplier.updateSupplier({
      organizationId: 'organizationId',
      AdditionalInfo: 'AdditionalInfo',
      Address: 'Address',
      AddressLine1: 'AddressLine1',
      AddressLine2: 'AddressLine2',
      AltPhone: 'AltPhone',
      CategoryIds: ['string'],
      CCEmails: 'CCEmails',
      CityId: 'CityId',
      Code: 'Code',
      CountryId: 'CountryId',
      CRNumber: 'CRNumber',
      Distributers: [
        {
          id: 'id',
          address: 'address',
          ccEmails: 'ccEmails',
          cityId: 'cityId',
          countryId: 'countryId',
          email: 'email',
          firstName: 'firstName',
          isActive: true,
          lastName: 'lastName',
          locationIds: ['string'],
          name: 'name',
          phone: 'phone',
          viaEmail: true,
          viaSMS: true,
          viaWhatsApp: true,
        },
      ],
      Email: 'Email',
      FirstName: 'FirstName',
      Id: 'Id',
      Image: await toFile(Buffer.from('# my file contents'), 'README.md'),
      IsActive: true,
      IsAutoCodeGeneration: true,
      IsDraft: true,
      LastName: 'LastName',
      LegalName: 'LegalName',
      Name: 'Name',
      Phone: 'Phone',
      PostalCode: 'PostalCode',
      StateOrRegion: 'StateOrRegion',
      Type: 0,
      VATNumber: 'VATNumber',
      ViaEmail: true,
      ViaSMS: true,
      ViaWhatsApp: true,
    });
  });
});
