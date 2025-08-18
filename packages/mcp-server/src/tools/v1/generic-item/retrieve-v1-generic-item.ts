// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.generic_item',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/GenericItem/{itemId}',
};

export const tool: Tool = {
  name: 'retrieve_v1_generic_item',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      itemId: {
        type: 'string',
      },
      organizationId: {
        type: 'string',
      },
      itemLocationId: {
        type: 'string',
      },
    },
    required: ['itemId', 'organizationId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const { itemId, ...body } = args as any;
  const response = await client.v1.genericItem.retrieve(itemId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
