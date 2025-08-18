// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.location',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/Location/UpdateBulk',
};

export const tool: Tool = {
  name: 'update_bulk_v1_location',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      isActive: {
        type: 'boolean',
      },
    },
    required: ['organizationId', 'ids', 'isActive'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.location.updateBulk(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
