// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.purchase_request',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/PurchaseRequest',
};

export const tool: Tool = {
  name: 'create_v1_purchase_request',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      deliveryDate: {
        type: 'string',
      },
      locationId: {
        type: 'string',
      },
      organizationId: {
        type: 'string',
      },
      requestDate: {
        type: 'string',
      },
      sectionId: {
        type: 'string',
      },
      status: {
        type: 'integer',
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
            description: {
              type: 'string',
            },
          },
          required: ['deliveryDate', 'itemId', 'qty', 'type', 'unitOfMeasureId'],
        },
      },
      templateId: {
        type: 'string',
      },
    },
    required: ['deliveryDate', 'locationId', 'organizationId', 'requestDate', 'sectionId', 'status'],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.purchaseRequest.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
