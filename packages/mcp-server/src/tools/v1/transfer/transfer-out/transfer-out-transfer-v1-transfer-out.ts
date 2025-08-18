// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.transfer.transfer_out',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/Transfer/TransferOut',
};

export const tool: Tool = {
  name: 'transfer_out_transfer_v1_transfer_out',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      destinationLocationId: {
        type: 'string',
      },
      fulfillmentDate: {
        type: 'string',
        format: 'date-time',
      },
      sourceLocationId: {
        type: 'string',
      },
      transferItems: {
        type: 'array',
        items: {
          $ref: '#/$defs/transfer_item',
        },
      },
      sourceNote: {
        type: 'string',
      },
    },
    required: [
      'organizationId',
      'destinationLocationId',
      'fulfillmentDate',
      'sourceLocationId',
      'transferItems',
    ],
    $defs: {
      transfer_item: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          unitOfMeasureType: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
              },
              unitOfMeasureQuantities: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'integer',
                    },
                    quantity: {
                      type: 'number',
                    },
                  },
                  required: ['id', 'quantity'],
                },
              },
            },
            required: ['id', 'unitOfMeasureQuantities'],
          },
        },
        required: ['id', 'unitOfMeasureType'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.transfer.transferOut.transferOut(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
