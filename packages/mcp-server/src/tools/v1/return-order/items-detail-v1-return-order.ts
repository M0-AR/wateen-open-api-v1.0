// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.return_order',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/ReturnOrder/ItemsDetail/{returnOrderId}',
};

export const tool: Tool = {
  name: 'items_detail_v1_return_order',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      returnOrderId: {
        type: 'string',
      },
      organizationId: {
        type: 'string',
      },
      CategoryId: {
        type: 'string',
      },
      ItemTypeId: {
        type: 'string',
      },
      SearchTerm: {
        type: 'string',
      },
    },
    required: ['returnOrderId', 'organizationId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const { returnOrderId, ...body } = args as any;
  const response = await client.v1.returnOrder.itemsDetail(returnOrderId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
