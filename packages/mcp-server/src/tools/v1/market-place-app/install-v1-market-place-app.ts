// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.market_place_app',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/MarketPlaceApp/install',
};

export const tool: Tool = {
  name: 'install_v1_market_place_app',
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
      createdBy: {
        type: 'string',
      },
      createdDate: {
        type: 'string',
      },
      locationMappings: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            locationId: {
              type: 'string',
            },
            revelPosLocationId: {
              type: 'string',
            },
            time: {
              type: 'string',
            },
          },
        },
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
      systemConnection: {
        type: 'object',
        properties: {
          apiKey: {
            type: 'string',
          },
          menuSync: {
            type: 'boolean',
          },
          salesSync: {
            type: 'boolean',
          },
          secretKey: {
            type: 'string',
          },
        },
      },
      taxMappings: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            taxName: {
              type: 'string',
            },
            taxRatePercentage: {
              type: 'number',
            },
          },
        },
      },
    },
    required: ['marketPlaceAppId', 'organizationId'],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.marketPlaceApp.install(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
