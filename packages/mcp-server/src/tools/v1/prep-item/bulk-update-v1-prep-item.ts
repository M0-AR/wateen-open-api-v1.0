// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.prep_item',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/PrepItem/BulkUpdatePrepItem',
};

export const tool: Tool = {
  name: 'bulk_update_v1_prep_item',
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
      itemAllocationIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      parLevel: {
        type: 'integer',
      },
      reorderLevel: {
        type: 'integer',
      },
      status: {
        type: 'integer',
      },
    },
    required: ['organizationId', 'ids'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.prepItem.bulkUpdate(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
