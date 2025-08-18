// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.requisition_queue',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/RequisitionQueue',
};

export const tool: Tool = {
  name: 'create_v1_requisition_queue',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      poDataList: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            deliveryDate: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  cost: {
                    type: 'number',
                  },
                  description: {
                    type: 'string',
                  },
                  discount: {
                    type: 'number',
                  },
                  itemId: {
                    type: 'string',
                  },
                  landedCost: {
                    type: 'number',
                  },
                  purchaseOptionId: {
                    type: 'string',
                  },
                  quantity: {
                    type: 'number',
                  },
                  rejectReason: {
                    type: 'string',
                  },
                  requisitionQueueAction: {
                    type: 'integer',
                  },
                  taxId: {
                    type: 'integer',
                  },
                  totalAmount: {
                    type: 'number',
                  },
                  totalCost: {
                    type: 'number',
                  },
                  totalLineAmount: {
                    type: 'number',
                  },
                  uomId: {
                    type: 'integer',
                  },
                },
              },
            },
            locationId: {
              type: 'string',
            },
            orderDate: {
              type: 'string',
            },
            purchaseRequestId: {
              type: 'string',
            },
            status: {
              type: 'integer',
            },
            supplierId: {
              type: 'string',
            },
          },
        },
      },
    },
    required: ['organizationId', 'poDataList'],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.requisitionQueue.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
