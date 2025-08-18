// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GenericItem extends APIResource {
  retrieve(itemID: string, query: GenericItemRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/GenericItem/${itemID}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: GenericItemListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/GenericItem', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GenericItemRetrieveParams {
  organizationId: string;

  itemLocationId?: string;
}

export interface GenericItemListParams {
  organizationId: string;

  CategoryIds?: Array<string>;

  CountingFrequency?: string;

  ItemAllocation?: Array<string>;

  ItemIds?: Array<string>;

  ItemTypes?: string;

  Name?: string;

  PageNumber?: number;

  PageSize?: number;

  PrepItemTypes?: Array<number>;

  RequisitionTemplateIds?: Array<string>;

  Status?: number;

  StorageAreaIds?: Array<string>;

  UseLocationsFilter?: boolean;
}

export declare namespace GenericItem {
  export {
    type GenericItemRetrieveParams as GenericItemRetrieveParams,
    type GenericItemListParams as GenericItemListParams,
  };
}
