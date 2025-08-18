// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/sales',
};

export const tool: Tool = {
  name: 'create_sale_v1',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      endTime: {
        type: 'string',
        format: 'date-time',
      },
      externalId: {
        type: 'string',
      },
      integrationId: {
        type: 'string',
      },
      locationId: {
        type: 'string',
      },
      organizationId: {
        type: 'string',
      },
      saleDate: {
        type: 'string',
        format: 'date-time',
      },
      saleItems: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            amountExcludingTax: {
              type: 'number',
            },
            amountIncludingTax: {
              type: 'number',
            },
            date: {
              type: 'string',
              format: 'date-time',
            },
            discount: {
              type: 'number',
            },
            externalId: {
              type: 'string',
            },
            itemId: {
              type: 'string',
            },
            orderDiscount: {
              type: 'number',
            },
            quantity: {
              type: 'number',
            },
            transactionType: {
              type: 'string',
              enum: [0, 1, 2, 3],
            },
          },
        },
      },
      startTime: {
        type: 'string',
        format: 'date-time',
      },
      totalWithOutTax: {
        type: 'number',
      },
      totalWithTax: {
        type: 'number',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.createSale(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
