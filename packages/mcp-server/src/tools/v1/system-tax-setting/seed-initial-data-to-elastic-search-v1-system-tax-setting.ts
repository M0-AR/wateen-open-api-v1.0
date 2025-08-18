// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.system_tax_setting',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/SystemTaxSetting/SeedInitialDataToElasticSearch',
};

export const tool: Tool = {
  name: 'seed_initial_data_to_elastic_search_v1_system_tax_setting',
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
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.systemTaxSetting.seedInitialDataToElasticSearch(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
