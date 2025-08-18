// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Settings extends APIResource {
  retrieve(widgetType: number, query: SettingRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/DashBoard/Settings/${widgetType}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: SettingUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/DashBoard/Settings', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SettingRetrieveParams {
  organizationId: string;
}

export interface SettingUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  widgets: Array<SettingUpdateParams.Widget>;
}

export namespace SettingUpdateParams {
  export interface Widget {
    id: number;

    currentOrder: number;

    currentVisibility: boolean;
  }
}

export declare namespace Settings {
  export {
    type SettingRetrieveParams as SettingRetrieveParams,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
