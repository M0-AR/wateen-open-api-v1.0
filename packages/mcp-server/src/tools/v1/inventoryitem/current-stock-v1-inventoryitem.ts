// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.inventoryitem',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/inventoryitem/CurrentStock',
};

export const tool: Tool = {
  name: 'current_stock_v1_inventoryitem',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      ItemId: {
        type: 'string',
      },
      organizationId: {
        type: 'string',
      },
      BrandName: {
        type: 'string',
      },
      LocationName: {
        type: 'string',
      },
      PageNumber: {
        type: 'integer',
      },
      PageSize: {
        type: 'integer',
      },
    },
    required: ['ItemId', 'organizationId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.inventoryitem.currentStock(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
