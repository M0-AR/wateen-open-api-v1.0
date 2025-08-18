// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.entity_prefix',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/EntityPrefix/BulkUpdateEntityPrefix',
};

export const tool: Tool = {
  name: 'bulk_update_v1_entity_prefix',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      entityPrefixes: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            initialNumber: {
              type: 'integer',
            },
            isActive: {
              type: 'boolean',
            },
            minimumDigits: {
              type: 'integer',
            },
            override: {
              type: 'boolean',
            },
            prefix: {
              type: 'string',
            },
          },
          required: ['id'],
        },
      },
    },
    required: ['organizationId', 'entityPrefixes'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.entityPrefix.bulkUpdate(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
