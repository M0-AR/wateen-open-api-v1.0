// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.market_place_app',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/MarketPlaceApp/search',
};

export const tool: Tool = {
  name: 'search_v1_market_place_app',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      categoryIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      managedBy: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
      pageNumber: {
        type: 'integer',
      },
      pageSize: {
        type: 'integer',
      },
      priceTypes: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
      provider: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
      searchTerm: {
        type: 'string',
      },
      status: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
    },
    required: ['organizationId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.marketPlaceApp.search(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
