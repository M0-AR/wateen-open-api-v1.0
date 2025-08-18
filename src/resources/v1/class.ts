// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Class extends APIResource {
  create(params: ClassCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/Class', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(id: string, query: ClassRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/Class/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: ClassUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Class', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: ClassListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Class', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(params: ClassDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.delete('/api/v1/Class', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  bulkUpdate(params: ClassBulkUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Class/BulkUpdate', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ClassCreateParams {
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
  description?: string | null;

  /**
   * Body param:
   */
  isActive?: boolean;
}

export interface ClassRetrieveParams {
  organizationId: string;
}

export interface ClassUpdateParams {
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
  description?: string | null;

  /**
   * Body param:
   */
  isActive?: boolean | null;

  /**
   * Body param:
   */
  name?: string | null;
}

export interface ClassListParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  IsActive?: boolean;

  Name?: string;
}

export interface ClassDeleteParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: string;
}

export interface ClassBulkUpdateParams {
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
  isActive?: boolean | null;
}

export declare namespace Class {
  export {
    type ClassCreateParams as ClassCreateParams,
    type ClassRetrieveParams as ClassRetrieveParams,
    type ClassUpdateParams as ClassUpdateParams,
    type ClassListParams as ClassListParams,
    type ClassDeleteParams as ClassDeleteParams,
    type ClassBulkUpdateParams as ClassBulkUpdateParams,
  };
}
