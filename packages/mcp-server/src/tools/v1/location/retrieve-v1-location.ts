// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.location',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/Location/GetById/{id}',
};

export const tool: Tool = {
  name: 'retrieve_v1_location',
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
    },
    required: ['id', 'organizationId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.v1.location.retrieve(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
