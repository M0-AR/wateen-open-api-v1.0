// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.waste_reason',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/WasteReason',
};

export const tool: Tool = {
  name: 'waste_reason_v1_waste_reason',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            canEdit: {
              type: 'boolean',
            },
            isActive: {
              type: 'boolean',
            },
            reason: {
              type: 'string',
            },
          },
        },
      },
      organizationId: {
        type: 'string',
      },
    },
    required: ['items', 'organizationId'],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.wasteReason.wasteReason(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
