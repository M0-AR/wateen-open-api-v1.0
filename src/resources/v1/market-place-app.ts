// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class MarketPlaceApp extends APIResource {
  create(body: MarketPlaceAppCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/api/v1/MarketPlaceApp',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  retrieve(id: string, query: MarketPlaceAppRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/MarketPlaceApp/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(body: MarketPlaceAppUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(
      '/api/v1/MarketPlaceApp',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  delete(id: string, params: MarketPlaceAppDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.delete(path`/api/v1/MarketPlaceApp/${id}`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  install(body: MarketPlaceAppInstallParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/MarketPlaceApp/install', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  search(query: MarketPlaceAppSearchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/MarketPlaceApp/search', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  uninstall(body: MarketPlaceAppUninstallParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/MarketPlaceApp/uninstall', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MarketPlaceAppCreateParams {
  Name: string;

  Category?: string;

  Description?: string;

  Icon?: Uploadable;

  ManagedBy?: number;

  Price?: number;

  PriceType?: number;

  Provider?: number;

  Status?: number;
}

export interface MarketPlaceAppRetrieveParams {
  organizationId: string;
}

export interface MarketPlaceAppUpdateParams {
  Id: string;

  Category?: string;

  Description?: string;

  Icon?: Uploadable;

  ManagedBy?: number;

  Name?: string;

  Price?: number;

  PriceType?: number;

  Provider?: number;

  Status?: number;
}

export interface MarketPlaceAppDeleteParams {
  organizationId: string;
}

export interface MarketPlaceAppInstallParams {
  marketPlaceAppId: string;

  organizationId: string;

  createdBy?: string | null;

  createdDate?: string | null;

  locationMappings?: Array<MarketPlaceAppInstallParams.LocationMapping> | null;

  modifiedBy?: string | null;

  modifiedDate?: string | null;

  status?: string | null;

  systemConnection?: MarketPlaceAppInstallParams.SystemConnection;

  taxMappings?: Array<MarketPlaceAppInstallParams.TaxMapping> | null;
}

export namespace MarketPlaceAppInstallParams {
  export interface LocationMapping {
    locationId?: string | null;

    revelPosLocationId?: string | null;

    time?: string | null;
  }

  export interface SystemConnection {
    apiKey?: string | null;

    menuSync?: boolean | null;

    salesSync?: boolean | null;

    secretKey?: string | null;
  }

  export interface TaxMapping {
    taxName?: string | null;

    taxRatePercentage?: number | null;
  }
}

export interface MarketPlaceAppSearchParams {
  organizationId: string;

  categoryIds?: Array<string>;

  managedBy?: Array<number>;

  pageNumber?: number;

  pageSize?: number;

  priceTypes?: Array<number>;

  provider?: Array<number>;

  searchTerm?: string;

  status?: Array<number>;
}

export interface MarketPlaceAppUninstallParams {
  marketPlaceAppId: string;

  organizationId: string;

  modifiedBy?: string | null;

  modifiedDate?: string | null;

  status?: string | null;
}

export declare namespace MarketPlaceApp {
  export {
    type MarketPlaceAppCreateParams as MarketPlaceAppCreateParams,
    type MarketPlaceAppRetrieveParams as MarketPlaceAppRetrieveParams,
    type MarketPlaceAppUpdateParams as MarketPlaceAppUpdateParams,
    type MarketPlaceAppDeleteParams as MarketPlaceAppDeleteParams,
    type MarketPlaceAppInstallParams as MarketPlaceAppInstallParams,
    type MarketPlaceAppSearchParams as MarketPlaceAppSearchParams,
    type MarketPlaceAppUninstallParams as MarketPlaceAppUninstallParams,
  };
}
