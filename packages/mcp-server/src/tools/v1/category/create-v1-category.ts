// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.category',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/Category',
};

export const tool: Tool = {
  name: 'create_v1_category',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      classId: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      isActive: {
        type: 'boolean',
      },
      prefixData: {
        $ref: '#/$defs/prefix_data',
      },
      type: {
        type: 'integer',
      },
    },
    required: ['organizationId', 'classId', 'name'],
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
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.category.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
