// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.transfer.transfer_out',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/Transfer/TransferOut/Fulfill',
};

export const tool: Tool = {
  name: 'fulfill_transfer_v1_transfer_out',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      fulfillmentDate: {
        type: 'string',
        format: 'date-time',
      },
      transferItems: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            itemQuantities: {
              type: 'array',
              items: {
                $ref: '#/$defs/transfer_item_quantity',
              },
            },
          },
          required: ['id', 'itemQuantities'],
        },
      },
      sourceNote: {
        type: 'string',
      },
    },
    required: ['organizationId', 'id', 'fulfillmentDate', 'transferItems'],
    $defs: {
      transfer_item_quantity: {
        type: 'object',
        properties: {
          quantity: {
            type: 'number',
          },
          unitOfMeasureQuantityId: {
            type: 'string',
          },
        },
        required: ['quantity', 'unitOfMeasureQuantityId'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.transfer.transferOut.fulfill(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
