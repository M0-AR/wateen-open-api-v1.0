// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.category',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/Category',
};

export const tool: Tool = {
  name: 'update_v1_category',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      classId: {
        type: 'string',
      },
      isActive: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      prefixData: {
        $ref: '#/$defs/prefix_data',
      },
      type: {
        type: 'integer',
      },
    },
    required: ['organizationId', 'id'],
    $defs: {
      prefix_data: {
        type: 'object',
        properties: {
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
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.category.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
