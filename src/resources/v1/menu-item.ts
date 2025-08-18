// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class MenuItem extends APIResource {
  create(params: MenuItemCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post(
      '/api/v1/MenuItem',
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

  retrieve(id: string, query: MenuItemRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/MenuItem/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: MenuItemUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put(
      '/api/v1/MenuItem',
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

  list(query: MenuItemListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/MenuItem', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  bulkUpdate(params: MenuItemBulkUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/MenuItem/BulkUpdateMenuItem', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  count(query: MenuItemCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/MenuItem/Count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getBrandLocationDiningOptions(
    query: MenuItemGetBrandLocationDiningOptionsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/v1/MenuItem/GetBrandLocationDiningOptions', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getIngredientList(query: MenuItemGetIngredientListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/MenuItem/GetIngredientList', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MenuItemCreateParams {
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
  IsAutoCodeGeneration?: boolean;

  /**
   * Body param:
   */
  MaxFoodCost?: number;

  /**
   * Body param:
   */
  PosCode?: string;

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

export interface MenuItemRetrieveParams {
  organizationId: string;
}

export interface MenuItemUpdateParams {
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
  PosCode?: string;

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

export interface MenuItemListParams {
  organizationId: string;

  BrandIds?: Array<string>;

  CategoryIds?: Array<string>;

  PageNumber?: number;

  PageSize?: number;

  SearchTerm?: string;

  Status?: number;
}

export interface MenuItemBulkUpdateParams {
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
  maxFoodCostPercentage?: number | null;

  /**
   * Body param:
   */
  status?: number | null;
}

export interface MenuItemCountParams {
  organizationId: string;
}

export interface MenuItemGetBrandLocationDiningOptionsParams {
  organizationId: string;

  pageNumber: number;

  pageSize: number;

  diningOptionIds?: Array<string>;

  locationIds?: Array<string>;

  searchTerm?: string;
}

export interface MenuItemGetIngredientListParams {
  menuItemId: string;

  organizationId: string;

  pageNumber: number;

  pageSize: number;

  diningOptionIds?: Array<string>;

  locationIds?: Array<string>;

  searchTerm?: string;
}

export declare namespace MenuItem {
  export {
    type MenuItemCreateParams as MenuItemCreateParams,
    type MenuItemRetrieveParams as MenuItemRetrieveParams,
    type MenuItemUpdateParams as MenuItemUpdateParams,
    type MenuItemListParams as MenuItemListParams,
    type MenuItemBulkUpdateParams as MenuItemBulkUpdateParams,
    type MenuItemCountParams as MenuItemCountParams,
    type MenuItemGetBrandLocationDiningOptionsParams as MenuItemGetBrandLocationDiningOptionsParams,
    type MenuItemGetIngredientListParams as MenuItemGetIngredientListParams,
  };
}
