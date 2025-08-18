// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Roles extends APIResource {
  create(params: RoleCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/roles', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(id: number, query: RoleRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/roles/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(id: number, params: RoleUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put(path`/api/v1/roles/${id}`, {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: RoleListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/roles', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  addUserRole(params: RoleAddUserRoleParams, options?: RequestOptions): APIPromise<void> {
    const { query_organizationId, ...body } = params;
    return this._client.post('/api/v1/roles/add-user-role', {
      query: { organizationId: query_organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deleteRemoveUserRole(params: RoleDeleteRemoveUserRoleParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.delete('/api/v1/roles/remove-user-role', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveCount(query: RoleRetrieveCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/roles/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveUsers(id: number, query: RoleRetrieveUsersParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/roles/${id}/users`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RoleCreateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  rolesIds: Array<number>;

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

export interface RoleAddUserRoleParams {
  /**
   * Query param:
   */
  query_organizationId: string;

  /**
   * Body param:
   */
  locationId: string;

  /**
   * Body param:
   */
  body_organizationId: string;

  /**
   * Body param:
   */
  roleId: number;

  /**
   * Body param:
   */
  userId: number;

  /**
   * Body param:
   */
  isPreferredLocation?: boolean;
}

export interface RoleDeleteRemoveUserRoleParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  userRoleLocationId: number;
}

export interface RoleRetrieveCountParams {
  organizationId: string;

  rank?: number;
}

export interface RoleRetrieveUsersParams {
  organizationId: string;

  pageNumber?: number;

  pageSize?: number;

  username?: string;
}

export declare namespace Roles {
  export {
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
    type RoleAddUserRoleParams as RoleAddUserRoleParams,
    type RoleDeleteRemoveUserRoleParams as RoleDeleteRemoveUserRoleParams,
    type RoleRetrieveCountParams as RoleRetrieveCountParams,
    type RoleRetrieveUsersParams as RoleRetrieveUsersParams,
  };
}
