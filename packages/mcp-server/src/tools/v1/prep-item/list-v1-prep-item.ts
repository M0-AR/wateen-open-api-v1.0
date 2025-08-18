// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.prep_item',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/PrepItem',
};

export const tool: Tool = {
  name: 'list_v1_prep_item',
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
      CategoryIds: {
        type: 'string',
      },
      ItemAllocations: {
        type: 'string',
      },
      Name: {
        type: 'string',
      },
      Status: {
        type: 'integer',
      },
      Types: {
        type: 'string',
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
  const response = await client.v1.prepItem.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
