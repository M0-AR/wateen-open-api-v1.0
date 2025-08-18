// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.transfer.transfer_in',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/Transfer/TransferIn',
};

export const tool: Tool = {
  name: 'retrieve_transfer_in_transfer_v1_transfer_in',
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
      FulfillingDate: {
        type: 'object',
        properties: {
          End: {
            type: 'string',
            format: 'date-time',
          },
          Start: {
            type: 'string',
            format: 'date-time',
          },
        },
      },
      LocationId: {
        type: 'string',
      },
      RequestDate: {
        type: 'object',
        properties: {
          End: {
            type: 'string',
            format: 'date-time',
          },
          Start: {
            type: 'string',
            format: 'date-time',
          },
        },
      },
      SearchTerm: {
        type: 'string',
      },
      Status: {
        type: 'integer',
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
  const response = await client.v1.transfer.transferIn.retrieveTransferIn(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
