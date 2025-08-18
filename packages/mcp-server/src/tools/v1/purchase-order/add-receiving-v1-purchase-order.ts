// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.purchase_order',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/PurchaseOrder/AddPurchaseOrderReceiving',
};

export const tool: Tool = {
  name: 'add_receiving_v1_purchase_order',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      AmountIncTax: {
        type: 'number',
      },
      Attachments: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      GRNDiscountType: {
        type: 'string',
      },
      GRNDiscountValue: {
        type: 'number',
      },
      GRNSubTotal: {
        type: 'number',
      },
      GRNTaxesSummary: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            value: {
              type: 'number',
            },
          },
        },
      },
      GRNTotal: {
        type: 'number',
      },
      GRNTotalTax: {
        type: 'number',
      },
      InvoiceNumber: {
        type: 'string',
      },
      Items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            discount: {
              type: 'number',
            },
            discountAmount: {
              type: 'number',
            },
            discountType: {
              type: 'string',
            },
            itemId: {
              type: 'string',
            },
            landedCost: {
              type: 'number',
            },
            orderedQty: {
              type: 'number',
            },
            price: {
              type: 'number',
            },
            receivedQty: {
              type: 'number',
            },
            remainingQty: {
              type: 'number',
            },
            taxId: {
              type: 'integer',
            },
            taxValue: {
              type: 'number',
            },
            totalAmount: {
              type: 'number',
            },
            uomId: {
              type: 'integer',
            },
          },
        },
      },
      NotesAndRemarks: {
        type: 'string',
      },
      OrganizationId: {
        type: 'string',
      },
      PurchaseOrderId: {
        type: 'string',
      },
      ReceivingDate: {
        type: 'string',
        format: 'date-time',
      },
      TotalTax: {
        type: 'integer',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.purchaseOrder.addReceiving(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
