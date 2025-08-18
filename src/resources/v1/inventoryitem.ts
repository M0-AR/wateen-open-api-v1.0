// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Inventoryitem extends APIResource {
  create(params: InventoryitemCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post(
      '/api/v1/inventoryitem',
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

  retrieve(id: string, query: InventoryitemRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/inventoryitem/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: InventoryitemUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put(
      '/api/v1/inventoryitem',
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

  list(query: InventoryitemListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/inventoryitem', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(params: InventoryitemDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.delete('/api/v1/inventoryitem', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  bulkUpdate(params: InventoryitemBulkUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/inventoryitem/BulkUpdate', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  count(query: InventoryitemCountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/inventoryitem/Count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  currentStock(query: InventoryitemCurrentStockParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/inventoryitem/CurrentStock', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  rollbackTransaction(
    params: InventoryitemRollbackTransactionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/inventoryitem/RollBackItemTransaction', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  stockChanges(query: InventoryitemStockChangesParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/inventoryitem/StockChanges', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  uploadImportFile(params: InventoryitemUploadImportFileParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post(
      '/api/v1/inventoryitem/UploadImportFile',
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
}

export interface InventoryitemCreateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  AvgCost: number;

  /**
   * Body param:
   */
  Name: string;

  /**
   * Body param:
   */
  PARLevel: number;

  /**
   * Body param:
   */
  ReorderLevel: number;

  /**
   * Body param:
   */
  StartingCost: number;

  /**
   * Body param:
   */
  Status: number;

  /**
   * Body param:
   */
  Tolerance: number;

  /**
   * Body param:
   */
  WastagePercentage: number;

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
  Code?: string;

  /**
   * Body param:
   */
  CountingFrequency?: Array<number>;

  /**
   * Body param:
   */
  Image?: Uploadable;

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
  ItemAllocation?: Array<string>;

  /**
   * Body param:
   */
  ParentUnitOfMeasureTypeId?: number;

  /**
   * Body param:
   */
  PurchaseOptions?: Array<InventoryitemCreateParams.PurchaseOption>;

  /**
   * Body param:
   */
  ReportUnit?: Array<string>;

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
  Wastage?: Array<string>;
}

export namespace InventoryitemCreateParams {
  export interface PurchaseOption {
    id?: string | null;

    currency?: number | null;

    enablePurchase?: boolean | null;

    isActive?: boolean | null;

    itemAllocationIds?: Array<string> | null;

    itemCode?: string | null;

    prefered?: boolean;

    price?: number | null;

    productId?: string | null;

    supplierId?: string | null;

    supplierItem?: string | null;

    taxRate?: number | null;

    unitOfMeasureId?: number | null;

    unitOfMeasureQty?: number | null;
  }
}

export interface InventoryitemRetrieveParams {
  organizationId: string;
}

export interface InventoryitemUpdateParams {
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
  AvgCost?: number;

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
  Code?: string;

  /**
   * Body param:
   */
  CountingFrequency?: Array<number>;

  /**
   * Body param:
   */
  Image?: Uploadable;

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
  ItemAllocation?: Array<string>;

  /**
   * Body param:
   */
  Name?: string;

  /**
   * Body param:
   */
  ParentUnitOfMeasureTypeId?: number;

  /**
   * Body param:
   */
  PARLevel?: number;

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
  StartingCost?: number;

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
  Tolerance?: number;

  /**
   * Body param:
   */
  Transfer?: Array<string>;

  /**
   * Body param:
   */
  Wastage?: Array<string>;

  /**
   * Body param:
   */
  WastagePercentage?: number;
}

export interface InventoryitemListParams {
  organizationId: string;

  CategoryIds?: Array<string>;

  ItemAllocation?: Array<string>;

  Name?: string;

  PageNumber?: number;

  PageSize?: number;

  Status?: number;

  SupplierIds?: Array<string>;
}

export interface InventoryitemDeleteParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  id: string;
}

export interface InventoryitemBulkUpdateParams {
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
  countingFrequency?: Array<number> | null;

  /**
   * Body param:
   */
  itemAllocationId?: number | null;

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

  /**
   * Body param:
   */
  taxRate?: number | null;
}

export interface InventoryitemCountParams {
  organizationId: string;
}

export interface InventoryitemCurrentStockParams {
  ItemId: string;

  organizationId: string;

  BrandName?: string;

  LocationName?: string;

  PageNumber?: number;

  PageSize?: number;
}

export interface InventoryitemRollbackTransactionParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  itemId?: string | null;
}

export interface InventoryitemStockChangesParams {
  ItemId: string;

  LocationId: string;

  organizationId: string;

  PageNumber?: number;

  PageSize?: number;

  TransactionTypeId?: string;

  TransactionTypeName?: string;
}

export interface InventoryitemUploadImportFileParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  File: Uploadable;

  /**
   * Body param:
   */
  ImportType: string;
}

export declare namespace Inventoryitem {
  export {
    type InventoryitemCreateParams as InventoryitemCreateParams,
    type InventoryitemRetrieveParams as InventoryitemRetrieveParams,
    type InventoryitemUpdateParams as InventoryitemUpdateParams,
    type InventoryitemListParams as InventoryitemListParams,
    type InventoryitemDeleteParams as InventoryitemDeleteParams,
    type InventoryitemBulkUpdateParams as InventoryitemBulkUpdateParams,
    type InventoryitemCountParams as InventoryitemCountParams,
    type InventoryitemCurrentStockParams as InventoryitemCurrentStockParams,
    type InventoryitemRollbackTransactionParams as InventoryitemRollbackTransactionParams,
    type InventoryitemStockChangesParams as InventoryitemStockChangesParams,
    type InventoryitemUploadImportFileParams as InventoryitemUploadImportFileParams,
  };
}
