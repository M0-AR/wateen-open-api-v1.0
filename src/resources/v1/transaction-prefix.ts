// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TransactionPrefix extends APIResource {
  retrieve(id: string, query: TransactionPrefixRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/TransactionPrefix/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deleteTransactionPrefix(
    params: TransactionPrefixDeleteTransactionPrefixParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.delete('/api/v1/TransactionPrefix', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveTransactionPrefix(
    query: TransactionPrefixRetrieveTransactionPrefixParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/v1/TransactionPrefix', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateBulkUpdateTransactionPrefix(
    params: TransactionPrefixUpdateBulkUpdateTransactionPrefixParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/TransactionPrefix/BulkUpdateTransactionPrefix', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateTransactionPrefix(
    params: TransactionPrefixUpdateTransactionPrefixParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/TransactionPrefix', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TransactionPrefixRetrieveParams {
  organizationId: string;
}

export interface TransactionPrefixDeleteTransactionPrefixParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: number;
}

export interface TransactionPrefixRetrieveTransactionPrefixParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  SearchTerm?: string;
}

export interface TransactionPrefixUpdateBulkUpdateTransactionPrefixParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  transactionPrefixes: Array<TransactionPrefixUpdateBulkUpdateTransactionPrefixParams.TransactionPrefix>;
}

export namespace TransactionPrefixUpdateBulkUpdateTransactionPrefixParams {
  export interface TransactionPrefix {
    id: number;

    initialNumber?: number;

    minimumDigits?: number;

    prefix?: string | null;

    useBrand?: boolean;

    useLocation?: boolean;

    useYear?: boolean;
  }
}

export interface TransactionPrefixUpdateTransactionPrefixParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: number;

  /**
   * Body param:
   */
  initialNumber?: number;

  /**
   * Body param:
   */
  minimumDigits?: number;

  /**
   * Body param:
   */
  prefix?: string | null;

  /**
   * Body param:
   */
  useBrand?: boolean;

  /**
   * Body param:
   */
  useLocation?: boolean;

  /**
   * Body param:
   */
  useYear?: boolean;
}

export declare namespace TransactionPrefix {
  export {
    type TransactionPrefixRetrieveParams as TransactionPrefixRetrieveParams,
    type TransactionPrefixDeleteTransactionPrefixParams as TransactionPrefixDeleteTransactionPrefixParams,
    type TransactionPrefixRetrieveTransactionPrefixParams as TransactionPrefixRetrieveTransactionPrefixParams,
    type TransactionPrefixUpdateBulkUpdateTransactionPrefixParams as TransactionPrefixUpdateBulkUpdateTransactionPrefixParams,
    type TransactionPrefixUpdateTransactionPrefixParams as TransactionPrefixUpdateTransactionPrefixParams,
  };
}
