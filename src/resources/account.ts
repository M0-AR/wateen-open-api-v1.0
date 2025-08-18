// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Account extends APIResource {
  login(
    body: AccountLoginParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LoginResponse> {
    return this._client.post('/api/Account/Login', { body, ...options });
  }

  refreshToken(
    body: AccountRefreshTokenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LoginResponse> {
    return this._client.post('/api/Account/RefreshToken', { body, ...options });
  }
}

export interface LoginResponse {
  accessToken?: string | null;

  expiresIn?: number;

  idToken?: string | null;

  notBeforePolicy?: number;

  refreshExpiresIn?: number;

  refreshToken?: string | null;

  scope?: string | null;

  sessionState?: string | null;

  tokenType?: string | null;
}

export interface AccountLoginParams {
  clientId?: string | null;

  clientSecret?: string | null;

  grantType?: string | null;

  password?: string | null;

  scope?: string | null;

  userName?: string | null;
}

export interface AccountRefreshTokenParams {
  clientId?: string | null;

  clientSecret?: string | null;

  refreshToken?: string | null;
}

export declare namespace Account {
  export {
    type LoginResponse as LoginResponse,
    type AccountLoginParams as AccountLoginParams,
    type AccountRefreshTokenParams as AccountRefreshTokenParams,
  };
}
