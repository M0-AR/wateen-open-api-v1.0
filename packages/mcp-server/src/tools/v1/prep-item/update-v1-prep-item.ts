// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.prep_item',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/PrepItem',
};

export const tool: Tool = {
  name: 'update_v1_prep_item',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      Id: {
        type: 'string',
      },
      AdditionalInfo: {
        type: 'string',
      },
      Calory: {
        type: 'number',
      },
      CategoryId: {
        type: 'string',
      },
      CookInstructions: {
        type: 'string',
      },
      CookTime: {
        type: 'integer',
      },
      CostPerUnit: {
        type: 'number',
      },
      CostPerYield: {
        type: 'number',
      },
      CountingFrequency: {
        type: 'array',
        items: {
          $ref: '#/$defs/counting_frequency',
        },
      },
      Image: {
        type: 'string',
      },
      Ingredients: {
        type: 'array',
        items: {
          $ref: '#/$defs/ingredient',
        },
      },
      InventoryCount: {
        type: 'array',
        items: {
          $ref: '#/$defs/transaction_unit',
        },
      },
      ItemAllocationIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      Name: {
        type: 'string',
      },
      PARLevel: {
        type: 'integer',
      },
      PrepTime: {
        type: 'integer',
      },
      ProcedureFiles: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      ReorderLevel: {
        type: 'integer',
      },
      ReportUnit: {
        type: 'array',
        items: {
          $ref: '#/$defs/transaction_unit',
        },
      },
      Status: {
        type: 'integer',
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
          $ref: '#/$defs/transaction_unit',
        },
      },
      Wastage: {
        type: 'array',
        items: {
          $ref: '#/$defs/transaction_unit',
        },
      },
      YieldQty: {
        type: 'number',
      },
      YieldUOMId: {
        type: 'integer',
      },
    },
    required: ['organizationId', 'Id'],
    $defs: {
      counting_frequency: {
        type: 'object',
        properties: {
          frequency: {
            type: 'integer',
          },
          locationId: {
            type: 'integer',
          },
          locationName: {
            type: 'string',
          },
        },
      },
      ingredient: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          costPerUnit: {
            type: 'number',
          },
          grossQty: {
            type: 'number',
          },
          itemId: {
            type: 'string',
          },
          itemName: {
            type: 'string',
          },
          netQuantity: {
            type: 'number',
          },
          quantity: {
            type: 'number',
          },
          totalCost: {
            type: 'number',
          },
          type: {
            type: 'string',
            enum: [0, 1, 2],
          },
          unitOfMeasureId: {
            type: 'integer',
          },
          unitOfMeasureName: {
            type: 'string',
          },
          wastageInPercentage: {
            type: 'number',
          },
        },
      },
      transaction_unit: {
        type: 'object',
        properties: {
          baseConversionRate: {
            type: 'number',
          },
          conversionRate: {
            type: 'number',
          },
          unitOfMeasureId: {
            type: 'integer',
          },
          unitOfMeasureName: {
            type: 'string',
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
  const response = await client.v1.prepItem.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
