// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class RequisitionQueue extends APIResource {
  create(body: RequisitionQueueCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/RequisitionQueue', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: RequisitionQueueListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/RequisitionQueue/GetAllRequisitionQueue', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RequisitionQueueCreateParams {
  organizationId: string;

  poDataList: Array<RequisitionQueueCreateParams.PoDataList>;
}

export namespace RequisitionQueueCreateParams {
  export interface PoDataList {
    deliveryDate?: string | null;

    description?: string | null;

    items?: Array<PoDataList.Item> | null;

    locationId?: string | null;

    orderDate?: string | null;

    purchaseRequestId?: string | null;

    status?: number;

    supplierId?: string | null;
  }

  export namespace PoDataList {
    export interface Item {
      cost?: number;

      description?: string | null;

      discount?: number;

      itemId?: string | null;

      landedCost?: number;

      purchaseOptionId?: string | null;

      quantity?: number;

      rejectReason?: string | null;

      requisitionQueueAction?: number;

      taxId?: number;

      totalAmount?: number;

      totalCost?: number;

      totalLineAmount?: number;

      uomId?: number;
    }
  }
}

export interface RequisitionQueueListParams {
  OrganizationId: string;

  PageNumber: number;

  PageSize: number;

  FromDate?: string;

  ItemName?: string;

  ItemType?: string;

  LocationId?: string;

  PurchaseRequestIds?: string;

  ToDate?: string;
}

export declare namespace RequisitionQueue {
  export {
    type RequisitionQueueCreateParams as RequisitionQueueCreateParams,
    type RequisitionQueueListParams as RequisitionQueueListParams,
  };
}
