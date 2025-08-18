// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class SystemTaxSetting extends APIResource {
  retrieve(id: number, query: SystemTaxSettingRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/SystemTaxSetting/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deleteSystemTaxSetting(
    params: SystemTaxSettingDeleteSystemTaxSettingParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id, organizationId } = params;
    return this._client.delete('/api/v1/SystemTaxSetting', {
      query: { id, organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveSystemTaxSetting(
    query: SystemTaxSettingRetrieveSystemTaxSettingParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/v1/SystemTaxSetting', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  seedInitialDataToElasticSearch(
    params: SystemTaxSettingSeedInitialDataToElasticSearchParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post('/api/v1/SystemTaxSetting/SeedInitialDataToElasticSearch', {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  systemTaxSetting(
    params: SystemTaxSettingSystemTaxSettingParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post(
      '/api/v1/SystemTaxSetting',
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

  updateSystemTaxSetting(
    params: SystemTaxSettingUpdateSystemTaxSettingParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put(
      '/api/v1/SystemTaxSetting',
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
}

export interface SystemTaxSettingRetrieveParams {
  organizationId: string;
}

export interface SystemTaxSettingDeleteSystemTaxSettingParams {
  id: number;

  organizationId: string;
}

export interface SystemTaxSettingRetrieveSystemTaxSettingParams {
  organizationId: string;

  PageNumber?: number;

  PageSize?: number;

  SearchTerm?: string;

  Status?: number;
}

export interface SystemTaxSettingSeedInitialDataToElasticSearchParams {
  organizationId: string;
}

export interface SystemTaxSettingSystemTaxSettingParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  IsDefault: boolean;

  /**
   * Body param:
   */
  Name: string;

  /**
   * Body param:
   */
  RatePercentage: number;

  /**
   * Body param:
   */
  Status: number;
}

export interface SystemTaxSettingUpdateSystemTaxSettingParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  Id: number;

  /**
   * Body param:
   */
  IsDefault: boolean;

  /**
   * Body param:
   */
  Name: string;

  /**
   * Body param:
   */
  RatePercentage: number;

  /**
   * Body param:
   */
  Status: number;
}

export declare namespace SystemTaxSetting {
  export {
    type SystemTaxSettingRetrieveParams as SystemTaxSettingRetrieveParams,
    type SystemTaxSettingDeleteSystemTaxSettingParams as SystemTaxSettingDeleteSystemTaxSettingParams,
    type SystemTaxSettingRetrieveSystemTaxSettingParams as SystemTaxSettingRetrieveSystemTaxSettingParams,
    type SystemTaxSettingSeedInitialDataToElasticSearchParams as SystemTaxSettingSeedInitialDataToElasticSearchParams,
    type SystemTaxSettingSystemTaxSettingParams as SystemTaxSettingSystemTaxSettingParams,
    type SystemTaxSettingUpdateSystemTaxSettingParams as SystemTaxSettingUpdateSystemTaxSettingParams,
  };
}
