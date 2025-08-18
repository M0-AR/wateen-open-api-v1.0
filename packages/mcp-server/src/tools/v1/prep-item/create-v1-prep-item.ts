// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.prep_item',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/PrepItem',
};

export const tool: Tool = {
  name: 'create_v1_prep_item',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      CategoryId: {
        type: 'string',
      },
      Name: {
        type: 'string',
      },
      YieldUOMId: {
        type: 'integer',
      },
      AdditionalInfo: {
        type: 'string',
      },
      Calory: {
        type: 'number',
      },
      Code: {
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
          type: 'string',
        },
      },
      IsAutoCodeGeneration: {
        type: 'boolean',
      },
      ItemAllocationIds: {
        type: 'array',
        items: {
          type: 'string',
        },
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
          type: 'string',
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
          type: 'string',
        },
      },
      Type: {
        type: 'string',
        enum: [0, 1, 2],
      },
      Wastage: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      YieldQty: {
        type: 'number',
      },
    },
    required: ['organizationId', 'CategoryId', 'Name', 'YieldUOMId'],
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
    },
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.prepItem.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
