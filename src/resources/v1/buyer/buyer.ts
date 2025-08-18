// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RolesAPI from './roles';
import {
  RoleCountParams,
  RoleCreateParams,
  RoleListParams,
  RoleListUsersParams,
  RoleRetrieveParams,
  RoleUpdateParams,
  Roles,
  UpdateBuyerRoles,
} from './roles';
import * as UsersAPI from './users';
import {
  RoleLocation,
  UserCountParams,
  UserCreateParams,
  UserListParams,
  UserRetrieveParams,
  UserUpdateParams,
  Users,
} from './users';

export class Buyer extends APIResource {
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

Buyer.Roles = Roles;
Buyer.Users = Users;

export declare namespace Buyer {
  export {
    Roles as Roles,
    type UpdateBuyerRoles as UpdateBuyerRoles,
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
    type RoleCountParams as RoleCountParams,
    type RoleListUsersParams as RoleListUsersParams,
  };

  export {
    Users as Users,
    type RoleLocation as RoleLocation,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserCountParams as UserCountParams,
  };
}
