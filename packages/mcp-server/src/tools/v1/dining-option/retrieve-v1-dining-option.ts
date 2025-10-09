// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'wateen-open-api-v1.0-mcp/filtering';
import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.dining_option',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/DiningOption/{id}',
};

export const tool: Tool = {
  name: 'retrieve_v1_dining_option',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/dining_option_retrieve_response',\n  $defs: {\n    dining_option_retrieve_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        diningOptionId: {\n          type: 'string'\n        },\n        hasDiningOptionId: {\n          type: 'boolean'\n        },\n        hasMessage: {\n          type: 'boolean'\n        },\n        isActive: {\n          type: 'boolean'\n        },\n        isAggregator: {\n          type: 'boolean'\n        },\n        isDefault: {\n          type: 'boolean'\n        },\n        isFailed: {\n          type: 'boolean'\n        },\n        isSuccess: {\n          type: 'boolean'\n        },\n        message: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      organizationId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'organizationId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v1.diningOption.retrieve(id, body)));
};

export default { metadata, tool, handler };
