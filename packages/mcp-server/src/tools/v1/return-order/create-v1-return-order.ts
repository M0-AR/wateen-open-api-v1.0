// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.return_order',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/ReturnOrder',
};

export const tool: Tool = {
  name: 'create_v1_return_order',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            itemId: {
              type: 'string',
            },
            price: {
              type: 'number',
            },
            quantityOrdered: {
              type: 'number',
            },
            quantityReceived: {
              type: 'number',
            },
            returnQuantity: {
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
            unitCost: {
              type: 'number',
            },
            uomId: {
              type: 'integer',
            },
            description: {
              type: 'string',
            },
            discount: {
              type: 'number',
            },
            itemCondition: {
              type: 'string',
            },
            landedCost: {
              type: 'number',
            },
            purchaseOrderItemId: {
              type: 'string',
            },
            purchaseOrderReceivingItemId: {
              type: 'string',
            },
            referenceNumber: {
              type: 'string',
            },
            returnReason: {
              type: 'string',
            },
            taxValue: {
              type: 'number',
            },
          },
          required: [
            'itemId',
            'price',
            'quantityOrdered',
            'quantityReceived',
            'returnQuantity',
            'taxId',
            'totalAmount',
            'totalCost',
            'totalLineAmount',
            'unitCost',
            'uomId',
          ],
        },
      },
      locationId: {
        type: 'string',
      },
      originalTotalAmount: {
        type: 'number',
      },
      returnDate: {
        type: 'string',
      },
      status: {
        type: 'integer',
      },
      supplierId: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      invoiceNumber: {
        type: 'string',
      },
      orderDate: {
        type: 'string',
      },
      purchaseOrderId: {
        type: 'string',
      },
      purchaseOrderNumber: {
        type: 'string',
      },
      purchaseOrderReceivingId: {
        type: 'string',
      },
      receivingDate: {
        type: 'string',
      },
      returnReason: {
        type: 'string',
      },
    },
    required: [
      'organizationId',
      'items',
      'locationId',
      'originalTotalAmount',
      'returnDate',
      'status',
      'supplierId',
    ],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.returnOrder.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
