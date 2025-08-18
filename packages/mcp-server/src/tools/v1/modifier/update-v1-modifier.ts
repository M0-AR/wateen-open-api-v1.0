// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.modifier',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/Modifier',
};

export const tool: Tool = {
  name: 'update_v1_modifier',
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
      CategoryId: {
        type: 'string',
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
      FoodCost: {
        type: 'number',
      },
      GroupId: {
        type: 'string',
      },
      Image: {
        type: 'string',
      },
      Ingredients: {
        type: 'array',
        items: {
          $ref: '#/$defs/ingredients_data',
        },
      },
      IsAutoCodeGeneration: {
        type: 'boolean',
      },
      MaxFoodCost: {
        type: 'number',
      },
      Name: {
        type: 'string',
      },
      POSCode: {
        type: 'string',
      },
      PrepTime: {
        type: 'integer',
      },
      Price: {
        type: 'number',
      },
      PriceList: {
        type: 'array',
        items: {
          $ref: '#/$defs/price_list_data',
        },
      },
      ProcedureFiles: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      RecipeCost: {
        type: 'number',
      },
      ShowLocationsColumn: {
        type: 'boolean',
      },
      Status: {
        type: 'integer',
      },
      Synchoronization: {
        type: 'boolean',
      },
    },
    required: ['organizationId', 'Id'],
    $defs: {
      ingredients_data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          costPerUnit: {
            type: 'number',
          },
          excludeDiningOptionIds: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          excludeLocationIds: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          grossQty: {
            type: 'number',
          },
          grossWastage: {
            type: 'number',
          },
          itemId: {
            type: 'string',
          },
          netQty: {
            type: 'number',
          },
          recipeCosting: {
            type: 'boolean',
          },
          totalCost: {
            type: 'number',
          },
          type: {
            type: 'integer',
          },
          uomId: {
            type: 'integer',
          },
          wastageInPercentage: {
            type: 'number',
          },
        },
      },
      price_list_data: {
        type: 'object',
        properties: {
          brandId: {
            type: 'string',
          },
          diningOptionId: {
            type: 'string',
          },
          foodCostPercentage: {
            type: 'number',
          },
          isActive: {
            type: 'boolean',
          },
          itemId: {
            type: 'string',
          },
          locationId: {
            type: 'string',
          },
          maxCostPercentage: {
            type: 'number',
          },
          netPrice: {
            type: 'number',
          },
          recipeCost: {
            type: 'number',
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
  const response = await client.v1.modifier.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
