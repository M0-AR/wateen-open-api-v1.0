// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TransferInAPI from './transfer-in';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class TransferIn extends APIResource {
  retrieve(id: string, query: TransferInRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/Transfer/TransferIn/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  approve(id: string, params: TransferInApproveParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/Transfer/TransferIn/${id}/Approve`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  finalize(id: string, params: TransferInFinalizeParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/Transfer/TransferIn/${id}/Finalize`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  receive(params: TransferInReceiveParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/Transfer/TransferIn/Receive', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  reject(id: string, params: TransferInRejectParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/Transfer/TransferIn/${id}/Reject`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveCount(query: TransferInRetrieveCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Transfer/TransferIn/Count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveTransferIn(query: TransferInRetrieveTransferInParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Transfer/TransferIn', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  submit(id: string, params: TransferInSubmitParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.post(path`/api/v1/Transfer/TransferIn/${id}/Submit`, {
      query: { organizationId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  transferIn(params: TransferInTransferInParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/Transfer/TransferIn', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateTransferIn(params: TransferInUpdateTransferInParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Transfer/TransferIn', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TransferItem {
  id: string;

  unitOfMeasureType: TransferItem.UnitOfMeasureType;
}

export namespace TransferItem {
  export interface UnitOfMeasureType {
    id: number;

    unitOfMeasureQuantities: Array<UnitOfMeasureType.UnitOfMeasureQuantity>;
  }

  export namespace UnitOfMeasureType {
    export interface UnitOfMeasureQuantity {
      id: number;

      quantity: number;
    }
  }
}

export interface TransferItemQuantity {
  quantity: number;

  unitOfMeasureQuantityId: string;
}

export interface TransferInRetrieveParams {
  organizationId: string;
}

export interface TransferInApproveParams {
  organizationId: string;
}

export interface TransferInFinalizeParams {
  organizationId: string;
}

export interface TransferInReceiveParams {
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
  receivingDate: string;

  /**
   * Body param:
   */
  transferItems: Array<TransferInReceiveParams.TransferItem>;

  /**
   * Body param:
   */
  destinationNote?: string | null;
}

export namespace TransferInReceiveParams {
  export interface TransferItem {
    id: string;

    itemQuantities: Array<TransferInAPI.TransferItemQuantity>;
  }
}

export interface TransferInRejectParams {
  organizationId: string;
}

export interface TransferInRetrieveCountParams {
  organizationId: string;
}

export interface TransferInRetrieveTransferInParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  FulfillingDate?: TransferInRetrieveTransferInParams.FulfillingDate;

  LocationId?: string;

  RequestDate?: TransferInRetrieveTransferInParams.RequestDate;

  SearchTerm?: string;

  Status?: number;
}

export namespace TransferInRetrieveTransferInParams {
  export interface FulfillingDate {
    End?: string;

    Start?: string;
  }

  export interface RequestDate {
    End?: string;

    Start?: string;
  }
}

export interface TransferInSubmitParams {
  organizationId: string;
}

export interface TransferInTransferInParams {
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
  sourceLocationId: string;

  /**
   * Body param:
   */
  suggestedDeliveryDate: string;

  /**
   * Body param:
   */
  transferItems: Array<TransferItem>;

  /**
   * Body param:
   */
  destinationNote?: string | null;
}

export interface TransferInUpdateTransferInParams {
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
  sourceLocationId: string;

  /**
   * Body param:
   */
  suggestedDeliveryDate: string;

  /**
   * Body param:
   */
  transferItems: Array<TransferItem>;

  /**
   * Body param:
   */
  destinationNote?: string | null;
}

export declare namespace TransferIn {
  export {
    type TransferItem as TransferItem,
    type TransferItemQuantity as TransferItemQuantity,
    type TransferInRetrieveParams as TransferInRetrieveParams,
    type TransferInApproveParams as TransferInApproveParams,
    type TransferInFinalizeParams as TransferInFinalizeParams,
    type TransferInReceiveParams as TransferInReceiveParams,
    type TransferInRejectParams as TransferInRejectParams,
    type TransferInRetrieveCountParams as TransferInRetrieveCountParams,
    type TransferInRetrieveTransferInParams as TransferInRetrieveTransferInParams,
    type TransferInSubmitParams as TransferInSubmitParams,
    type TransferInTransferInParams as TransferInTransferInParams,
    type TransferInUpdateTransferInParams as TransferInUpdateTransferInParams,
  };
}
