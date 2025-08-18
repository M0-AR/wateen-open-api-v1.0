// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.buyer.users',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/buyer/users/{id}',
};

export const tool: Tool = {
  name: 'update_buyer_v1_users',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      organizationId: {
        type: 'string',
      },
      ConfirmPassword: {
        type: 'string',
      },
      CreateEmployeeCard: {
        type: 'boolean',
      },
      EmailAddress: {
        type: 'string',
      },
      ExpiryDate: {
        type: 'string',
        format: 'date-time',
      },
      FirstName: {
        type: 'string',
      },
      IsActive: {
        type: 'boolean',
      },
      LastName: {
        type: 'string',
      },
      Password: {
        type: 'string',
      },
      PhoneNumber: {
        type: 'string',
      },
      RoleLocations: {
        type: 'array',
        items: {
          $ref: '#/$defs/role_location',
        },
      },
      UserPhoto: {
        type: 'string',
      },
    },
    required: ['id', 'organizationId'],
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.v1.buyer.users.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
