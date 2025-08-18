// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DiningOption extends APIResource {
  create(body: DiningOptionCreateParams, options?: RequestOptions): APIPromise<DiningOptionCreateResponse> {
    return this._client.post('/api/v1/DiningOption', { body, ...options });
  }

  retrieve(
    id: string,
    query: DiningOptionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<DiningOptionRetrieveResponse> {
    return this._client.get(path`/api/v1/DiningOption/${id}`, { query, ...options });
  }

  update(body: DiningOptionUpdateParams, options?: RequestOptions): APIPromise<DiningOptionUpdateResponse> {
    return this._client.put('/api/v1/DiningOption', { body, ...options });
  }

  list(query: DiningOptionListParams, options?: RequestOptions): APIPromise<DiningOptionListResponse> {
    return this._client.get('/api/v1/DiningOption', { query, ...options });
  }
}

export interface DiningOptionCreateResponse {
  id?: string | null;

  hasMessage?: boolean;

  isFailed?: boolean;

  isSuccess?: boolean;

  message?: string | null;
}

export interface DiningOptionRetrieveResponse {
  id?: string | null;

  diningOptionId?: string | null;

  hasDiningOptionId?: boolean;

  hasMessage?: boolean;

  isActive?: boolean;

  isAggregator?: boolean;

  isDefault?: boolean;

  isFailed?: boolean;

  isSuccess?: boolean;

  message?: string | null;

  name?: string | null;
}

export interface DiningOptionUpdateResponse {
  id?: string | null;

  hasMessage?: boolean;

  isFailed?: boolean;

  isSuccess?: boolean;

  message?: string | null;
}

export interface DiningOptionListResponse {
  data?: Array<DiningOptionListResponse.Data> | null;

  pagination?: DiningOptionListResponse.Pagination;
}

export namespace DiningOptionListResponse {
  export interface Data {
    id?: string | null;

    isActive?: boolean;

    isAggregator?: boolean;

    isDefault?: boolean;

    name?: string | null;
  }

  export interface Pagination {
    pageNumber?: number;

    pageSize?: number;

    totalCount?: number;
  }
}

export interface DiningOptionCreateParams {
  isActive: boolean;

  isAggregator: boolean;

  isDefault: boolean;

  name: string;

  organizationId: string;

  diningOptionId?: string | null;
}

export interface DiningOptionRetrieveParams {
  organizationId: string;
}

export interface DiningOptionUpdateParams {
  id: string;

  organizationId: string;

  isActive?: boolean | null;

  isAggregator?: boolean | null;

  isDefault?: boolean | null;

  name?: string | null;
}

export interface DiningOptionListParams {
  organizationId: string;

  isActive?: boolean;

  name?: string;

  pageNumber?: number;

  pageSize?: number;
}

export declare namespace DiningOption {
  export {
    type DiningOptionCreateResponse as DiningOptionCreateResponse,
    type DiningOptionRetrieveResponse as DiningOptionRetrieveResponse,
    type DiningOptionUpdateResponse as DiningOptionUpdateResponse,
    type DiningOptionListResponse as DiningOptionListResponse,
    type DiningOptionCreateParams as DiningOptionCreateParams,
    type DiningOptionRetrieveParams as DiningOptionRetrieveParams,
    type DiningOptionUpdateParams as DiningOptionUpdateParams,
    type DiningOptionListParams as DiningOptionListParams,
  };
}
