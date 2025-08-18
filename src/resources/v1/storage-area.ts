// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class StorageArea extends APIResource {
  retrieve(id: string, query: StorageAreaRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/StorageArea/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveStorageArea(
    query: StorageAreaRetrieveStorageAreaParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/v1/StorageArea', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  storageArea(params: StorageAreaStorageAreaParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/StorageArea', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateStorageArea(params: StorageAreaUpdateStorageAreaParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/StorageArea', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface StorageAreaRetrieveParams {
  organizationId: string;
}

export interface StorageAreaRetrieveStorageAreaParams {
  organizationId: string;

  BrandIds?: Array<string>;

  IsActive?: boolean;

  LocationIds?: Array<string>;

  Name?: string;

  PageNumber?: number;

  PageSize?: number;
}

export interface StorageAreaStorageAreaParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  isActive?: boolean;
}

export interface StorageAreaUpdateStorageAreaParams {
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
  isActive?: boolean | null;

  /**
   * Body param:
   */
  name?: string | null;
}

export declare namespace StorageArea {
  export {
    type StorageAreaRetrieveParams as StorageAreaRetrieveParams,
    type StorageAreaRetrieveStorageAreaParams as StorageAreaRetrieveStorageAreaParams,
    type StorageAreaStorageAreaParams as StorageAreaStorageAreaParams,
    type StorageAreaUpdateStorageAreaParams as StorageAreaUpdateStorageAreaParams,
  };
}
