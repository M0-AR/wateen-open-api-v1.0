// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.inventoryitem',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/inventoryitem',
};

export const tool: Tool = {
  name: 'update_v1_inventoryitem',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      Id: {
        type: 'string',
      },
      AvgCost: {
        type: 'number',
      },
      Calory: {
        type: 'number',
      },
      CategoryId: {
        type: 'string',
      },
      Code: {
        type: 'string',
      },
      CountingFrequency: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
      Image: {
        type: 'string',
      },
      InventoryCount: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      IsAutoCodeGeneration: {
        type: 'boolean',
      },
      ItemAllocation: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      Name: {
        type: 'string',
      },
      ParentUnitOfMeasureTypeId: {
        type: 'integer',
      },
      PARLevel: {
        type: 'integer',
      },
      ReorderLevel: {
        type: 'integer',
      },
      ReportUnit: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      StartingCost: {
        type: 'number',
      },
      Status: {
        type: 'integer',
      },
      StorageAreaIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      Tolerance: {
        type: 'integer',
      },
      Transfer: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      Wastage: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      WastagePercentage: {
        type: 'number',
      },
    },
    required: ['organizationId', 'Id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.inventoryitem.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
