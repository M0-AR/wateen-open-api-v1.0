// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.requisition_queue',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/RequisitionQueue/GetAllRequisitionQueue',
};

export const tool: Tool = {
  name: 'list_v1_requisition_queue',
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
      FromDate: {
        type: 'string',
      },
      ItemName: {
        type: 'string',
      },
      ItemType: {
        type: 'string',
      },
      LocationId: {
        type: 'string',
      },
      PurchaseRequestIds: {
        type: 'string',
      },
      ToDate: {
        type: 'string',
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
  const response = await client.v1.requisitionQueue.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
