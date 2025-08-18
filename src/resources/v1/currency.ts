// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Currency extends APIResource {
  update(params: CurrencyUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Currency', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: CurrencyListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Currency', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getExchangeRate(query: CurrencyGetExchangeRateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Currency/GetExchangeRate', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CurrencyUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  currencyId: string;

  /**
   * Body param:
   */
  locationId: string;
}

export interface CurrencyListParams {
  organizationId: string;

  locationId?: string;
}

export interface CurrencyGetExchangeRateParams {
  organizationId: string;
}

export declare namespace Currency {
  export {
    type CurrencyUpdateParams as CurrencyUpdateParams,
    type CurrencyListParams as CurrencyListParams,
    type CurrencyGetExchangeRateParams as CurrencyGetExchangeRateParams,
  };
}
