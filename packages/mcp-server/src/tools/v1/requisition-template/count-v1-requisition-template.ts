// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.requisition_template',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/RequisitionTemplate/AllRequisitionTemplateCount',
};

export const tool: Tool = {
  name: 'count_v1_requisition_template',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
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
  return asTextContentResult((await client.v1.requisitionTemplate.count(body)) as object);
};

export default { metadata, tool, handler };
