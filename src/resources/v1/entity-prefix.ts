// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EntityPrefix extends APIResource {
  retrieve(id: string, query: EntityPrefixRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/EntityPrefix/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: EntityPrefixUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/EntityPrefix', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: EntityPrefixListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/EntityPrefix', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(params: EntityPrefixDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.delete('/api/v1/EntityPrefix', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  bulkUpdate(params: EntityPrefixBulkUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/EntityPrefix/BulkUpdateEntityPrefix', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EntityPrefixRetrieveParams {
  organizationId: string;
}

export interface EntityPrefixUpdateParams {
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

export interface EntityPrefixListParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  SearchTerm?: string;
}

export interface EntityPrefixDeleteParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: number;
}

export interface EntityPrefixBulkUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  entityPrefixes: Array<EntityPrefixBulkUpdateParams.EntityPrefix>;
}

export namespace EntityPrefixBulkUpdateParams {
  export interface EntityPrefix {
    id: number;

    initialNumber?: number;

    isActive?: boolean;

    minimumDigits?: number;

    override?: boolean;

    prefix?: string | null;
  }
}

export declare namespace EntityPrefix {
  export {
    type EntityPrefixRetrieveParams as EntityPrefixRetrieveParams,
    type EntityPrefixUpdateParams as EntityPrefixUpdateParams,
    type EntityPrefixListParams as EntityPrefixListParams,
    type EntityPrefixDeleteParams as EntityPrefixDeleteParams,
    type EntityPrefixBulkUpdateParams as EntityPrefixBulkUpdateParams,
  };
}
