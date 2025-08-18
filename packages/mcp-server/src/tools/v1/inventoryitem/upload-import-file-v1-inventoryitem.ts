// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.inventoryitem',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/inventoryitem/UploadImportFile',
};

export const tool: Tool = {
  name: 'upload_import_file_v1_inventoryitem',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      File: {
        type: 'string',
      },
      ImportType: {
        type: 'string',
      },
    },
    required: ['organizationId', 'File', 'ImportType'],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.inventoryitem.uploadImportFile(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
