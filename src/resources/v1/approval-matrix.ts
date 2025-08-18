// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ApprovalMatrix extends APIResource {
  create(params: ApprovalMatrixCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/approval-matrix', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(id: string, query: ApprovalMatrixRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/approval-matrix/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(id: string, params: ApprovalMatrixUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put(path`/api/v1/approval-matrix/${id}`, {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(query: ApprovalMatrixListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/approval-matrix', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ApprovalLayer {
  amount?: number;

  approvalCondition?: ApprovalLayer.ApprovalCondition;

  order?: number;
}

export namespace ApprovalLayer {
  export interface ApprovalCondition {
    type?: number;

    values?: Array<string> | null;
  }
}

export interface ApprovalRule {
  type?: number;

  values?: Array<string> | null;
}

export interface ApprovalMatrixCreateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  layers: Array<ApprovalLayer>;

  /**
   * Body param:
   */
  rules: Array<ApprovalRule>;

  /**
   * Body param:
   */
  transactionTypes: Array<number>;
}

export interface ApprovalMatrixRetrieveParams {
  organizationId: string;
}

export interface ApprovalMatrixUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  layers: Array<ApprovalLayer>;

  /**
   * Body param:
   */
  rules: Array<ApprovalRule>;

  /**
   * Body param:
   */
  transactionTypes: Array<number>;

  /**
   * Body param:
   */
  isActive?: boolean;
}

export interface ApprovalMatrixListParams {
  organizationId: string;
}

export declare namespace ApprovalMatrix {
  export {
    type ApprovalLayer as ApprovalLayer,
    type ApprovalRule as ApprovalRule,
    type ApprovalMatrixCreateParams as ApprovalMatrixCreateParams,
    type ApprovalMatrixRetrieveParams as ApprovalMatrixRetrieveParams,
    type ApprovalMatrixUpdateParams as ApprovalMatrixUpdateParams,
    type ApprovalMatrixListParams as ApprovalMatrixListParams,
  };
}
