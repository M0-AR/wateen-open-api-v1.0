// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class RequisitionTemplate extends APIResource {
  create(params: RequisitionTemplateCreateParams, options?: RequestOptions): APIPromise<unknown> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/RequisitionTemplate', { query: { organizationId }, body, ...options });
  }

  retrieve(
    id: string,
    query: RequisitionTemplateRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/api/v1/RequisitionTemplate/${id}`, { query, ...options });
  }

  update(params: RequisitionTemplateUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/RequisitionTemplate', { query: { organizationId }, body, ...options });
  }

  list(query: RequisitionTemplateListParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/api/v1/RequisitionTemplate', { query, ...options });
  }

  count(query: RequisitionTemplateCountParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/api/v1/RequisitionTemplate/AllRequisitionTemplateCount', { query, ...options });
  }

  updateBulk(params: RequisitionTemplateUpdateBulkParams, options?: RequestOptions): APIPromise<unknown> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/RequisitionTemplate/UpdateBulk', {
      query: { organizationId },
      body,
      ...options,
    });
  }
}

export type RequisitionTemplateCreateResponse = unknown;

export type RequisitionTemplateRetrieveResponse = unknown;

export type RequisitionTemplateUpdateResponse = unknown;

export type RequisitionTemplateListResponse = unknown;

export type RequisitionTemplateCountResponse = unknown;

export type RequisitionTemplateUpdateBulkResponse = unknown;

export interface RequisitionTemplateCreateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  templateName: string;

  /**
   * Body param:
   */
  type: number;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param:
   */
  isActive?: boolean;

  /**
   * Body param:
   */
  items?: Array<RequisitionTemplateCreateParams.Item> | null;

  /**
   * Body param:
   */
  locations?: Array<string> | null;
}

export namespace RequisitionTemplateCreateParams {
  export interface Item {
    daysToDeliver: number;

    itemId: string;

    itemTypeId: number;

    qty: number;

    description?: string | null;

    uom?: number | null;
  }
}

export interface RequisitionTemplateRetrieveParams {
  organizationId: string;
}

export interface RequisitionTemplateUpdateParams {
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
  templateName: string;

  /**
   * Body param:
   */
  type: number;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param:
   */
  isActive?: boolean;

  /**
   * Body param:
   */
  items?: Array<RequisitionTemplateUpdateParams.Item> | null;

  /**
   * Body param:
   */
  locations?: Array<string> | null;
}

export namespace RequisitionTemplateUpdateParams {
  export interface Item {
    daysToDeliver: number;

    itemId: string;

    itemTypeId: number;

    qty: number;

    description?: string | null;

    uom?: number | null;
  }
}

export interface RequisitionTemplateListParams {
  organizationId: string;

  isActive?: boolean;

  locationIds?: string;

  name?: string;

  pageNumber?: number;

  pageSize?: number;
}

export interface RequisitionTemplateCountParams {
  organizationId: string;
}

export interface RequisitionTemplateUpdateBulkParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  ids: Array<string>;

  /**
   * Body param:
   */
  isActive: boolean;
}

export declare namespace RequisitionTemplate {
  export {
    type RequisitionTemplateCreateResponse as RequisitionTemplateCreateResponse,
    type RequisitionTemplateRetrieveResponse as RequisitionTemplateRetrieveResponse,
    type RequisitionTemplateUpdateResponse as RequisitionTemplateUpdateResponse,
    type RequisitionTemplateListResponse as RequisitionTemplateListResponse,
    type RequisitionTemplateCountResponse as RequisitionTemplateCountResponse,
    type RequisitionTemplateUpdateBulkResponse as RequisitionTemplateUpdateBulkResponse,
    type RequisitionTemplateCreateParams as RequisitionTemplateCreateParams,
    type RequisitionTemplateRetrieveParams as RequisitionTemplateRetrieveParams,
    type RequisitionTemplateUpdateParams as RequisitionTemplateUpdateParams,
    type RequisitionTemplateListParams as RequisitionTemplateListParams,
    type RequisitionTemplateCountParams as RequisitionTemplateCountParams,
    type RequisitionTemplateUpdateBulkParams as RequisitionTemplateUpdateBulkParams,
  };
}
