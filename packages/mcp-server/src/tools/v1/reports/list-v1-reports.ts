// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/Reports',
};

export const tool: Tool = {
  name: 'list_v1_reports',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      OrganizationId: {
        type: 'string',
      },
      PageNumber: {
        type: 'integer',
      },
      PageSize: {
        type: 'integer',
      },
      IsFavorite: {
        type: 'boolean',
      },
      Name: {
        type: 'string',
      },
      TypeIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    required: ['OrganizationId', 'PageNumber', 'PageSize'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.reports.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
