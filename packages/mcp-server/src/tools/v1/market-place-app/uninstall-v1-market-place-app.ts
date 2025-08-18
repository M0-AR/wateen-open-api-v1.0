// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.market_place_app',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/MarketPlaceApp/uninstall',
};

export const tool: Tool = {
  name: 'uninstall_v1_market_place_app',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      marketPlaceAppId: {
        type: 'string',
      },
      organizationId: {
        type: 'string',
      },
      modifiedBy: {
        type: 'string',
      },
      modifiedDate: {
        type: 'string',
      },
      status: {
        type: 'string',
      },
    },
    required: ['marketPlaceAppId', 'organizationId'],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.marketPlaceApp.uninstall(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
