// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.approval_matrix',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/approval-matrix/{id}',
};

export const tool: Tool = {
  name: 'update_v1_approval_matrix',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
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
      isActive: {
        type: 'boolean',
      },
    },
    required: ['id', 'organizationId', 'layers', 'rules', 'transactionTypes'],
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.v1.approvalMatrix.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
