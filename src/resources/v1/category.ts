// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Category extends APIResource {
  create(params: CategoryCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/Category', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(id: string, query: CategoryRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/Category/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: CategoryUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Category', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: CategoryListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Category', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(params: CategoryDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.delete('/api/v1/Category', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateBulk(params: CategoryUpdateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Category/UpdateBulk', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PrefixData {
  initialNumber?: number | null;

  isActive?: boolean | null;

  minimumDigits?: number | null;

  override?: boolean | null;

  prefix?: string | null;
}

export interface CategoryCreateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  classId: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  isActive?: boolean;

  /**
   * Body param:
   */
  prefixData?: PrefixData;

  /**
   * Body param:
   */
  type?: number;
}

export interface CategoryRetrieveParams {
  organizationId: string;
}

export interface CategoryUpdateParams {
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
  classId?: string | null;

  /**
   * Body param:
   */
  isActive?: boolean | null;

  /**
   * Body param:
   */
  name?: string | null;

  /**
   * Body param:
   */
  prefixData?: PrefixData;

  /**
   * Body param:
   */
  type?: number | null;
}

export interface CategoryListParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  ClassIds?: string;

  IsActive?: boolean;

  Name?: string;

  Type?: string;
}

export interface CategoryDeleteParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: string;
}

export interface CategoryUpdateBulkParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  ids: Array<string>;

  /**
   * Body param:
   */
  isActive: boolean;
}

export declare namespace Category {
  export {
    type PrefixData as PrefixData,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryRetrieveParams as CategoryRetrieveParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryListParams as CategoryListParams,
    type CategoryDeleteParams as CategoryDeleteParams,
    type CategoryUpdateBulkParams as CategoryUpdateBulkParams,
  };
}
