// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.market_place_app',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/MarketPlaceApp',
};

export const tool: Tool = {
  name: 'create_v1_market_place_app',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      Name: {
        type: 'string',
      },
      Category: {
        type: 'string',
      },
      Description: {
        type: 'string',
      },
      Icon: {
        type: 'string',
      },
      ManagedBy: {
        type: 'integer',
      },
      Price: {
        type: 'number',
      },
      PriceType: {
        type: 'integer',
      },
      Provider: {
        type: 'integer',
      },
      Status: {
        type: 'integer',
      },
    },
    required: ['Name'],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.marketPlaceApp.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
