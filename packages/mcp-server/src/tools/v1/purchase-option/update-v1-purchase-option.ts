// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.purchase_option',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/PurchaseOption',
};

export const tool: Tool = {
  name: 'update_v1_purchase_option',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      currency: {
        type: 'integer',
      },
      enablePurchase: {
        type: 'boolean',
      },
      isActive: {
        type: 'boolean',
      },
      isDeleted: {
        type: 'boolean',
      },
      organizationId: {
        type: 'string',
      },
      prefered: {
        type: 'boolean',
      },
      price: {
        type: 'number',
      },
      productId: {
        type: 'string',
      },
      supplierId: {
        type: 'string',
      },
      taxRate: {
        type: 'number',
      },
      unitOfMeasureId: {
        type: 'integer',
      },
      unitOfMeasureQty: {
        type: 'number',
      },
      itemAllocationIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      itemCode: {
        type: 'string',
      },
      supplierItem: {
        type: 'string',
      },
    },
    required: [
      'id',
      'currency',
      'enablePurchase',
      'isActive',
      'isDeleted',
      'organizationId',
      'prefered',
      'price',
      'productId',
      'supplierId',
      'taxRate',
      'unitOfMeasureId',
      'unitOfMeasureQty',
    ],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.purchaseOption.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
