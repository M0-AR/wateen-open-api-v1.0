// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.buyer.users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/buyer/users',
};

export const tool: Tool = {
  name: 'create_buyer_v1_users',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      EmailAddress: {
        type: 'string',
      },
      FirstName: {
        type: 'string',
      },
      LastName: {
        type: 'string',
      },
      PhoneNumber: {
        type: 'string',
      },
      Username: {
        type: 'string',
      },
      ConfirmPassword: {
        type: 'string',
      },
      CreateEmployeeCard: {
        type: 'boolean',
      },
      ExpiryDate: {
        type: 'string',
        format: 'date-time',
      },
      IsActive: {
        type: 'boolean',
      },
      Password: {
        type: 'string',
      },
      RoleLocations: {
        type: 'array',
        items: {
          $ref: '#/$defs/role_location',
        },
      },
      SendInvitation: {
        type: 'boolean',
      },
      UserPhoto: {
        type: 'string',
      },
    },
    required: ['organizationId', 'EmailAddress', 'FirstName', 'LastName', 'PhoneNumber', 'Username'],
    $defs: {
      role_location: {
        type: 'object',
        properties: {
          isPreferredLocation: {
            type: 'boolean',
          },
          locationId: {
            type: 'string',
          },
          roleId: {
            type: 'integer',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.buyer.users.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
