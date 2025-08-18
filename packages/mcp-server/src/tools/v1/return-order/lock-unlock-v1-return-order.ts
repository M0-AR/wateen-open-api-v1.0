// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.return_order',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/ReturnOrder/LockUnlock',
};

export const tool: Tool = {
  name: 'lock_unlock_v1_return_order',
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
      isLocked: {
        type: 'boolean',
      },
    },
    required: ['organizationId', 'id', 'isLocked'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.returnOrder.lockUnlock(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
