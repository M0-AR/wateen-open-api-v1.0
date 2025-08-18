// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.transaction_prefix',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/TransactionPrefix',
};

export const tool: Tool = {
  name: 'update_transaction_prefix_v1_transaction_prefix',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      id: {
        type: 'integer',
      },
      initialNumber: {
        type: 'integer',
      },
      minimumDigits: {
        type: 'integer',
      },
      prefix: {
        type: 'string',
      },
      useBrand: {
        type: 'boolean',
      },
      useLocation: {
        type: 'boolean',
      },
      useYear: {
        type: 'boolean',
      },
    },
    required: ['organizationId', 'id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.transactionPrefix.updateTransactionPrefix(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
