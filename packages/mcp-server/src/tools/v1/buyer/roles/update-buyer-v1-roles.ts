// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.buyer.roles',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/buyer/roles/{id}',
};

export const tool: Tool = {
  name: 'update_buyer_v1_roles',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
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
    required: ['id', 'organizationId', 'name', 'scopes'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.v1.buyer.roles.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
