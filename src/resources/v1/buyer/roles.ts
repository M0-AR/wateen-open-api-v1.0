// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Roles extends APIResource {
  create(params: RoleCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/buyer/roles', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(id: number, query: RoleRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/buyer/roles/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(id: number, params: RoleUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put(path`/api/v1/buyer/roles/${id}`, {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: RoleListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/buyer/roles', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  count(query: RoleCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/buyer/roles/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listUsers(id: number, query: RoleListUsersParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/buyer/roles/${id}/users`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UpdateBuyerRoles {
  rolesIds: Array<number>;

  isActive?: boolean;
}

export interface RoleCreateParams {
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
  scopes: Array<number>;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param:
   */
  isActive?: boolean;
}

export interface RoleRetrieveParams {
  organizationId: string;
}

export interface RoleUpdateParams {
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
  scopes: Array<number>;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param:
   */
  isActive?: boolean;
}

export interface RoleListParams {
  organizationId: string;

  isActive?: boolean;

  name?: string;

  pageNumber?: number;

  pageSize?: number;
}

export interface RoleCountParams {
  organizationId: string;
}

export interface RoleListUsersParams {
  organizationId: string;

  pageNumber?: number;

  pageSize?: number;

  username?: string;
}

export declare namespace Roles {
  export {
    type UpdateBuyerRoles as UpdateBuyerRoles,
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
    type RoleCountParams as RoleCountParams,
    type RoleListUsersParams as RoleListUsersParams,
  };
}
