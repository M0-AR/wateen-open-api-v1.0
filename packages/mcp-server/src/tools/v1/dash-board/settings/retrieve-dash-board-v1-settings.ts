// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.dash_board.settings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/DashBoard/Settings/{widgetType}',
};

export const tool: Tool = {
  name: 'retrieve_dash_board_v1_settings',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      widgetType: {
        type: 'integer',
      },
      organizationId: {
        type: 'string',
      },
    },
    required: ['widgetType', 'organizationId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const { widgetType, ...body } = args as any;
  const response = await client.v1.dashBoard.settings.retrieve(widgetType, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
