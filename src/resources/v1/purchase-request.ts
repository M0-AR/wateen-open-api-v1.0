// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PurchaseRequest extends APIResource {
  create(body: PurchaseRequestCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/PurchaseRequest', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(id: string, query: PurchaseRequestRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/PurchaseRequest/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(body: PurchaseRequestUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/v1/PurchaseRequest', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: PurchaseRequestListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PurchaseRequest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  approve(id: string, params: PurchaseRequestApproveParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/PurchaseRequest/${id}/approve`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  bulkUpdate(body: PurchaseRequestBulkUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/v1/PurchaseRequest/BulkUpdate', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  count(query: PurchaseRequestCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PurchaseRequest/Count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  reject(id: string, params: PurchaseRequestRejectParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/PurchaseRequest/${id}/reject`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  submit(id: string, params: PurchaseRequestSubmitParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/PurchaseRequest/${id}/submit`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PurchaseRequestCreateParams {
  deliveryDate: string;

  locationId: string;

  organizationId: string;

  requestDate: string;

  sectionId: string;

  status: number;

  description?: string | null;

  items?: Array<PurchaseRequestCreateParams.Item> | null;

  templateId?: string | null;
}

export namespace PurchaseRequestCreateParams {
  export interface Item {
    deliveryDate: string;

    itemId: string;

    qty: number;

    type: number;

    unitOfMeasureId: number;

    description?: string | null;
  }
}

export interface PurchaseRequestRetrieveParams {
  organizationId: string;
}

export interface PurchaseRequestUpdateParams {
  id: string;

  organizationId: string;

  deliveryDate?: string | null;

  description?: string | null;

  items?: Array<PurchaseRequestUpdateParams.Item> | null;

  locationId?: string | null;

  requestDate?: string | null;

  sectionId?: string | null;

  status?: string | null;

  templateId?: string | null;
}

export namespace PurchaseRequestUpdateParams {
  export interface Item {
    deliveryDate?: string | null;

    description?: string | null;

    itemId?: string | null;

    qty?: number;

    type?: number;

    unitOfMeasureId?: number;
  }
}

export interface PurchaseRequestListParams {
  organizationId: string;

  fromDate?: string;

  locationIds?: string;

  pageNumber?: number;

  pageSize?: number;

  searchTerm?: string;

  statusIds?: string;

  toDate?: string;
}

export interface PurchaseRequestApproveParams {
  organizationId: string;
}

export interface PurchaseRequestBulkUpdateParams {
  ids: Array<string>;

  organizationId: string;

  status: string;
}

export interface PurchaseRequestCountParams {
  organizationId: string;
}

export interface PurchaseRequestRejectParams {
  organizationId: string;
}

export interface PurchaseRequestSubmitParams {
  organizationId: string;
}

export declare namespace PurchaseRequest {
  export {
    type PurchaseRequestCreateParams as PurchaseRequestCreateParams,
    type PurchaseRequestRetrieveParams as PurchaseRequestRetrieveParams,
    type PurchaseRequestUpdateParams as PurchaseRequestUpdateParams,
    type PurchaseRequestListParams as PurchaseRequestListParams,
    type PurchaseRequestApproveParams as PurchaseRequestApproveParams,
    type PurchaseRequestBulkUpdateParams as PurchaseRequestBulkUpdateParams,
    type PurchaseRequestCountParams as PurchaseRequestCountParams,
    type PurchaseRequestRejectParams as PurchaseRequestRejectParams,
    type PurchaseRequestSubmitParams as PurchaseRequestSubmitParams,
  };
}
