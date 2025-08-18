// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  create(params: UserCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post(
      '/api/v1/buyer/users',
      multipartFormRequestOptions(
        {
          query: { organizationId },
          body,
          ...options,
          headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        },
        this._client,
      ),
    );
  }

  retrieve(id: string, query: UserRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/buyer/users/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(id: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put(
      path`/api/v1/buyer/users/${id}`,
      multipartFormRequestOptions(
        {
          query: { organizationId },
          body,
          ...options,
          headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        },
        this._client,
      ),
    );
  }

  list(query: UserListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/buyer/users', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  count(query: UserCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/buyer/users/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RoleLocation {
  isPreferredLocation?: boolean;

  locationId?: string | null;

  roleId?: number;
}

export interface UserCreateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  EmailAddress: string;

  /**
   * Body param:
   */
  FirstName: string;

  /**
   * Body param:
   */
  LastName: string;

  /**
   * Body param:
   */
  PhoneNumber: string;

  /**
   * Body param:
   */
  Username: string;

  /**
   * Body param:
   */
  ConfirmPassword?: string;

  /**
   * Body param:
   */
  CreateEmployeeCard?: boolean;

  /**
   * Body param:
   */
  ExpiryDate?: string;

  /**
   * Body param:
   */
  IsActive?: boolean;

  /**
   * Body param:
   */
  Password?: string;

  /**
   * Body param:
   */
  RoleLocations?: Array<RoleLocation>;

  /**
   * Body param:
   */
  SendInvitation?: boolean;

  /**
   * Body param:
   */
  UserPhoto?: Uploadable;
}

export interface UserRetrieveParams {
  organizationId: string;
}

export interface UserUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  ConfirmPassword?: string;

  /**
   * Body param:
   */
  CreateEmployeeCard?: boolean;

  /**
   * Body param:
   */
  EmailAddress?: string;

  /**
   * Body param:
   */
  ExpiryDate?: string;

  /**
   * Body param:
   */
  FirstName?: string;

  /**
   * Body param:
   */
  IsActive?: boolean;

  /**
   * Body param:
   */
  LastName?: string;

  /**
   * Body param:
   */
  Password?: string;

  /**
   * Body param:
   */
  PhoneNumber?: string;

  /**
   * Body param:
   */
  RoleLocations?: Array<RoleLocation>;

  /**
   * Body param:
   */
  UserPhoto?: Uploadable;
}

export interface UserListParams {
  organizationId: string;

  pageNumber?: number;

  pageSize?: number;

  searchValue?: string;

  status?: Array<number>;
}

export interface UserCountParams {
  organizationId: string;
}

export declare namespace Users {
  export {
    type RoleLocation as RoleLocation,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserCountParams as UserCountParams,
  };
}
