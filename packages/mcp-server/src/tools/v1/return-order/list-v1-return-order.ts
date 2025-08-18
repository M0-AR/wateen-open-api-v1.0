// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.return_order',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/ReturnOrder',
};

export const tool: Tool = {
  name: 'list_v1_return_order',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      PageNumber: {
        type: 'integer',
      },
      PageSize: {
        type: 'integer',
      },
      DateRange: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      PurchaseOrderId: {
        type: 'string',
      },
      ReturnNumber: {
        type: 'string',
      },
      Status: {
        type: 'string',
      },
      SupplierId: {
        type: 'string',
      },
    },
    required: ['organizationId', 'PageNumber', 'PageSize'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.returnOrder.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
