// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'wateen-open-api-v1.0-mcp/filtering';
import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'account',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/Account/Login',
};

export const tool: Tool = {
  name: 'login_account',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/login_response',\n  $defs: {\n    login_response: {\n      type: 'object',\n      properties: {\n        accessToken: {\n          type: 'string'\n        },\n        expiresIn: {\n          type: 'integer'\n        },\n        idToken: {\n          type: 'string'\n        },\n        notBeforePolicy: {\n          type: 'integer'\n        },\n        refreshExpiresIn: {\n          type: 'integer'\n        },\n        refreshToken: {\n          type: 'string'\n        },\n        scope: {\n          type: 'string'\n        },\n        sessionState: {\n          type: 'string'\n        },\n        tokenType: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
      },
      clientSecret: {
        type: 'string',
      },
      grantType: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
      scope: {
        type: 'string',
      },
      userName: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.account.login(body)));
};

export default { metadata, tool, handler };
