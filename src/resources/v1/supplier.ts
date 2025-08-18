// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Supplier extends APIResource {
  retrieve(id: string, query: SupplierRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/Supplier/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveCount(query: SupplierRetrieveCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Supplier/Count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveSupplier(query: SupplierRetrieveSupplierParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Supplier', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  supplier(params: SupplierSupplierParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post(
      '/api/v1/Supplier',
      multipartFormRequestOptions(
        {
          query: { organizationId },
          body,
          ...options,
          headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        },
        this._client,
      ),
    );
  }

  updateBulkUpdate(params: SupplierUpdateBulkUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Supplier/BulkUpdate', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateSupplier(params: SupplierUpdateSupplierParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put(
      '/api/v1/Supplier',
      multipartFormRequestOptions(
        {
          query: { organizationId },
          body,
          ...options,
          headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        },
        this._client,
      ),
    );
  }
}

export interface DistributerData {
  id?: string | null;

  address?: string | null;

  ccEmails?: string | null;

  cityId?: string | null;

  countryId?: string | null;

  email?: string | null;

  firstName?: string | null;

  isActive?: boolean;

  lastName?: string | null;

  locationIds?: Array<string> | null;

  name?: string | null;

  phone?: string | null;

  viaEmail?: boolean;

  viaSMS?: boolean;

  viaWhatsApp?: boolean;
}

export interface SupplierRetrieveParams {
  organizationId: string;
}

export interface SupplierRetrieveCountParams {
  organizationId: string;
}

export interface SupplierRetrieveSupplierParams {
  organizationId: string;

  CategoryIds?: string;

  Name?: string;

  PageNumber?: number;

  PageSize?: number;

  Status?: number;

  Type?: string;
}

export interface SupplierSupplierParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  AdditionalInfo?: string;

  /**
   * Body param:
   */
  Address?: string;

  /**
   * Body param:
   */
  AddressLine1?: string;

  /**
   * Body param:
   */
  AddressLine2?: string;

  /**
   * Body param:
   */
  AltPhone?: string;

  /**
   * Body param:
   */
  CategoryIds?: Array<string>;

  /**
   * Body param:
   */
  CCEmails?: string;

  /**
   * Body param:
   */
  CityId?: string;

  /**
   * Body param:
   */
  Code?: string;

  /**
   * Body param:
   */
  CountryId?: string;

  /**
   * Body param:
   */
  CRNumber?: string;

  /**
   * Body param:
   */
  Distributers?: Array<DistributerData>;

  /**
   * Body param:
   */
  Email?: string;

  /**
   * Body param:
   */
  FirstName?: string;

  /**
   * Body param:
   */
  Image?: Uploadable;

  /**
   * Body param:
   */
  IsActive?: boolean;

  /**
   * Body param:
   */
  IsAutoCodeGeneration?: boolean;

  /**
   * Body param:
   */
  IsDraft?: boolean;

  /**
   * Body param:
   */
  LastName?: string;

  /**
   * Body param:
   */
  LegalName?: string;

  /**
   * Body param:
   */
  Name?: string;

  /**
   * Body param:
   */
  Phone?: string;

  /**
   * Body param:
   */
  PostalCode?: string;

  /**
   * Body param:
   */
  StateOrRegion?: string;

  /**
   * Body param:
   */
  Type?: number;

  /**
   * Body param:
   */
  VATNumber?: string;

  /**
   * Body param:
   */
  ViaEmail?: boolean;

  /**
   * Body param:
   */
  ViaSMS?: boolean;

  /**
   * Body param:
   */
  ViaWhatsApp?: boolean;
}

export interface SupplierUpdateBulkUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  categoryIds?: string | null;

  /**
   * Body param:
   */
  ids?: Array<string> | null;

  /**
   * Body param:
   */
  isActive?: boolean | null;

  /**
   * Body param:
   */
  type?: number | null;
}

export interface SupplierUpdateSupplierParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  AdditionalInfo?: string;

  /**
   * Body param:
   */
  Address?: string;

  /**
   * Body param:
   */
  AddressLine1?: string;

  /**
   * Body param:
   */
  AddressLine2?: string;

  /**
   * Body param:
   */
  AltPhone?: string;

  /**
   * Body param:
   */
  CategoryIds?: Array<string>;

  /**
   * Body param:
   */
  CCEmails?: string;

  /**
   * Body param:
   */
  CityId?: string;

  /**
   * Body param:
   */
  Code?: string;

  /**
   * Body param:
   */
  CountryId?: string;

  /**
   * Body param:
   */
  CRNumber?: string;

  /**
   * Body param:
   */
  Distributers?: Array<DistributerData>;

  /**
   * Body param:
   */
  Email?: string;

  /**
   * Body param:
   */
  FirstName?: string;

  /**
   * Body param:
   */
  Id?: string;

  /**
   * Body param:
   */
  Image?: Uploadable;

  /**
   * Body param:
   */
  IsActive?: boolean;

  /**
   * Body param:
   */
  IsAutoCodeGeneration?: boolean;

  /**
   * Body param:
   */
  IsDraft?: boolean;

  /**
   * Body param:
   */
  LastName?: string;

  /**
   * Body param:
   */
  LegalName?: string;

  /**
   * Body param:
   */
  Name?: string;

  /**
   * Body param:
   */
  Phone?: string;

  /**
   * Body param:
   */
  PostalCode?: string;

  /**
   * Body param:
   */
  StateOrRegion?: string;

  /**
   * Body param:
   */
  Type?: number;

  /**
   * Body param:
   */
  VATNumber?: string;

  /**
   * Body param:
   */
  ViaEmail?: boolean;

  /**
   * Body param:
   */
  ViaSMS?: boolean;

  /**
   * Body param:
   */
  ViaWhatsApp?: boolean;
}

export declare namespace Supplier {
  export {
    type DistributerData as DistributerData,
    type SupplierRetrieveParams as SupplierRetrieveParams,
    type SupplierRetrieveCountParams as SupplierRetrieveCountParams,
    type SupplierRetrieveSupplierParams as SupplierRetrieveSupplierParams,
    type SupplierSupplierParams as SupplierSupplierParams,
    type SupplierUpdateBulkUpdateParams as SupplierUpdateBulkUpdateParams,
    type SupplierUpdateSupplierParams as SupplierUpdateSupplierParams,
  };
}
