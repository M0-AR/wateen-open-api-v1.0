// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.menu_item',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/MenuItem',
};

export const tool: Tool = {
  name: 'create_v1_menu_item',
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
      AdditionalInfo: {
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
      IsAutoCodeGeneration: {
        type: 'boolean',
      },
      MaxFoodCost: {
        type: 'number',
      },
      PosCode: {
        type: 'string',
      },
      PrepTime: {
        type: 'integer',
      },
      Price: {
        type: 'number',
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
    required: ['organizationId', 'CategoryId', 'Name'],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.menuItem.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
