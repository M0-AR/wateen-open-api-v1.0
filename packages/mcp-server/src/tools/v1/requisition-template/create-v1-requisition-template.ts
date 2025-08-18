// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.requisition_template',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/RequisitionTemplate',
};

export const tool: Tool = {
  name: 'create_v1_requisition_template',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      templateName: {
        type: 'string',
      },
      type: {
        type: 'integer',
      },
      description: {
        type: 'string',
      },
      isActive: {
        type: 'boolean',
      },
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            daysToDeliver: {
              type: 'integer',
            },
            itemId: {
              type: 'string',
            },
            itemTypeId: {
              type: 'integer',
            },
            qty: {
              type: 'number',
            },
            description: {
              type: 'string',
            },
            uom: {
              type: 'integer',
            },
          },
          required: ['daysToDeliver', 'itemId', 'itemTypeId', 'qty'],
        },
      },
      locations: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    required: ['organizationId', 'templateName', 'type'],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.v1.requisitionTemplate.create(body)) as object);
};

export default { metadata, tool, handler };
