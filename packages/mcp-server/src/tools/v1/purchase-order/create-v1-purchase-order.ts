// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'wateen-open-api-v1.0-mcp/filtering';
import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.purchase_order',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/PurchaseOrder',
};

export const tool: Tool = {
  name: 'create_v1_purchase_order',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/purchase_order_create_response',\n  $defs: {\n    purchase_order_create_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        isFailed: {\n          type: 'boolean'\n        },\n        isSuccess: {\n          type: 'boolean'\n        },\n        message: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      deliveryDate: {
        type: 'string',
        format: 'date-time',
      },
      description: {
        type: 'string',
      },
      items: {
        type: 'array',
        items: {
          $ref: '#/$defs/purchase_order_item_data',
        },
      },
      locationId: {
        type: 'string',
      },
      orderDate: {
        type: 'string',
        format: 'date-time',
      },
      organizationId: {
        type: 'string',
      },
      status: {
        type: 'integer',
      },
      supplierId: {
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
    $defs: {
      purchase_order_item_data: {
        type: 'object',
        properties: {
          cost: {
            type: 'number',
          },
          description: {
            type: 'string',
          },
          discount: {
            type: 'number',
          },
          itemId: {
            type: 'string',
          },
          landedCost: {
            type: 'number',
          },
          purchaseOptionId: {
            type: 'string',
          },
          quantity: {
            type: 'number',
          },
          taxId: {
            type: 'integer',
          },
          totalAmount: {
            type: 'number',
          },
          totalCost: {
            type: 'number',
          },
          totalLineAmount: {
            type: 'number',
          },
          uomId: {
            type: 'integer',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v1.purchaseOrder.create(body)));
};

export default { metadata, tool, handler };
