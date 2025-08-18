// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class PrefixConfiguration extends APIResource {
  retrieve(query: PrefixConfigurationRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PrefixConfiguration', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getCode(query: PrefixConfigurationGetCodeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PrefixConfiguration/Code', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PrefixConfigurationRetrieveParams {
  organizationId: string;

  Subtype?: string;

  Type?: string;
}

export interface PrefixConfigurationGetCodeParams {
  organizationId: string;

  Code?: string;

  Subtype?: string;

  Type?: string;
}

export declare namespace PrefixConfiguration {
  export {
    type PrefixConfigurationRetrieveParams as PrefixConfigurationRetrieveParams,
    type PrefixConfigurationGetCodeParams as PrefixConfigurationGetCodeParams,
  };
}
