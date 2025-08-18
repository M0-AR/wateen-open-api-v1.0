// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PurchaseOption extends APIResource {
  create(body: PurchaseOptionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/PurchaseOption', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(id: string, query: PurchaseOptionRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/PurchaseOption/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(body: PurchaseOptionUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/v1/PurchaseOption', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: PurchaseOptionListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PurchaseOption', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(body: PurchaseOptionDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/api/v1/PurchaseOption', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listSuppliers(query: PurchaseOptionListSuppliersParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PurchaseOption/suppliers', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PurchaseOptionCreateParams {
  currency: number;

  enablePurchase: boolean;

  isActive: boolean;

  organizationId: string;

  prefered: boolean;

  price: number;

  productId: string;

  supplierId: string;

  taxRate: number;

  unitOfMeasureId: number;

  unitOfMeasureQty: number;

  itemAllocationIds?: Array<string> | null;

  itemCode?: string | null;

  supplierItem?: string | null;
}

export interface PurchaseOptionRetrieveParams {
  organizationId: string;
}

export interface PurchaseOptionUpdateParams {
  id: string;

  currency: number;

  enablePurchase: boolean;

  isActive: boolean;

  isDeleted: boolean;

  organizationId: string;

  prefered: boolean;

  price: number;

  productId: string;

  supplierId: string;

  taxRate: number;

  unitOfMeasureId: number;

  unitOfMeasureQty: number;

  itemAllocationIds?: Array<string> | null;

  itemCode?: string | null;

  supplierItem?: string | null;
}

export interface PurchaseOptionListParams {
  organizationId: string;

  name?: string;

  pageNumber?: number;

  pageSize?: number;
}

export interface PurchaseOptionDeleteParams {
  id: string;

  organizationId: string;
}

export interface PurchaseOptionListSuppliersParams {
  organizationId: string;

  isActive?: boolean;

  pageNumber?: number;

  pageSize?: number;
}

export declare namespace PurchaseOption {
  export {
    type PurchaseOptionCreateParams as PurchaseOptionCreateParams,
    type PurchaseOptionRetrieveParams as PurchaseOptionRetrieveParams,
    type PurchaseOptionUpdateParams as PurchaseOptionUpdateParams,
    type PurchaseOptionListParams as PurchaseOptionListParams,
    type PurchaseOptionDeleteParams as PurchaseOptionDeleteParams,
    type PurchaseOptionListSuppliersParams as PurchaseOptionListSuppliersParams,
  };
}
