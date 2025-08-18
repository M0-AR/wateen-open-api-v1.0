// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.purchase_request',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/PurchaseRequest',
};

export const tool: Tool = {
  name: 'update_v1_purchase_request',
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
      deliveryDate: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            deliveryDate: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            itemId: {
              type: 'string',
            },
            qty: {
              type: 'number',
            },
            type: {
              type: 'integer',
            },
            unitOfMeasureId: {
              type: 'integer',
            },
          },
        },
      },
      locationId: {
        type: 'string',
      },
      requestDate: {
        type: 'string',
      },
      sectionId: {
        type: 'string',
      },
      status: {
        type: 'string',
      },
      templateId: {
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
  const body = args as any;
  const response = await client.v1.purchaseRequest.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
