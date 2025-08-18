// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.location',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/Location/all',
};

export const tool: Tool = {
  name: 'list_all_v1_location',
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
      IsActive: {
        type: 'boolean',
      },
      LocationTypes: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
      Name: {
        type: 'string',
      },
      ParentLocations: {
        type: 'array',
        items: {
          type: 'string',
        },
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
  const response = await client.v1.location.listAll(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
