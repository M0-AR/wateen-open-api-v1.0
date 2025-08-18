// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.storage_area',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/StorageArea',
};

export const tool: Tool = {
  name: 'retrieve_storage_area_v1_storage_area',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      BrandIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      IsActive: {
        type: 'boolean',
      },
      LocationIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      Name: {
        type: 'string',
      },
      PageNumber: {
        type: 'integer',
      },
      PageSize: {
        type: 'integer',
      },
    },
    required: ['organizationId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.storageArea.retrieveStorageArea(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
