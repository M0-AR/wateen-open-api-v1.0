// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.approval_matrix',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/approval-matrix',
};

export const tool: Tool = {
  name: 'create_v1_approval_matrix',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      layers: {
        type: 'array',
        items: {
          $ref: '#/$defs/approval_layer',
        },
      },
      rules: {
        type: 'array',
        items: {
          $ref: '#/$defs/approval_rule',
        },
      },
      transactionTypes: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
    },
    required: ['organizationId', 'layers', 'rules', 'transactionTypes'],
    $defs: {
      approval_layer: {
        type: 'object',
        properties: {
          amount: {
            type: 'number',
          },
          approvalCondition: {
            type: 'object',
            properties: {
              type: {
                type: 'integer',
              },
              values: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
          order: {
            type: 'integer',
          },
        },
      },
      approval_rule: {
        type: 'object',
        properties: {
          type: {
            type: 'integer',
          },
          values: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.approvalMatrix.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
