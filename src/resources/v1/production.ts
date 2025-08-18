// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Production extends APIResource {
  create(params: ProductionCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/Production', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(id: string, query: ProductionRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/Production/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: ProductionUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Production', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: ProductionListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Production', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  approve(id: string, params: ProductionApproveParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/Production/${id}/Approve`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  bulkUpdate(params: ProductionBulkUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Production/BulkUpdate', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  changeToEditPost(
    id: string,
    params: ProductionChangeToEditPostParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organizationId } = params;
    return this._client.put(path`/api/v1/Production/ChangeProductionToEditPost/${id}`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  count(query: ProductionCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Production/Count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  lockUnlock(params: ProductionLockUnlockParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Production/LockUnlockProduction', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  reject(id: string, params: ProductionRejectParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post(path`/api/v1/Production/${id}/Reject`, {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  submitForApproval(
    id: string,
    params: ProductionSubmitForApprovalParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/Production/${id}/SubmitForApproval`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProductionItem {
  baseUnit?: number;

  batchUnit?: number;

  ingredients?: Array<ProductionItem.Ingredient> | null;

  itemId?: string | null;

  totalAmount?: number;

  totalQty?: number;
}

export namespace ProductionItem {
  export interface Ingredient {
    amount?: number;

    currentStock?: number;

    ingredientId?: string | null;

    qty?: number;
  }
}

export interface ProductionCreateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  items: Array<ProductionItem>;

  /**
   * Body param:
   */
  locationId: string;

  /**
   * Body param:
   */
  productionDateTime: string;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param:
   */
  sectionId?: string | null;

  /**
   * Body param:
   */
  status?: number;
}

export interface ProductionRetrieveParams {
  organizationId: string;
}

export interface ProductionUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: string;

  /**
   * Body param:
   */
  items: Array<ProductionItem>;

  /**
   * Body param:
   */
  locationId: string;

  /**
   * Body param:
   */
  productionDateTime: string;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param:
   */
  sectionId?: string | null;

  /**
   * Body param:
   */
  status?: number;
}

export interface ProductionListParams {
  organizationId: string;

  BrandId?: string;

  Code?: string;

  FromDate?: string;

  LocationId?: string;

  PageNumber?: number;

  PageSize?: number;

  StatusIds?: Array<string>;

  ToDate?: string;
}

export interface ProductionApproveParams {
  organizationId: string;
}

export interface ProductionBulkUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  ids?: Array<string> | null;

  /**
   * Body param:
   */
  status?: number;
}

export interface ProductionChangeToEditPostParams {
  organizationId: string;
}

export interface ProductionCountParams {
  organizationId: string;
}

export interface ProductionLockUnlockParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  ids?: Array<string> | null;

  /**
   * Body param:
   */
  lock?: boolean;
}

export interface ProductionRejectParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  reasonForRejection?: string | null;
}

export interface ProductionSubmitForApprovalParams {
  organizationId: string;
}

export declare namespace Production {
  export {
    type ProductionItem as ProductionItem,
    type ProductionCreateParams as ProductionCreateParams,
    type ProductionRetrieveParams as ProductionRetrieveParams,
    type ProductionUpdateParams as ProductionUpdateParams,
    type ProductionListParams as ProductionListParams,
    type ProductionApproveParams as ProductionApproveParams,
    type ProductionBulkUpdateParams as ProductionBulkUpdateParams,
    type ProductionChangeToEditPostParams as ProductionChangeToEditPostParams,
    type ProductionCountParams as ProductionCountParams,
    type ProductionLockUnlockParams as ProductionLockUnlockParams,
    type ProductionRejectParams as ProductionRejectParams,
    type ProductionSubmitForApprovalParams as ProductionSubmitForApprovalParams,
  };
}
