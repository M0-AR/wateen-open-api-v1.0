// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.market_place_app',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v1/MarketPlaceApp/{id}',
};

export const tool: Tool = {
  name: 'delete_v1_market_place_app',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      organizationId: {
        type: 'string',
      },
    },
    required: ['id', 'organizationId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.v1.marketPlaceApp.delete(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
