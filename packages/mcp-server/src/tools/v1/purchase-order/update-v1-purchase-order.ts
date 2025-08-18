// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.purchase_order',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/PurchaseOrder',
};

export const tool: Tool = {
  name: 'update_v1_purchase_order',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      deliveryDate: {
        type: 'string',
        format: 'date-time',
      },
      description: {
        type: 'string',
      },
      items: {
        type: 'array',
        items: {
          $ref: '#/$defs/purchase_order_item_data',
        },
      },
      locationId: {
        type: 'string',
      },
      orderDate: {
        type: 'string',
        format: 'date-time',
      },
      organizationId: {
        type: 'string',
      },
      status: {
        type: 'integer',
      },
      supplierId: {
        type: 'string',
      },
    },
    required: [],
    $defs: {
      purchase_order_item_data: {
        type: 'object',
        properties: {
          cost: {
            type: 'number',
          },
          description: {
            type: 'string',
          },
          discount: {
            type: 'number',
          },
          itemId: {
            type: 'string',
          },
          landedCost: {
            type: 'number',
          },
          purchaseOptionId: {
            type: 'string',
          },
          quantity: {
            type: 'number',
          },
          taxId: {
            type: 'integer',
          },
          totalAmount: {
            type: 'number',
          },
          totalCost: {
            type: 'number',
          },
          totalLineAmount: {
            type: 'number',
          },
          uomId: {
            type: 'integer',
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
  const response = await client.v1.purchaseOrder.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
