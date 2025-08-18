// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Reports extends APIResource {
  list(query: ReportListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Reports', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  bulkUpdate(body: ReportBulkUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/v1/Reports/BulkUpdate', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ReportListParams {
  OrganizationId: string;

  PageNumber: number;

  PageSize: number;

  IsFavorite?: boolean;

  Name?: string;

  TypeIds?: Array<string>;
}

export interface ReportBulkUpdateParams {
  ids: Array<string>;

  isFavorite: boolean;

  organizationId: string;
}

export declare namespace Reports {
  export { type ReportListParams as ReportListParams, type ReportBulkUpdateParams as ReportBulkUpdateParams };
}
