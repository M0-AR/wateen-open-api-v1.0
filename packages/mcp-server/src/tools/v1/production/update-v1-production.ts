// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.production',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/Production',
};

export const tool: Tool = {
  name: 'update_v1_production',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      items: {
        type: 'array',
        items: {
          $ref: '#/$defs/production_item',
        },
      },
      locationId: {
        type: 'string',
      },
      productionDateTime: {
        type: 'string',
        format: 'date-time',
      },
      description: {
        type: 'string',
      },
      sectionId: {
        type: 'string',
      },
      status: {
        type: 'integer',
      },
    },
    required: ['organizationId', 'id', 'items', 'locationId', 'productionDateTime'],
    $defs: {
      production_item: {
        type: 'object',
        properties: {
          baseUnit: {
            type: 'number',
          },
          batchUnit: {
            type: 'number',
          },
          ingredients: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                amount: {
                  type: 'number',
                },
                currentStock: {
                  type: 'number',
                },
                ingredientId: {
                  type: 'string',
                },
                qty: {
                  type: 'number',
                },
              },
            },
          },
          itemId: {
            type: 'string',
          },
          totalAmount: {
            type: 'number',
          },
          totalQty: {
            type: 'number',
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.production.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
