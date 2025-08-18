// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.inventoryitem',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/inventoryitem',
};

export const tool: Tool = {
  name: 'create_v1_inventoryitem',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      AvgCost: {
        type: 'number',
      },
      Name: {
        type: 'string',
      },
      PARLevel: {
        type: 'integer',
      },
      ReorderLevel: {
        type: 'integer',
      },
      StartingCost: {
        type: 'number',
      },
      Status: {
        type: 'integer',
      },
      Tolerance: {
        type: 'integer',
      },
      WastagePercentage: {
        type: 'number',
      },
      Calory: {
        type: 'number',
      },
      CategoryId: {
        type: 'string',
      },
      Code: {
        type: 'string',
      },
      CountingFrequency: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
      Image: {
        type: 'string',
      },
      InventoryCount: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      IsAutoCodeGeneration: {
        type: 'boolean',
      },
      ItemAllocation: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      ParentUnitOfMeasureTypeId: {
        type: 'integer',
      },
      PurchaseOptions: {
        type: 'array',
        items: {
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
            itemAllocationIds: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            itemCode: {
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
            supplierItem: {
              type: 'string',
            },
            taxRate: {
              type: 'integer',
            },
            unitOfMeasureId: {
              type: 'integer',
            },
            unitOfMeasureQty: {
              type: 'number',
            },
          },
        },
      },
      ReportUnit: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      StorageAreaIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      Transfer: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      Wastage: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    required: [
      'organizationId',
      'AvgCost',
      'Name',
      'PARLevel',
      'ReorderLevel',
      'StartingCost',
      'Status',
      'Tolerance',
      'WastagePercentage',
    ],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.inventoryitem.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
