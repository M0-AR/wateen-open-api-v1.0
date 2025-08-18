// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.supplier',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/Supplier/BulkUpdate',
};

export const tool: Tool = {
  name: 'update_bulk_update_v1_supplier',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      categoryIds: {
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
      type: {
        type: 'integer',
      },
    },
    required: ['organizationId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.supplier.updateBulkUpdate(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
