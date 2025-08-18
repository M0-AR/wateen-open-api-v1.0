// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TransferInAPI from './transfer-in';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class TransferOut extends APIResource {
  retrieve(id: string, query: TransferOutRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/Transfer/TransferOut/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  approve(id: string, params: TransferOutApproveParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/Transfer/TransferOut/${id}/Approve`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  finalize(id: string, params: TransferOutFinalizeParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/Transfer/TransferOut/${id}/Finalize`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  fulfill(params: TransferOutFulfillParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/Transfer/TransferOut/Fulfill', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  reject(id: string, params: TransferOutRejectParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/Transfer/TransferOut/${id}/Reject`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveCount(query: TransferOutRetrieveCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Transfer/TransferOut/Count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveTransferOut(
    query: TransferOutRetrieveTransferOutParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/v1/Transfer/TransferOut', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  submit(id: string, params: TransferOutSubmitParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/Transfer/TransferOut/${id}/Submit`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  transferOut(params: TransferOutTransferOutParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/Transfer/TransferOut', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateTransferOut(params: TransferOutUpdateTransferOutParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Transfer/TransferOut', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TransferOutRetrieveParams {
  organizationId: string;
}

export interface TransferOutApproveParams {
  organizationId: string;
}

export interface TransferOutFinalizeParams {
  organizationId: string;
}

export interface TransferOutFulfillParams {
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
  fulfillmentDate: string;

  /**
   * Body param:
   */
  transferItems: Array<TransferOutFulfillParams.TransferItem>;

  /**
   * Body param:
   */
  sourceNote?: string | null;
}

export namespace TransferOutFulfillParams {
  export interface TransferItem {
    id: string;

    itemQuantities: Array<TransferInAPI.TransferItemQuantity>;
  }
}

export interface TransferOutRejectParams {
  organizationId: string;
}

export interface TransferOutRetrieveCountParams {
  organizationId: string;
}

export interface TransferOutRetrieveTransferOutParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  Date?: TransferOutRetrieveTransferOutParams.Date;

  LocationId?: string;

  SearchTerm?: string;

  Status?: number;
}

export namespace TransferOutRetrieveTransferOutParams {
  export interface Date {
    End?: string;

    Start?: string;
  }
}

export interface TransferOutSubmitParams {
  organizationId: string;
}

export interface TransferOutTransferOutParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  destinationLocationId: string;

  /**
   * Body param:
   */
  fulfillmentDate: string;

  /**
   * Body param:
   */
  sourceLocationId: string;

  /**
   * Body param:
   */
  transferItems: Array<TransferInAPI.TransferItem>;

  /**
   * Body param:
   */
  sourceNote?: string | null;
}

export interface TransferOutUpdateTransferOutParams {
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
  destinationLocationId: string;

  /**
   * Body param:
   */
  fulfillmentDate: string;

  /**
   * Body param:
   */
  sourceLocationId: string;

  /**
   * Body param:
   */
  transferItems: Array<TransferInAPI.TransferItem>;

  /**
   * Body param:
   */
  sourceNote?: string | null;
}

export declare namespace TransferOut {
  export {
    type TransferOutRetrieveParams as TransferOutRetrieveParams,
    type TransferOutApproveParams as TransferOutApproveParams,
    type TransferOutFinalizeParams as TransferOutFinalizeParams,
    type TransferOutFulfillParams as TransferOutFulfillParams,
    type TransferOutRejectParams as TransferOutRejectParams,
    type TransferOutRetrieveCountParams as TransferOutRetrieveCountParams,
    type TransferOutRetrieveTransferOutParams as TransferOutRetrieveTransferOutParams,
    type TransferOutSubmitParams as TransferOutSubmitParams,
    type TransferOutTransferOutParams as TransferOutTransferOutParams,
    type TransferOutUpdateTransferOutParams as TransferOutUpdateTransferOutParams,
  };
}
