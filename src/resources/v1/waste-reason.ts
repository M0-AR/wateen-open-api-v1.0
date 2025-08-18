// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class WasteReason extends APIResource {
  retrieveWasteReason(
    query: WasteReasonRetrieveWasteReasonParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/v1/WasteReason', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  wasteReason(body: WasteReasonWasteReasonParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/WasteReason', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WasteReasonRetrieveWasteReasonParams {
  OrganizationId: string;

  PageNumber: number;

  PageSize: number;
}

export interface WasteReasonWasteReasonParams {
  items: Array<WasteReasonWasteReasonParams.Item>;

  organizationId: string;
}

export namespace WasteReasonWasteReasonParams {
  export interface Item {
    id?: number;

    canEdit?: boolean;

    isActive?: boolean;

    reason?: string | null;
  }
}

export declare namespace WasteReason {
  export {
    type WasteReasonRetrieveWasteReasonParams as WasteReasonRetrieveWasteReasonParams,
    type WasteReasonWasteReasonParams as WasteReasonWasteReasonParams,
  };
}
