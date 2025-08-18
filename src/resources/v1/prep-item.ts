// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class PrepItem extends APIResource {
  create(params: PrepItemCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post(
      '/api/v1/PrepItem',
      multipartFormRequestOptions(
        {
          query: { organizationId },
          body,
          ...options,
          headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        },
        this._client,
      ),
    );
  }

  retrieve(id: string, query: PrepItemRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/PrepItem/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: PrepItemUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put(
      '/api/v1/PrepItem',
      multipartFormRequestOptions(
        {
          query: { organizationId },
          body,
          ...options,
          headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        },
        this._client,
      ),
    );
  }

  list(query: PrepItemListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PrepItem', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  bulkUpdate(params: PrepItemBulkUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/PrepItem/BulkUpdatePrepItem', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  count(query: PrepItemCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PrepItem/Count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getCurrentStock(query: PrepItemGetCurrentStockParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PrepItem/PrepCurrentStock', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getIngredientList(query: PrepItemGetIngredientListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PrepItem/GetIngredientList', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getStockChanges(query: PrepItemGetStockChangesParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/PrepItem/PrepStockChanges', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CountingFrequency {
  frequency?: number;

  locationId?: number;

  locationName?: string | null;
}

export interface Ingredient {
  id?: string | null;

  costPerUnit?: number | null;

  grossQty?: number | null;

  itemId?: string | null;

  itemName?: string | null;

  netQuantity?: number | null;

  quantity?: number;

  totalCost?: number | null;

  type?: 0 | 1 | 2;

  unitOfMeasureId?: number;

  unitOfMeasureName?: string | null;

  wastageInPercentage?: number | null;
}

export interface TransactionUnit {
  baseConversionRate?: number;

  conversionRate?: number;

  unitOfMeasureId?: number;

  unitOfMeasureName?: string | null;
}

export interface PrepItemCreateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  CategoryId: string;

  /**
   * Body param:
   */
  Name: string;

  /**
   * Body param:
   */
  YieldUOMId: number;

  /**
   * Body param:
   */
  AdditionalInfo?: string;

  /**
   * Body param:
   */
  Calory?: number;

  /**
   * Body param:
   */
  Code?: string;

  /**
   * Body param:
   */
  CookInstructions?: string;

  /**
   * Body param:
   */
  CookTime?: number;

  /**
   * Body param:
   */
  CostPerUnit?: number;

  /**
   * Body param:
   */
  CostPerYield?: number;

  /**
   * Body param:
   */
  CountingFrequency?: Array<CountingFrequency>;

  /**
   * Body param:
   */
  Image?: Uploadable;

  /**
   * Body param:
   */
  Ingredients?: Array<Ingredient>;

  /**
   * Body param:
   */
  InventoryCount?: Array<string>;

  /**
   * Body param:
   */
  IsAutoCodeGeneration?: boolean;

  /**
   * Body param:
   */
  ItemAllocationIds?: Array<string>;

  /**
   * Body param:
   */
  PARLevel?: number;

  /**
   * Body param:
   */
  PrepTime?: number;

  /**
   * Body param:
   */
  ProcedureFiles?: Array<Uploadable>;

  /**
   * Body param:
   */
  ReorderLevel?: number;

  /**
   * Body param:
   */
  ReportUnit?: Array<string>;

  /**
   * Body param:
   */
  Status?: number;

  /**
   * Body param:
   */
  StorageAreaIds?: Array<string>;

  /**
   * Body param:
   */
  Transfer?: Array<string>;

  /**
   * Body param:
   */
  Type?: 0 | 1 | 2;

  /**
   * Body param:
   */
  Wastage?: Array<string>;

  /**
   * Body param:
   */
  YieldQty?: number;
}

export interface PrepItemRetrieveParams {
  organizationId: string;
}

export interface PrepItemUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  Id: string;

  /**
   * Body param:
   */
  AdditionalInfo?: string;

  /**
   * Body param:
   */
  Calory?: number;

  /**
   * Body param:
   */
  CategoryId?: string;

  /**
   * Body param:
   */
  CookInstructions?: string;

  /**
   * Body param:
   */
  CookTime?: number;

  /**
   * Body param:
   */
  CostPerUnit?: number;

  /**
   * Body param:
   */
  CostPerYield?: number;

  /**
   * Body param:
   */
  CountingFrequency?: Array<CountingFrequency>;

  /**
   * Body param:
   */
  Image?: Uploadable;

  /**
   * Body param:
   */
  Ingredients?: Array<Ingredient>;

  /**
   * Body param:
   */
  InventoryCount?: Array<TransactionUnit>;

  /**
   * Body param:
   */
  ItemAllocationIds?: Array<string>;

  /**
   * Body param:
   */
  Name?: string;

  /**
   * Body param:
   */
  PARLevel?: number;

  /**
   * Body param:
   */
  PrepTime?: number;

  /**
   * Body param:
   */
  ProcedureFiles?: Array<Uploadable>;

  /**
   * Body param:
   */
  ReorderLevel?: number;

  /**
   * Body param:
   */
  ReportUnit?: Array<TransactionUnit>;

  /**
   * Body param:
   */
  Status?: number;

  /**
   * Body param:
   */
  StorageAreaIds?: Array<string>;

  /**
   * Body param:
   */
  Transfer?: Array<TransactionUnit>;

  /**
   * Body param:
   */
  Wastage?: Array<TransactionUnit>;

  /**
   * Body param:
   */
  YieldQty?: number;

  /**
   * Body param:
   */
  YieldUOMId?: number;
}

export interface PrepItemListParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  CategoryIds?: string;

  ItemAllocations?: string;

  Name?: string;

  Status?: number;

  Types?: string;
}

export interface PrepItemBulkUpdateParams {
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
  itemAllocationIds?: Array<string> | null;

  /**
   * Body param:
   */
  parLevel?: number | null;

  /**
   * Body param:
   */
  reorderLevel?: number | null;

  /**
   * Body param:
   */
  status?: number | null;
}

export interface PrepItemCountParams {
  organizationId: string;
}

export interface PrepItemGetCurrentStockParams {
  ItemId: string;

  organizationId: string;

  PageNumber: number;

  PageSize: number;

  BrandName?: string;

  LocationName?: string;
}

export interface PrepItemGetIngredientListParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  PrepItemId: string;

  LocationId?: string;
}

export interface PrepItemGetStockChangesParams {
  ItemId: string;

  LocationId: string;

  organizationId: string;

  PageNumber: number;

  PageSize: number;

  TransactionTypeId?: string;

  TransactionTypeName?: string;
}

export declare namespace PrepItem {
  export {
    type CountingFrequency as CountingFrequency,
    type Ingredient as Ingredient,
    type TransactionUnit as TransactionUnit,
    type PrepItemCreateParams as PrepItemCreateParams,
    type PrepItemRetrieveParams as PrepItemRetrieveParams,
    type PrepItemUpdateParams as PrepItemUpdateParams,
    type PrepItemListParams as PrepItemListParams,
    type PrepItemBulkUpdateParams as PrepItemBulkUpdateParams,
    type PrepItemCountParams as PrepItemCountParams,
    type PrepItemGetCurrentStockParams as PrepItemGetCurrentStockParams,
    type PrepItemGetIngredientListParams as PrepItemGetIngredientListParams,
    type PrepItemGetStockChangesParams as PrepItemGetStockChangesParams,
  };
}
