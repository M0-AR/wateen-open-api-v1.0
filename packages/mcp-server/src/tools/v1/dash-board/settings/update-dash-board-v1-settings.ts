// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.dash_board.settings',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/DashBoard/Settings',
};

export const tool: Tool = {
  name: 'update_dash_board_v1_settings',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      widgets: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            currentOrder: {
              type: 'integer',
            },
            currentVisibility: {
              type: 'boolean',
            },
          },
          required: ['id', 'currentOrder', 'currentVisibility'],
        },
      },
    },
    required: ['organizationId', 'widgets'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.dashBoard.settings.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
