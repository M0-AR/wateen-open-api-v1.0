// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.return_order',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/ReturnOrder/EligibleItems',
};

export const tool: Tool = {
  name: 'eligible_items_v1_return_order',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      LocationId: {
        type: 'string',
      },
      PurchaseOrderId: {
        type: 'string',
      },
      SupplierId: {
        type: 'string',
      },
    },
    required: ['organizationId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.returnOrder.eligibleItems(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
