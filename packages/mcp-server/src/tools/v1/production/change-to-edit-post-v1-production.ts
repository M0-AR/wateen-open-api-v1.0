// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.production',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/Production/ChangeProductionToEditPost/{id}',
};

export const tool: Tool = {
  name: 'change_to_edit_post_v1_production',
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
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.v1.production.changeToEditPost(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
