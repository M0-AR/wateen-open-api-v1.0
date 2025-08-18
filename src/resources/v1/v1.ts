// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ApprovalMatrixAPI from './approval-matrix';
import {
  ApprovalLayer,
  ApprovalMatrix,
  ApprovalMatrixCreateParams,
  ApprovalMatrixListParams,
  ApprovalMatrixRetrieveParams,
  ApprovalMatrixUpdateParams,
  ApprovalRule,
} from './approval-matrix';
import * as CategoryAPI from './category';
import {
  Category,
  CategoryCreateParams,
  CategoryDeleteParams,
  CategoryListParams,
  CategoryRetrieveParams,
  CategoryUpdateBulkParams,
  CategoryUpdateParams,
  PrefixData,
} from './category';
import * as CategoryPrefixAPI from './category-prefix';
import {
  CategoryPrefix,
  CategoryPrefixBulkUpdateParams,
  CategoryPrefixDeleteParams,
  CategoryPrefixListParams,
  CategoryPrefixRetrieveParams,
  CategoryPrefixUpdateParams,
} from './category-prefix';
import * as ClassAPI from './class';
import {
  Class,
  ClassBulkUpdateParams,
  ClassCreateParams,
  ClassDeleteParams,
  ClassListParams,
  ClassRetrieveParams,
  ClassUpdateParams,
} from './class';
import * as CurrencyAPI from './currency';
import {
  Currency,
  CurrencyGetExchangeRateParams,
  CurrencyListParams,
  CurrencyUpdateParams,
} from './currency';
import * as DiningOptionAPI from './dining-option';
import {
  DiningOption,
  DiningOptionCreateParams,
  DiningOptionCreateResponse,
  DiningOptionListParams,
  DiningOptionListResponse,
  DiningOptionRetrieveParams,
  DiningOptionRetrieveResponse,
  DiningOptionUpdateParams,
  DiningOptionUpdateResponse,
} from './dining-option';
import * as EntityPrefixAPI from './entity-prefix';
import {
  EntityPrefix,
  EntityPrefixBulkUpdateParams,
  EntityPrefixDeleteParams,
  EntityPrefixListParams,
  EntityPrefixRetrieveParams,
  EntityPrefixUpdateParams,
} from './entity-prefix';
import * as GenericItemAPI from './generic-item';
import { GenericItem, GenericItemListParams, GenericItemRetrieveParams } from './generic-item';
import * as InventoryitemAPI from './inventoryitem';
import {
  Inventoryitem,
  InventoryitemBulkUpdateParams,
  InventoryitemCountParams,
  InventoryitemCreateParams,
  InventoryitemCurrentStockParams,
  InventoryitemDeleteParams,
  InventoryitemListParams,
  InventoryitemRetrieveParams,
  InventoryitemRollbackTransactionParams,
  InventoryitemStockChangesParams,
  InventoryitemUpdateParams,
  InventoryitemUploadImportFileParams,
} from './inventoryitem';
import * as LocationAPI from './location';
import {
  Location,
  LocationCountAllParams,
  LocationCreateParams,
  LocationGetHierarchyByActiveParams,
  LocationGetHierarchyParams,
  LocationListAllParams,
  LocationListParams,
  LocationRetrieveParams,
  LocationUpdateBulkParams,
  LocationUpdateParams,
} from './location';
import * as MarketPlaceAppAPI from './market-place-app';
import {
  MarketPlaceApp,
  MarketPlaceAppCreateParams,
  MarketPlaceAppDeleteParams,
  MarketPlaceAppInstallParams,
  MarketPlaceAppRetrieveParams,
  MarketPlaceAppSearchParams,
  MarketPlaceAppUninstallParams,
  MarketPlaceAppUpdateParams,
} from './market-place-app';
import * as MenuItemAPI from './menu-item';
import {
  MenuItem,
  MenuItemBulkUpdateParams,
  MenuItemCountParams,
  MenuItemCreateParams,
  MenuItemGetBrandLocationDiningOptionsParams,
  MenuItemGetIngredientListParams,
  MenuItemListParams,
  MenuItemRetrieveParams,
  MenuItemUpdateParams,
} from './menu-item';
import * as ModifierAPI from './modifier';
import {
  IngredientsData,
  Modifier,
  ModifierBulkUpdateParams,
  ModifierCountParams,
  ModifierCreateParams,
  ModifierGetBrandLocationDiningOptionsParams,
  ModifierGetIngredientListParams,
  ModifierListParams,
  ModifierRetrieveParams,
  ModifierUpdateParams,
  PriceListData,
} from './modifier';
import * as ModifierGroupAPI from './modifier-group';
import {
  ModifierGroup,
  ModifierGroupBulkUpdateParams,
  ModifierGroupCountParams,
  ModifierGroupCreateParams,
  ModifierGroupDeleteParams,
  ModifierGroupListParams,
  ModifierGroupRetrieveParams,
  ModifierGroupUpdateParams,
} from './modifier-group';
import * as PrefixConfigurationAPI from './prefix-configuration';
import {
  PrefixConfiguration,
  PrefixConfigurationGetCodeParams,
  PrefixConfigurationRetrieveParams,
} from './prefix-configuration';
import * as PrepItemAPI from './prep-item';
import {
  CountingFrequency,
  Ingredient,
  PrepItem,
  PrepItemBulkUpdateParams,
  PrepItemCountParams,
  PrepItemCreateParams,
  PrepItemGetCurrentStockParams,
  PrepItemGetIngredientListParams,
  PrepItemGetStockChangesParams,
  PrepItemListParams,
  PrepItemRetrieveParams,
  PrepItemUpdateParams,
  TransactionUnit,
} from './prep-item';
import * as ProductionAPI from './production';
import {
  Production,
  ProductionApproveParams,
  ProductionBulkUpdateParams,
  ProductionChangeToEditPostParams,
  ProductionCountParams,
  ProductionCreateParams,
  ProductionItem,
  ProductionListParams,
  ProductionLockUnlockParams,
  ProductionRejectParams,
  ProductionRetrieveParams,
  ProductionSubmitForApprovalParams,
  ProductionUpdateParams,
} from './production';
import * as PurchaseOptionAPI from './purchase-option';
import {
  PurchaseOption,
  PurchaseOptionCreateParams,
  PurchaseOptionDeleteParams,
  PurchaseOptionListParams,
  PurchaseOptionListSuppliersParams,
  PurchaseOptionRetrieveParams,
  PurchaseOptionUpdateParams,
} from './purchase-option';
import * as PurchaseOrderAPI from './purchase-order';
import {
  PurchaseOrder,
  PurchaseOrderAddReceivingParams,
  PurchaseOrderCountParams,
  PurchaseOrderCreateParams,
  PurchaseOrderCreateResponse,
  PurchaseOrderItemData,
  PurchaseOrderListItemsParams,
  PurchaseOrderListParams,
  PurchaseOrderListReceivingParams,
  PurchaseOrderRetrieveParams,
  PurchaseOrderUpdateParams,
  PurchaseOrderUpdateStatusParams,
} from './purchase-order';
import * as PurchaseRequestAPI from './purchase-request';
import {
  PurchaseRequest,
  PurchaseRequestApproveParams,
  PurchaseRequestBulkUpdateParams,
  PurchaseRequestCountParams,
  PurchaseRequestCreateParams,
  PurchaseRequestListParams,
  PurchaseRequestRejectParams,
  PurchaseRequestRetrieveParams,
  PurchaseRequestSubmitParams,
  PurchaseRequestUpdateParams,
} from './purchase-request';
import * as ReportsAPI from './reports';
import { ReportBulkUpdateParams, ReportListParams, Reports } from './reports';
import * as RequisitionQueueAPI from './requisition-queue';
import {
  RequisitionQueue,
  RequisitionQueueCreateParams,
  RequisitionQueueListParams,
} from './requisition-queue';
import * as RequisitionTemplateAPI from './requisition-template';
import {
  RequisitionTemplate,
  RequisitionTemplateCountParams,
  RequisitionTemplateCountResponse,
  RequisitionTemplateCreateParams,
  RequisitionTemplateCreateResponse,
  RequisitionTemplateListParams,
  RequisitionTemplateListResponse,
  RequisitionTemplateRetrieveParams,
  RequisitionTemplateRetrieveResponse,
  RequisitionTemplateUpdateBulkParams,
  RequisitionTemplateUpdateBulkResponse,
  RequisitionTemplateUpdateParams,
  RequisitionTemplateUpdateResponse,
} from './requisition-template';
import * as ReturnOrderAPI from './return-order';
import {
  ReturnOrder,
  ReturnOrderApproveParams,
  ReturnOrderCountParams,
  ReturnOrderCreateParams,
  ReturnOrderEligibleItemsParams,
  ReturnOrderItemsDetailParams,
  ReturnOrderListParams,
  ReturnOrderLockUnlockParams,
  ReturnOrderRejectParams,
  ReturnOrderRetrieveParams,
  ReturnOrderSubmitParams,
  ReturnOrderUpdateParams,
  ReturnOrderUpdateStatusParams,
} from './return-order';
import * as RolesAPI from './roles';
import {
  RoleAddUserRoleParams,
  RoleCreateParams,
  RoleDeleteRemoveUserRoleParams,
  RoleListParams,
  RoleRetrieveCountParams,
  RoleRetrieveParams,
  RoleRetrieveUsersParams,
  RoleUpdateParams,
  Roles,
} from './roles';
import * as SectionAPI from './section';
import {
  Section,
  SectionRetrieveSectionParams,
  SectionSectionParams,
  SectionUpdateSectionParams,
  SectionUpdateUpdateBulkParams,
} from './section';
import * as StorageAreaAPI from './storage-area';
import {
  StorageArea,
  StorageAreaRetrieveParams,
  StorageAreaRetrieveStorageAreaParams,
  StorageAreaStorageAreaParams,
  StorageAreaUpdateStorageAreaParams,
} from './storage-area';
import * as SupplierAPI from './supplier';
import {
  DistributerData,
  Supplier,
  SupplierRetrieveCountParams,
  SupplierRetrieveParams,
  SupplierRetrieveSupplierParams,
  SupplierSupplierParams,
  SupplierUpdateBulkUpdateParams,
  SupplierUpdateSupplierParams,
} from './supplier';
import * as SystemTaxSettingAPI from './system-tax-setting';
import {
  SystemTaxSetting,
  SystemTaxSettingDeleteSystemTaxSettingParams,
  SystemTaxSettingRetrieveParams,
  SystemTaxSettingRetrieveSystemTaxSettingParams,
  SystemTaxSettingSeedInitialDataToElasticSearchParams,
  SystemTaxSettingSystemTaxSettingParams,
  SystemTaxSettingUpdateSystemTaxSettingParams,
} from './system-tax-setting';
import * as TransactionPrefixAPI from './transaction-prefix';
import {
  TransactionPrefix,
  TransactionPrefixDeleteTransactionPrefixParams,
  TransactionPrefixRetrieveParams,
  TransactionPrefixRetrieveTransactionPrefixParams,
  TransactionPrefixUpdateBulkUpdateTransactionPrefixParams,
  TransactionPrefixUpdateTransactionPrefixParams,
} from './transaction-prefix';
import * as WasteReasonAPI from './waste-reason';
import {
  WasteReason,
  WasteReasonRetrieveWasteReasonParams,
  WasteReasonWasteReasonParams,
} from './waste-reason';
import * as BuyerAPI from './buyer/buyer';
import { Buyer } from './buyer/buyer';
import * as DashBoardAPI from './dash-board/dash-board';
import { DashBoard } from './dash-board/dash-board';
import * as TransferAPI from './transfer/transfer';
import { Transfer } from './transfer/transfer';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  approvalMatrix: ApprovalMatrixAPI.ApprovalMatrix = new ApprovalMatrixAPI.ApprovalMatrix(this._client);
  buyer: BuyerAPI.Buyer = new BuyerAPI.Buyer(this._client);
  category: CategoryAPI.Category = new CategoryAPI.Category(this._client);
  categoryPrefix: CategoryPrefixAPI.CategoryPrefix = new CategoryPrefixAPI.CategoryPrefix(this._client);
  class: ClassAPI.Class = new ClassAPI.Class(this._client);
  currency: CurrencyAPI.Currency = new CurrencyAPI.Currency(this._client);
  dashBoard: DashBoardAPI.DashBoard = new DashBoardAPI.DashBoard(this._client);
  diningOption: DiningOptionAPI.DiningOption = new DiningOptionAPI.DiningOption(this._client);
  entityPrefix: EntityPrefixAPI.EntityPrefix = new EntityPrefixAPI.EntityPrefix(this._client);
  genericItem: GenericItemAPI.GenericItem = new GenericItemAPI.GenericItem(this._client);
  location: LocationAPI.Location = new LocationAPI.Location(this._client);
  marketPlaceApp: MarketPlaceAppAPI.MarketPlaceApp = new MarketPlaceAppAPI.MarketPlaceApp(this._client);
  menuItem: MenuItemAPI.MenuItem = new MenuItemAPI.MenuItem(this._client);
  modifier: ModifierAPI.Modifier = new ModifierAPI.Modifier(this._client);
  modifierGroup: ModifierGroupAPI.ModifierGroup = new ModifierGroupAPI.ModifierGroup(this._client);
  prefixConfiguration: PrefixConfigurationAPI.PrefixConfiguration =
    new PrefixConfigurationAPI.PrefixConfiguration(this._client);
  prepItem: PrepItemAPI.PrepItem = new PrepItemAPI.PrepItem(this._client);
  inventoryitem: InventoryitemAPI.Inventoryitem = new InventoryitemAPI.Inventoryitem(this._client);
  production: ProductionAPI.Production = new ProductionAPI.Production(this._client);
  purchaseOption: PurchaseOptionAPI.PurchaseOption = new PurchaseOptionAPI.PurchaseOption(this._client);
  purchaseOrder: PurchaseOrderAPI.PurchaseOrder = new PurchaseOrderAPI.PurchaseOrder(this._client);
  purchaseRequest: PurchaseRequestAPI.PurchaseRequest = new PurchaseRequestAPI.PurchaseRequest(this._client);
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
  requisitionQueue: RequisitionQueueAPI.RequisitionQueue = new RequisitionQueueAPI.RequisitionQueue(
    this._client,
  );
  requisitionTemplate: RequisitionTemplateAPI.RequisitionTemplate =
    new RequisitionTemplateAPI.RequisitionTemplate(this._client);
  returnOrder: ReturnOrderAPI.ReturnOrder = new ReturnOrderAPI.ReturnOrder(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  section: SectionAPI.Section = new SectionAPI.Section(this._client);
  storageArea: StorageAreaAPI.StorageArea = new StorageAreaAPI.StorageArea(this._client);
  supplier: SupplierAPI.Supplier = new SupplierAPI.Supplier(this._client);
  systemTaxSetting: SystemTaxSettingAPI.SystemTaxSetting = new SystemTaxSettingAPI.SystemTaxSetting(
    this._client,
  );
  transactionPrefix: TransactionPrefixAPI.TransactionPrefix = new TransactionPrefixAPI.TransactionPrefix(
    this._client,
  );
  transfer: TransferAPI.Transfer = new TransferAPI.Transfer(this._client);
  wasteReason: WasteReasonAPI.WasteReason = new WasteReasonAPI.WasteReason(this._client);

  createSale(body: V1CreateSaleParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/sales', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getAdmins(query: V1GetAdminsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/admins', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getBusinessStructures(query: V1GetBusinessStructuresParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/business-structures', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getTimeZones(query: V1GetTimeZonesParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/TimeZone', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface V1CreateSaleParams {
  endTime?: string;

  externalId?: string | null;

  integrationId?: string | null;

  locationId?: string;

  organizationId?: string | null;

  saleDate?: string;

  saleItems?: Array<V1CreateSaleParams.SaleItem> | null;

  startTime?: string;

  totalWithOutTax?: number;

  totalWithTax?: number;
}

export namespace V1CreateSaleParams {
  export interface SaleItem {
    amountExcludingTax?: number;

    amountIncludingTax?: number;

    date?: string;

    discount?: number | null;

    externalId?: string | null;

    itemId?: string;

    orderDiscount?: number | null;

    quantity?: number;

    transactionType?: 0 | 1 | 2 | 3;
  }
}

export interface V1GetAdminsParams {
  organizationId: string;
}

export interface V1GetBusinessStructuresParams {
  organizationId: string;
}

export interface V1GetTimeZonesParams {
  organizationId: string;
}

V1.ApprovalMatrix = ApprovalMatrix;
V1.Buyer = Buyer;
V1.Category = Category;
V1.CategoryPrefix = CategoryPrefix;
V1.Class = Class;
V1.Currency = Currency;
V1.DashBoard = DashBoard;
V1.DiningOption = DiningOption;
V1.EntityPrefix = EntityPrefix;
V1.GenericItem = GenericItem;
V1.Location = Location;
V1.MarketPlaceApp = MarketPlaceApp;
V1.MenuItem = MenuItem;
V1.Modifier = Modifier;
V1.ModifierGroup = ModifierGroup;
V1.PrefixConfiguration = PrefixConfiguration;
V1.PrepItem = PrepItem;
V1.Inventoryitem = Inventoryitem;
V1.Production = Production;
V1.PurchaseOption = PurchaseOption;
V1.PurchaseOrder = PurchaseOrder;
V1.PurchaseRequest = PurchaseRequest;
V1.Reports = Reports;
V1.RequisitionQueue = RequisitionQueue;
V1.RequisitionTemplate = RequisitionTemplate;
V1.ReturnOrder = ReturnOrder;
V1.Roles = Roles;
V1.Section = Section;
V1.StorageArea = StorageArea;
V1.Supplier = Supplier;
V1.SystemTaxSetting = SystemTaxSetting;
V1.TransactionPrefix = TransactionPrefix;
V1.Transfer = Transfer;
V1.WasteReason = WasteReason;

export declare namespace V1 {
  export {
    type V1CreateSaleParams as V1CreateSaleParams,
    type V1GetAdminsParams as V1GetAdminsParams,
    type V1GetBusinessStructuresParams as V1GetBusinessStructuresParams,
    type V1GetTimeZonesParams as V1GetTimeZonesParams,
  };

  export {
    ApprovalMatrix as ApprovalMatrix,
    type ApprovalLayer as ApprovalLayer,
    type ApprovalRule as ApprovalRule,
    type ApprovalMatrixCreateParams as ApprovalMatrixCreateParams,
    type ApprovalMatrixRetrieveParams as ApprovalMatrixRetrieveParams,
    type ApprovalMatrixUpdateParams as ApprovalMatrixUpdateParams,
    type ApprovalMatrixListParams as ApprovalMatrixListParams,
  };

  export { Buyer as Buyer };

  export {
    Category as Category,
    type PrefixData as PrefixData,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryRetrieveParams as CategoryRetrieveParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryListParams as CategoryListParams,
    type CategoryDeleteParams as CategoryDeleteParams,
    type CategoryUpdateBulkParams as CategoryUpdateBulkParams,
  };

  export {
    CategoryPrefix as CategoryPrefix,
    type CategoryPrefixRetrieveParams as CategoryPrefixRetrieveParams,
    type CategoryPrefixUpdateParams as CategoryPrefixUpdateParams,
    type CategoryPrefixListParams as CategoryPrefixListParams,
    type CategoryPrefixDeleteParams as CategoryPrefixDeleteParams,
    type CategoryPrefixBulkUpdateParams as CategoryPrefixBulkUpdateParams,
  };

  export {
    Class as Class,
    type ClassCreateParams as ClassCreateParams,
    type ClassRetrieveParams as ClassRetrieveParams,
    type ClassUpdateParams as ClassUpdateParams,
    type ClassListParams as ClassListParams,
    type ClassDeleteParams as ClassDeleteParams,
    type ClassBulkUpdateParams as ClassBulkUpdateParams,
  };

  export {
    Currency as Currency,
    type CurrencyUpdateParams as CurrencyUpdateParams,
    type CurrencyListParams as CurrencyListParams,
    type CurrencyGetExchangeRateParams as CurrencyGetExchangeRateParams,
  };

  export { DashBoard as DashBoard };

  export {
    DiningOption as DiningOption,
    type DiningOptionCreateResponse as DiningOptionCreateResponse,
    type DiningOptionRetrieveResponse as DiningOptionRetrieveResponse,
    type DiningOptionUpdateResponse as DiningOptionUpdateResponse,
    type DiningOptionListResponse as DiningOptionListResponse,
    type DiningOptionCreateParams as DiningOptionCreateParams,
    type DiningOptionRetrieveParams as DiningOptionRetrieveParams,
    type DiningOptionUpdateParams as DiningOptionUpdateParams,
    type DiningOptionListParams as DiningOptionListParams,
  };

  export {
    EntityPrefix as EntityPrefix,
    type EntityPrefixRetrieveParams as EntityPrefixRetrieveParams,
    type EntityPrefixUpdateParams as EntityPrefixUpdateParams,
    type EntityPrefixListParams as EntityPrefixListParams,
    type EntityPrefixDeleteParams as EntityPrefixDeleteParams,
    type EntityPrefixBulkUpdateParams as EntityPrefixBulkUpdateParams,
  };

  export {
    GenericItem as GenericItem,
    type GenericItemRetrieveParams as GenericItemRetrieveParams,
    type GenericItemListParams as GenericItemListParams,
  };

  export {
    Location as Location,
    type LocationCreateParams as LocationCreateParams,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationUpdateParams as LocationUpdateParams,
    type LocationListParams as LocationListParams,
    type LocationCountAllParams as LocationCountAllParams,
    type LocationGetHierarchyParams as LocationGetHierarchyParams,
    type LocationGetHierarchyByActiveParams as LocationGetHierarchyByActiveParams,
    type LocationListAllParams as LocationListAllParams,
    type LocationUpdateBulkParams as LocationUpdateBulkParams,
  };

  export {
    MarketPlaceApp as MarketPlaceApp,
    type MarketPlaceAppCreateParams as MarketPlaceAppCreateParams,
    type MarketPlaceAppRetrieveParams as MarketPlaceAppRetrieveParams,
    type MarketPlaceAppUpdateParams as MarketPlaceAppUpdateParams,
    type MarketPlaceAppDeleteParams as MarketPlaceAppDeleteParams,
    type MarketPlaceAppInstallParams as MarketPlaceAppInstallParams,
    type MarketPlaceAppSearchParams as MarketPlaceAppSearchParams,
    type MarketPlaceAppUninstallParams as MarketPlaceAppUninstallParams,
  };

  export {
    MenuItem as MenuItem,
    type MenuItemCreateParams as MenuItemCreateParams,
    type MenuItemRetrieveParams as MenuItemRetrieveParams,
    type MenuItemUpdateParams as MenuItemUpdateParams,
    type MenuItemListParams as MenuItemListParams,
    type MenuItemBulkUpdateParams as MenuItemBulkUpdateParams,
    type MenuItemCountParams as MenuItemCountParams,
    type MenuItemGetBrandLocationDiningOptionsParams as MenuItemGetBrandLocationDiningOptionsParams,
    type MenuItemGetIngredientListParams as MenuItemGetIngredientListParams,
  };

  export {
    Modifier as Modifier,
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

  export {
    ModifierGroup as ModifierGroup,
    type ModifierGroupCreateParams as ModifierGroupCreateParams,
    type ModifierGroupRetrieveParams as ModifierGroupRetrieveParams,
    type ModifierGroupUpdateParams as ModifierGroupUpdateParams,
    type ModifierGroupListParams as ModifierGroupListParams,
    type ModifierGroupDeleteParams as ModifierGroupDeleteParams,
    type ModifierGroupBulkUpdateParams as ModifierGroupBulkUpdateParams,
    type ModifierGroupCountParams as ModifierGroupCountParams,
  };

  export {
    PrefixConfiguration as PrefixConfiguration,
    type PrefixConfigurationRetrieveParams as PrefixConfigurationRetrieveParams,
    type PrefixConfigurationGetCodeParams as PrefixConfigurationGetCodeParams,
  };

  export {
    PrepItem as PrepItem,
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

  export {
    Inventoryitem as Inventoryitem,
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

  export {
    Production as Production,
    type ProductionItem as ProductionItem,
    type ProductionCreateParams as ProductionCreateParams,
    type ProductionRetrieveParams as ProductionRetrieveParams,
    type ProductionUpdateParams as ProductionUpdateParams,
    type ProductionListParams as ProductionListParams,
    type ProductionApproveParams as ProductionApproveParams,
    type ProductionBulkUpdateParams as ProductionBulkUpdateParams,
    type ProductionChangeToEditPostParams as ProductionChangeToEditPostParams,
    type ProductionCountParams as ProductionCountParams,
    type ProductionLockUnlockParams as ProductionLockUnlockParams,
    type ProductionRejectParams as ProductionRejectParams,
    type ProductionSubmitForApprovalParams as ProductionSubmitForApprovalParams,
  };

  export {
    PurchaseOption as PurchaseOption,
    type PurchaseOptionCreateParams as PurchaseOptionCreateParams,
    type PurchaseOptionRetrieveParams as PurchaseOptionRetrieveParams,
    type PurchaseOptionUpdateParams as PurchaseOptionUpdateParams,
    type PurchaseOptionListParams as PurchaseOptionListParams,
    type PurchaseOptionDeleteParams as PurchaseOptionDeleteParams,
    type PurchaseOptionListSuppliersParams as PurchaseOptionListSuppliersParams,
  };

  export {
    PurchaseOrder as PurchaseOrder,
    type PurchaseOrderItemData as PurchaseOrderItemData,
    type PurchaseOrderCreateResponse as PurchaseOrderCreateResponse,
    type PurchaseOrderCreateParams as PurchaseOrderCreateParams,
    type PurchaseOrderRetrieveParams as PurchaseOrderRetrieveParams,
    type PurchaseOrderUpdateParams as PurchaseOrderUpdateParams,
    type PurchaseOrderListParams as PurchaseOrderListParams,
    type PurchaseOrderAddReceivingParams as PurchaseOrderAddReceivingParams,
    type PurchaseOrderCountParams as PurchaseOrderCountParams,
    type PurchaseOrderListItemsParams as PurchaseOrderListItemsParams,
    type PurchaseOrderListReceivingParams as PurchaseOrderListReceivingParams,
    type PurchaseOrderUpdateStatusParams as PurchaseOrderUpdateStatusParams,
  };

  export {
    PurchaseRequest as PurchaseRequest,
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

  export {
    Reports as Reports,
    type ReportListParams as ReportListParams,
    type ReportBulkUpdateParams as ReportBulkUpdateParams,
  };

  export {
    RequisitionQueue as RequisitionQueue,
    type RequisitionQueueCreateParams as RequisitionQueueCreateParams,
    type RequisitionQueueListParams as RequisitionQueueListParams,
  };

  export {
    RequisitionTemplate as RequisitionTemplate,
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

  export {
    ReturnOrder as ReturnOrder,
    type ReturnOrderCreateParams as ReturnOrderCreateParams,
    type ReturnOrderRetrieveParams as ReturnOrderRetrieveParams,
    type ReturnOrderUpdateParams as ReturnOrderUpdateParams,
    type ReturnOrderListParams as ReturnOrderListParams,
    type ReturnOrderApproveParams as ReturnOrderApproveParams,
    type ReturnOrderCountParams as ReturnOrderCountParams,
    type ReturnOrderEligibleItemsParams as ReturnOrderEligibleItemsParams,
    type ReturnOrderItemsDetailParams as ReturnOrderItemsDetailParams,
    type ReturnOrderLockUnlockParams as ReturnOrderLockUnlockParams,
    type ReturnOrderRejectParams as ReturnOrderRejectParams,
    type ReturnOrderSubmitParams as ReturnOrderSubmitParams,
    type ReturnOrderUpdateStatusParams as ReturnOrderUpdateStatusParams,
  };

  export {
    Roles as Roles,
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
    type RoleAddUserRoleParams as RoleAddUserRoleParams,
    type RoleDeleteRemoveUserRoleParams as RoleDeleteRemoveUserRoleParams,
    type RoleRetrieveCountParams as RoleRetrieveCountParams,
    type RoleRetrieveUsersParams as RoleRetrieveUsersParams,
  };

  export {
    Section as Section,
    type SectionRetrieveSectionParams as SectionRetrieveSectionParams,
    type SectionSectionParams as SectionSectionParams,
    type SectionUpdateSectionParams as SectionUpdateSectionParams,
    type SectionUpdateUpdateBulkParams as SectionUpdateUpdateBulkParams,
  };

  export {
    StorageArea as StorageArea,
    type StorageAreaRetrieveParams as StorageAreaRetrieveParams,
    type StorageAreaRetrieveStorageAreaParams as StorageAreaRetrieveStorageAreaParams,
    type StorageAreaStorageAreaParams as StorageAreaStorageAreaParams,
    type StorageAreaUpdateStorageAreaParams as StorageAreaUpdateStorageAreaParams,
  };

  export {
    Supplier as Supplier,
    type DistributerData as DistributerData,
    type SupplierRetrieveParams as SupplierRetrieveParams,
    type SupplierRetrieveCountParams as SupplierRetrieveCountParams,
    type SupplierRetrieveSupplierParams as SupplierRetrieveSupplierParams,
    type SupplierSupplierParams as SupplierSupplierParams,
    type SupplierUpdateBulkUpdateParams as SupplierUpdateBulkUpdateParams,
    type SupplierUpdateSupplierParams as SupplierUpdateSupplierParams,
  };

  export {
    SystemTaxSetting as SystemTaxSetting,
    type SystemTaxSettingRetrieveParams as SystemTaxSettingRetrieveParams,
    type SystemTaxSettingDeleteSystemTaxSettingParams as SystemTaxSettingDeleteSystemTaxSettingParams,
    type SystemTaxSettingRetrieveSystemTaxSettingParams as SystemTaxSettingRetrieveSystemTaxSettingParams,
    type SystemTaxSettingSeedInitialDataToElasticSearchParams as SystemTaxSettingSeedInitialDataToElasticSearchParams,
    type SystemTaxSettingSystemTaxSettingParams as SystemTaxSettingSystemTaxSettingParams,
    type SystemTaxSettingUpdateSystemTaxSettingParams as SystemTaxSettingUpdateSystemTaxSettingParams,
  };

  export {
    TransactionPrefix as TransactionPrefix,
    type TransactionPrefixRetrieveParams as TransactionPrefixRetrieveParams,
    type TransactionPrefixDeleteTransactionPrefixParams as TransactionPrefixDeleteTransactionPrefixParams,
    type TransactionPrefixRetrieveTransactionPrefixParams as TransactionPrefixRetrieveTransactionPrefixParams,
    type TransactionPrefixUpdateBulkUpdateTransactionPrefixParams as TransactionPrefixUpdateBulkUpdateTransactionPrefixParams,
    type TransactionPrefixUpdateTransactionPrefixParams as TransactionPrefixUpdateTransactionPrefixParams,
  };

  export { Transfer as Transfer };

  export {
    WasteReason as WasteReason,
    type WasteReasonRetrieveWasteReasonParams as WasteReasonRetrieveWasteReasonParams,
    type WasteReasonWasteReasonParams as WasteReasonWasteReasonParams,
  };
}
