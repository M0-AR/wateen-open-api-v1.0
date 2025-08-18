// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wateen-open-api-v1.0-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import WateenOpenAPIV1_0 from 'wateen-open-api-v1.0';

export const metadata: Metadata = {
  resource: 'v1.supplier',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/Supplier',
};

export const tool: Tool = {
  name: 'supplier_v1_supplier',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      AdditionalInfo: {
        type: 'string',
      },
      Address: {
        type: 'string',
      },
      AddressLine1: {
        type: 'string',
      },
      AddressLine2: {
        type: 'string',
      },
      AltPhone: {
        type: 'string',
      },
      CategoryIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      CCEmails: {
        type: 'string',
      },
      CityId: {
        type: 'string',
      },
      Code: {
        type: 'string',
      },
      CountryId: {
        type: 'string',
      },
      CRNumber: {
        type: 'string',
      },
      Distributers: {
        type: 'array',
        items: {
          $ref: '#/$defs/distributer_data',
        },
      },
      Email: {
        type: 'string',
      },
      FirstName: {
        type: 'string',
      },
      Image: {
        type: 'string',
      },
      IsActive: {
        type: 'boolean',
      },
      IsAutoCodeGeneration: {
        type: 'boolean',
      },
      IsDraft: {
        type: 'boolean',
      },
      LastName: {
        type: 'string',
      },
      LegalName: {
        type: 'string',
      },
      Name: {
        type: 'string',
      },
      Phone: {
        type: 'string',
      },
      PostalCode: {
        type: 'string',
      },
      StateOrRegion: {
        type: 'string',
      },
      Type: {
        type: 'integer',
      },
      VATNumber: {
        type: 'string',
      },
      ViaEmail: {
        type: 'boolean',
      },
      ViaSMS: {
        type: 'boolean',
      },
      ViaWhatsApp: {
        type: 'boolean',
      },
    },
    required: ['organizationId'],
    $defs: {
      distributer_data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          address: {
            type: 'string',
          },
          ccEmails: {
            type: 'string',
          },
          cityId: {
            type: 'string',
          },
          countryId: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          firstName: {
            type: 'string',
          },
          isActive: {
            type: 'boolean',
          },
          lastName: {
            type: 'string',
          },
          locationIds: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          name: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          viaEmail: {
            type: 'boolean',
          },
          viaSMS: {
            type: 'boolean',
          },
          viaWhatsApp: {
            type: 'boolean',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: WateenOpenAPIV1_0, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.supplier.supplier(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
