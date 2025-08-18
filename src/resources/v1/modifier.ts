// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Modifier extends APIResource {
  create(params: ModifierCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post(
      '/api/v1/Modifier',
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

  retrieve(id: string, query: ModifierRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/Modifier/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: ModifierUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put(
      '/api/v1/Modifier',
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

  list(query: ModifierListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Modifier', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  bulkUpdate(params: ModifierBulkUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Modifier/BulkUpdateModifier', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  count(query: ModifierCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Modifier/Count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getBrandLocationDiningOptions(
    query: ModifierGetBrandLocationDiningOptionsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/v1/Modifier/GetBrandLocationDiningOptions', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getIngredientList(query: ModifierGetIngredientListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Modifier/GetIngredientList', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface IngredientsData {
  id?: string | null;

  costPerUnit?: number | null;

  excludeDiningOptionIds?: Array<string> | null;

  excludeLocationIds?: Array<string> | null;

  grossQty?: number | null;

  grossWastage?: number | null;

  itemId?: string | null;

  netQty?: number | null;

  recipeCosting?: boolean | null;

  totalCost?: number | null;

  type?: number;

  uomId?: number | null;

  wastageInPercentage?: number | null;
}

export interface PriceListData {
  brandId?: string | null;

  diningOptionId?: string | null;

  foodCostPercentage?: number;

  isActive?: boolean;

  itemId?: string | null;

  locationId?: string | null;

  maxCostPercentage?: number;

  netPrice?: number;

  recipeCost?: number;
}

export interface ModifierCreateParams {
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
  GroupId: string;

  /**
   * Body param:
   */
  Name: string;

  /**
   * Body param:
   */
  AdditionalInfo?: string;

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
  FoodCost?: number;

  /**
   * Body param:
   */
  Image?: Uploadable;

  /**
   * Body param:
   */
  Ingredients?: Array<IngredientsData>;

  /**
   * Body param:
   */
  IsAutoCodeGeneration?: boolean;

  /**
   * Body param:
   */
  MaxFoodCost?: number;

  /**
   * Body param:
   */
  POSCode?: string;

  /**
   * Body param:
   */
  PrepTime?: number;

  /**
   * Body param:
   */
  Price?: number;

  /**
   * Body param:
   */
  PriceList?: Array<PriceListData>;

  /**
   * Body param:
   */
  ProcedureFiles?: Array<Uploadable>;

  /**
   * Body param:
   */
  RecipeCost?: number;

  /**
   * Body param:
   */
  ShowLocationsColumn?: boolean;

  /**
   * Body param:
   */
  Status?: number;

  /**
   * Body param:
   */
  Synchoronization?: boolean;
}

export interface ModifierRetrieveParams {
  organizationId: string;
}

export interface ModifierUpdateParams {
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
  CategoryId?: string;

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
  FoodCost?: number;

  /**
   * Body param:
   */
  GroupId?: string;

  /**
   * Body param:
   */
  Image?: Uploadable;

  /**
   * Body param:
   */
  Ingredients?: Array<IngredientsData>;

  /**
   * Body param:
   */
  IsAutoCodeGeneration?: boolean;

  /**
   * Body param:
   */
  MaxFoodCost?: number;

  /**
   * Body param:
   */
  Name?: string;

  /**
   * Body param:
   */
  POSCode?: string;

  /**
   * Body param:
   */
  PrepTime?: number;

  /**
   * Body param:
   */
  Price?: number;

  /**
   * Body param:
   */
  PriceList?: Array<PriceListData>;

  /**
   * Body param:
   */
  ProcedureFiles?: Array<Uploadable>;

  /**
   * Body param:
   */
  RecipeCost?: number;

  /**
   * Body param:
   */
  ShowLocationsColumn?: boolean;

  /**
   * Body param:
   */
  Status?: number;

  /**
   * Body param:
   */
  Synchoronization?: boolean;
}

export interface ModifierListParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  BrandIds?: string;

  CategoryIds?: string;

  GroupIds?: string;

  SearchTerm?: string;

  Status?: number;
}

export interface ModifierBulkUpdateParams {
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
  categoryId?: string | null;

  /**
   * Body param:
   */
  groupId?: string | null;

  /**
   * Body param:
   */
  maxFoodCostPercentage?: number | null;

  /**
   * Body param:
   */
  status?: number | null;
}

export interface ModifierCountParams {
  organizationId: string;
}

export interface ModifierGetBrandLocationDiningOptionsParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  DiningOptionIds?: string;

  LocationIds?: string;

  SearchTerm?: string;
}

export interface ModifierGetIngredientListParams {
  ModifierId: string;

  organizationId: string;

  PageNumber: number;

  PageSize: number;

  DiningOptionIds?: string;

  LocationIds?: string;

  SearchTerm?: string;
}

export declare namespace Modifier {
  export {
    type IngredientsData as IngredientsData,
    type PriceListData as PriceListData,
    type ModifierCreateParams as ModifierCreateParams,
    type ModifierRetrieveParams as ModifierRetrieveParams,
    type ModifierUpdateParams as ModifierUpdateParams,
    type ModifierListParams as ModifierListParams,
    type ModifierBulkUpdateParams as ModifierBulkUpdateParams,
    type ModifierCountParams as ModifierCountParams,
    type ModifierGetBrandLocationDiningOptionsParams as ModifierGetBrandLocationDiningOptionsParams,
    type ModifierGetIngredientListParams as ModifierGetIngredientListParams,
  };
}
