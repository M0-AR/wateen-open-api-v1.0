// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CategoryPrefix extends APIResource {
  retrieve(id: string, query: CategoryPrefixRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/CategoryPrefix/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: CategoryPrefixUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/CategoryPrefix', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: CategoryPrefixListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/CategoryPrefix', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(params: CategoryPrefixDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.delete('/api/v1/CategoryPrefix', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  bulkUpdate(params: CategoryPrefixBulkUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/CategoryPrefix/BulkUpdateCategoryPrefix', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CategoryPrefixRetrieveParams {
  organizationId: string;
}

export interface CategoryPrefixUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: number;

  /**
   * Body param:
   */
  initialNumber?: number;

  /**
   * Body param:
   */
  isActive?: boolean;

  /**
   * Body param:
   */
  minimumDigits?: number;

  /**
   * Body param:
   */
  override?: boolean;

  /**
   * Body param:
   */
  prefix?: string | null;
}

export interface CategoryPrefixListParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  CategoryIds?: string;

  ClassIds?: string;

  SearchTerm?: string;
}

export interface CategoryPrefixDeleteParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: number;
}

export interface CategoryPrefixBulkUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  categoryPrefixes: Array<CategoryPrefixBulkUpdateParams.CategoryPrefix>;
}

export namespace CategoryPrefixBulkUpdateParams {
  export interface CategoryPrefix {
    id: number;

    initialNumber?: number;

    isActive?: boolean;

    minimumDigits?: number;

    name?: string | null;

    override?: boolean;

    prefix?: string | null;
  }
}

export declare namespace CategoryPrefix {
  export {
    type CategoryPrefixRetrieveParams as CategoryPrefixRetrieveParams,
    type CategoryPrefixUpdateParams as CategoryPrefixUpdateParams,
    type CategoryPrefixListParams as CategoryPrefixListParams,
    type CategoryPrefixDeleteParams as CategoryPrefixDeleteParams,
    type CategoryPrefixBulkUpdateParams as CategoryPrefixBulkUpdateParams,
  };
}
