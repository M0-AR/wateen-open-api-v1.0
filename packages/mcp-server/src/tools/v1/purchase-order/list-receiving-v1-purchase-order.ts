// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.purchase_order',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/PurchaseOrder/PurchaseOrderReceiving',
};

export const tool: Tool = {
  name: 'list_receiving_v1_purchase_order',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      PurchaseOrderReceivingId: {
        type: 'string',
      },
      ItemName: {
        type: 'string',
      },
      OrganizationId: {
        type: 'string',
      },
    },
    required: ['PurchaseOrderReceivingId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.purchaseOrder.listReceiving(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
