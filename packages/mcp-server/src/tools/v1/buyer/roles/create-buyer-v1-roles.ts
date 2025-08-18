// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.buyer.roles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/buyer/roles',
};

export const tool: Tool = {
  name: 'create_buyer_v1_roles',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      scopes: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
      description: {
        type: 'string',
      },
      isActive: {
        type: 'boolean',
      },
    },
    required: ['organizationId', 'name', 'scopes'],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.buyer.roles.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
