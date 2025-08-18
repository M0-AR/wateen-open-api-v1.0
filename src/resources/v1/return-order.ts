// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ReturnOrder extends APIResource {
  create(params: ReturnOrderCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/ReturnOrder', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(id: string, query: ReturnOrderRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/ReturnOrder/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: ReturnOrderUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/ReturnOrder', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: ReturnOrderListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/ReturnOrder', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  approve(id: string, params: ReturnOrderApproveParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/ReturnOrder/${id}/approve`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  count(query: ReturnOrderCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/ReturnOrder/Count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  eligibleItems(query: ReturnOrderEligibleItemsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/ReturnOrder/EligibleItems', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  itemsDetail(
    returnOrderID: string,
    query: ReturnOrderItemsDetailParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/v1/ReturnOrder/ItemsDetail/${returnOrderID}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  lockUnlock(params: ReturnOrderLockUnlockParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/ReturnOrder/LockUnlock', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  reject(id: string, params: ReturnOrderRejectParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/ReturnOrder/${id}/reject`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  submit(id: string, params: ReturnOrderSubmitParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/ReturnOrder/${id}/submit`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateStatus(params: ReturnOrderUpdateStatusParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/ReturnOrder/UpdateStatus', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ReturnOrderCreateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  items: Array<ReturnOrderCreateParams.Item>;

  /**
   * Body param:
   */
  locationId: string;

  /**
   * Body param:
   */
  originalTotalAmount: number;

  /**
   * Body param:
   */
  returnDate: string;

  /**
   * Body param:
   */
  status: number;

  /**
   * Body param:
   */
  supplierId: string;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param:
   */
  invoiceNumber?: string | null;

  /**
   * Body param:
   */
  orderDate?: string | null;

  /**
   * Body param:
   */
  purchaseOrderId?: string | null;

  /**
   * Body param:
   */
  purchaseOrderNumber?: string | null;

  /**
   * Body param:
   */
  purchaseOrderReceivingId?: string | null;

  /**
   * Body param:
   */
  receivingDate?: string | null;

  /**
   * Body param:
   */
  returnReason?: string | null;
}

export namespace ReturnOrderCreateParams {
  export interface Item {
    itemId: string;

    price: number;

    quantityOrdered: number;

    quantityReceived: number;

    returnQuantity: number;

    taxId: number;

    totalAmount: number;

    totalCost: number;

    totalLineAmount: number;

    unitCost: number;

    uomId: number;

    description?: string | null;

    discount?: number;

    itemCondition?: string | null;

    landedCost?: number;

    purchaseOrderItemId?: string | null;

    purchaseOrderReceivingItemId?: string | null;

    referenceNumber?: string | null;

    returnReason?: string | null;

    taxValue?: number;
  }
}

export interface ReturnOrderRetrieveParams {
  organizationId: string;
}

export interface ReturnOrderUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: string;

  /**
   * Body param:
   */
  items: Array<ReturnOrderUpdateParams.Item>;

  /**
   * Body param:
   */
  locationId: string;

  /**
   * Body param:
   */
  originalTotalAmount: number;

  /**
   * Body param:
   */
  returnDate: string;

  /**
   * Body param:
   */
  status: number;

  /**
   * Body param:
   */
  supplierId: string;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param:
   */
  invoiceNumber?: string | null;

  /**
   * Body param:
   */
  orderDate?: string | null;

  /**
   * Body param:
   */
  purchaseOrderId?: string | null;

  /**
   * Body param:
   */
  purchaseOrderNumber?: string | null;

  /**
   * Body param:
   */
  purchaseOrderReceivingId?: string | null;

  /**
   * Body param:
   */
  receivingDate?: string | null;

  /**
   * Body param:
   */
  returnReason?: string | null;
}

export namespace ReturnOrderUpdateParams {
  export interface Item {
    itemId: string;

    price: number;

    quantityOrdered: number;

    quantityReceived: number;

    returnQuantity: number;

    taxId: number;

    totalAmount: number;

    totalCost: number;

    totalLineAmount: number;

    unitCost: number;

    uomId: number;

    id?: string | null;

    description?: string | null;

    discount?: number;

    itemCondition?: string | null;

    landedCost?: number;

    purchaseOrderItemId?: string | null;

    purchaseOrderReceivingItemId?: string | null;

    referenceNumber?: string | null;

    returnReason?: string | null;

    taxValue?: number;
  }
}

export interface ReturnOrderListParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  DateRange?: Array<string>;

  PurchaseOrderId?: string;

  ReturnNumber?: string;

  Status?: string;

  SupplierId?: string;
}

export interface ReturnOrderApproveParams {
  organizationId: string;
}

export interface ReturnOrderCountParams {
  organizationId: string;
}

export interface ReturnOrderEligibleItemsParams {
  organizationId: string;

  LocationId?: string;

  PurchaseOrderId?: string;

  SupplierId?: string;
}

export interface ReturnOrderItemsDetailParams {
  organizationId: string;

  CategoryId?: string;

  ItemTypeId?: string;

  SearchTerm?: string;
}

export interface ReturnOrderLockUnlockParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: string;

  /**
   * Body param:
   */
  isLocked: boolean;
}

export interface ReturnOrderRejectParams {
  organizationId: string;
}

export interface ReturnOrderSubmitParams {
  organizationId: string;
}

export interface ReturnOrderUpdateStatusParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: string;

  /**
   * Body param:
   */
  status: number;
}

export declare namespace ReturnOrder {
  export {
    type ReturnOrderCreateParams as ReturnOrderCreateParams,
    type ReturnOrderRetrieveParams as ReturnOrderRetrieveParams,
    type ReturnOrderUpdateParams as ReturnOrderUpdateParams,
    type ReturnOrderListParams as ReturnOrderListParams,
    type ReturnOrderApproveParams as ReturnOrderApproveParams,
    type ReturnOrderCountParams as ReturnOrderCountParams,
    type ReturnOrderEligibleItemsParams as ReturnOrderEligibleItemsParams,
    type ReturnOrderItemsDetailParams as ReturnOrderItemsDetailParams,
    type ReturnOrderLockUnlockParams as ReturnOrderLockUnlockParams,
    type ReturnOrderRejectParams as ReturnOrderRejectParams,
    type ReturnOrderSubmitParams as ReturnOrderSubmitParams,
    type ReturnOrderUpdateStatusParams as ReturnOrderUpdateStatusParams,
  };
}
