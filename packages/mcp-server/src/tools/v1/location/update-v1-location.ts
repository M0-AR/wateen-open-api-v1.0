// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.location',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/Location',
};

export const tool: Tool = {
  name: 'update_v1_location',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      AddressLine1: {
        type: 'string',
      },
      AddressName: {
        type: 'string',
      },
      ContactName: {
        type: 'string',
      },
      Country: {
        type: 'string',
      },
      Email: {
        type: 'string',
      },
      Id: {
        type: 'string',
      },
      LocationName: {
        type: 'string',
      },
      LocationType: {
        type: 'integer',
      },
      ParentLocation: {
        type: 'string',
      },
      PhoneNumber: {
        type: 'string',
      },
      TownCity: {
        type: 'string',
      },
      AdditionalInfo: {
        type: 'string',
      },
      AddressLine2: {
        type: 'string',
      },
      BuildingNumber: {
        type: 'string',
      },
      EmailTemplate: {
        type: 'string',
      },
      IsActive: {
        type: 'boolean',
      },
      IsTransactionAllowed: {
        type: 'boolean',
      },
      LocationCode: {
        type: 'string',
      },
      Logo: {
        type: 'string',
      },
      PostalCode: {
        type: 'string',
      },
      StateRegion: {
        type: 'string',
      },
      TimeZone: {
        type: 'string',
      },
      UseParentLogo: {
        type: 'boolean',
      },
    },
    required: [
      'organizationId',
      'AddressLine1',
      'AddressName',
      'ContactName',
      'Country',
      'Email',
      'Id',
      'LocationName',
      'LocationType',
      'ParentLocation',
      'PhoneNumber',
      'TownCity',
    ],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.location.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
