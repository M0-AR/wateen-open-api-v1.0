// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.roles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/roles/add-user-role',
};

export const tool: Tool = {
  name: 'add_user_role_v1_roles',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      query_organizationId: {
        type: 'string',
      },
      locationId: {
        type: 'string',
      },
      body_organizationId: {
        type: 'string',
      },
      roleId: {
        type: 'integer',
      },
      userId: {
        type: 'integer',
      },
      isPreferredLocation: {
        type: 'boolean',
      },
    },
    required: ['query_organizationId', 'locationId', 'body_organizationId', 'roleId', 'userId'],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.roles.addUserRole(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
