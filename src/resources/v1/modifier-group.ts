// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ModifierGroup extends APIResource {
  create(params: ModifierGroupCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/ModifierGroup', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(id: string, query: ModifierGroupRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/ModifierGroup/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: ModifierGroupUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/ModifierGroup', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: ModifierGroupListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/ModifierGroup', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(params: ModifierGroupDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.delete('/api/v1/ModifierGroup', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  bulkUpdate(params: ModifierGroupBulkUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/ModifierGroup/BulkUpdateGroup', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  count(query: ModifierGroupCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/ModifierGroup/Count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ModifierGroupCreateParams {
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

export interface ModifierGroupRetrieveParams {
  organizationId: string;
}

export interface ModifierGroupUpdateParams {
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

export interface ModifierGroupListParams {
  organizationId: string;

  IsActive?: boolean;

  Name?: string;

  PageNumber?: number;

  PageSize?: number;
}

export interface ModifierGroupDeleteParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: string;
}

export interface ModifierGroupBulkUpdateParams {
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
  isActive?: boolean;
}

export interface ModifierGroupCountParams {
  organizationId: string;
}

export declare namespace ModifierGroup {
  export {
    type ModifierGroupCreateParams as ModifierGroupCreateParams,
    type ModifierGroupRetrieveParams as ModifierGroupRetrieveParams,
    type ModifierGroupUpdateParams as ModifierGroupUpdateParams,
    type ModifierGroupListParams as ModifierGroupListParams,
    type ModifierGroupDeleteParams as ModifierGroupDeleteParams,
    type ModifierGroupBulkUpdateParams as ModifierGroupBulkUpdateParams,
    type ModifierGroupCountParams as ModifierGroupCountParams,
  };
}
