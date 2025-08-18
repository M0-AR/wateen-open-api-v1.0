// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.modifier',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/Modifier/GetBrandLocationDiningOptions',
};

export const tool: Tool = {
  name: 'get_brand_location_dining_options_v1_modifier',
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
      DiningOptionIds: {
        type: 'string',
      },
      LocationIds: {
        type: 'string',
      },
      SearchTerm: {
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
  const response = await client.v1.modifier.getBrandLocationDiningOptions(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
