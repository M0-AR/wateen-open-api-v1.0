// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class PurchaseOrder extends APIResource {
  create(
    body: PurchaseOrderCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PurchaseOrderCreateResponse> {
    return this._client.post('/api/v1/PurchaseOrder', { body, ...options });
  }

  retrieve(
    id: string,
    query: PurchaseOrderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/v1/PurchaseOrder/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(
    body: PurchaseOrderUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put('/api/v1/PurchaseOrder', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: PurchaseOrderListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PurchaseOrder', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  addReceiving(
    body: PurchaseOrderAddReceivingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(
      '/api/v1/PurchaseOrder/AddPurchaseOrderReceiving',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  count(query: PurchaseOrderCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PurchaseOrder/Count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listItems(query: PurchaseOrderListItemsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PurchaseOrder/PurchaseOrderItems', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listReceiving(query: PurchaseOrderListReceivingParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PurchaseOrder/PurchaseOrderReceiving', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateStatus(
    body: PurchaseOrderUpdateStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put('/api/v1/PurchaseOrder/UpdateStatus', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PurchaseOrderItemData {
  cost?: number;

  description?: string | null;

  discount?: number;

  itemId?: string | null;

  landedCost?: number;

  purchaseOptionId?: string | null;

  quantity?: number;

  taxId?: number;

  totalAmount?: number;

  totalCost?: number;

  totalLineAmount?: number;

  uomId?: number;
}

export interface PurchaseOrderCreateResponse {
  id?: string | null;

  isFailed?: boolean;

  isSuccess?: boolean;

  message?: string | null;
}

export interface PurchaseOrderCreateParams {
  deliveryDate?: string;

  description?: string | null;

  items?: Array<PurchaseOrderItemData> | null;

  locationId?: string | null;

  orderDate?: string;

  organizationId?: string | null;

  status?: number;

  supplierId?: string | null;
}

export interface PurchaseOrderRetrieveParams {
  organizationId?: string;
}

export interface PurchaseOrderUpdateParams {
  id?: string | null;

  deliveryDate?: string;

  description?: string | null;

  items?: Array<PurchaseOrderItemData> | null;

  locationId?: string | null;

  orderDate?: string;

  organizationId?: string | null;

  status?: number;

  supplierId?: string | null;
}

export interface PurchaseOrderListParams {
  PageNumber: number;

  PageSize: number;

  BrandId?: string;

  FromDate?: string;

  LocationId?: string;

  Name?: string;

  OrganizationId?: string;

  Status?: string;

  ToDate?: string;
}

export interface PurchaseOrderAddReceivingParams {
  AmountIncTax?: number;

  Attachments?: Array<Uploadable>;

  GRNDiscountType?: string;

  GRNDiscountValue?: number;

  GRNSubTotal?: number;

  GRNTaxesSummary?: Array<PurchaseOrderAddReceivingParams.GrnTaxesSummary>;

  GRNTotal?: number;

  GRNTotalTax?: number;

  InvoiceNumber?: string;

  Items?: Array<PurchaseOrderAddReceivingParams.Item>;

  NotesAndRemarks?: string;

  OrganizationId?: string;

  PurchaseOrderId?: string;

  ReceivingDate?: string;

  TotalTax?: number;
}

export namespace PurchaseOrderAddReceivingParams {
  export interface GrnTaxesSummary {
    id?: number;

    value?: number;
  }

  export interface Item {
    discount?: number;

    discountAmount?: number;

    discountType?: string | null;

    itemId?: string | null;

    landedCost?: number;

    orderedQty?: number;

    price?: number;

    receivedQty?: number;

    remainingQty?: number;

    taxId?: number;

    taxValue?: number;

    totalAmount?: number;

    uomId?: number;
  }
}

export interface PurchaseOrderCountParams {
  locationId?: string;

  organizationId?: string;
}

export interface PurchaseOrderListItemsParams {
  PurchaseOrderId: string;

  CategoryId?: string;

  ItemTypeId?: string;

  OrganizationId?: string;

  SearchTerm?: string;

  StorageAreas?: string;
}

export interface PurchaseOrderListReceivingParams {
  PurchaseOrderReceivingId: string;

  ItemName?: string;

  OrganizationId?: string;
}

export interface PurchaseOrderUpdateStatusParams {
  id?: string;

  organizationGuid?: string | null;

  organizationId?: string | null;

  status?: number;
}

export declare namespace PurchaseOrder {
  export {
    type PurchaseOrderItemData as PurchaseOrderItemData,
    type PurchaseOrderCreateResponse as PurchaseOrderCreateResponse,
    type PurchaseOrderCreateParams as PurchaseOrderCreateParams,
    type PurchaseOrderRetrieveParams as PurchaseOrderRetrieveParams,
    type PurchaseOrderUpdateParams as PurchaseOrderUpdateParams,
    type PurchaseOrderListParams as PurchaseOrderListParams,
    type PurchaseOrderAddReceivingParams as PurchaseOrderAddReceivingParams,
    type PurchaseOrderCountParams as PurchaseOrderCountParams,
    type PurchaseOrderListItemsParams as PurchaseOrderListItemsParams,
    type PurchaseOrderListReceivingParams as PurchaseOrderListReceivingParams,
    type PurchaseOrderUpdateStatusParams as PurchaseOrderUpdateStatusParams,
  };
}
