// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.reports',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/Reports/BulkUpdate',
};

export const tool: Tool = {
  name: 'bulk_update_v1_reports',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      isFavorite: {
        type: 'boolean',
      },
      organizationId: {
        type: 'string',
      },
    },
    required: ['ids', 'isFavorite', 'organizationId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.reports.bulkUpdate(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
