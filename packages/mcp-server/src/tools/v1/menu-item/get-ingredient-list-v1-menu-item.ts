// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.menu_item',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/MenuItem/GetIngredientList',
};

export const tool: Tool = {
  name: 'get_ingredient_list_v1_menu_item',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      menuItemId: {
        type: 'string',
      },
      organizationId: {
        type: 'string',
      },
      pageNumber: {
        type: 'integer',
      },
      pageSize: {
        type: 'integer',
      },
      diningOptionIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      locationIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      searchTerm: {
        type: 'string',
      },
    },
    required: ['menuItemId', 'organizationId', 'pageNumber', 'pageSize'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.menuItem.getIngredientList(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
