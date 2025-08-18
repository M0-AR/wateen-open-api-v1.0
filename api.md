# Account

Types:

- <code><a href="./src/resources/account.ts">LoginResponse</a></code>

Methods:

- <code title="post /api/Account/Login">client.account.<a href="./src/resources/account.ts">login</a>({ ...params }) -> LoginResponse</code>
- <code title="post /api/Account/RefreshToken">client.account.<a href="./src/resources/account.ts">refreshToken</a>({ ...params }) -> LoginResponse</code>

# V1

Methods:

- <code title="post /api/v1/sales">client.v1.<a href="./src/resources/v1/v1.ts">createSale</a>({ ...params }) -> void</code>
- <code title="get /api/v1/admins">client.v1.<a href="./src/resources/v1/v1.ts">getAdmins</a>({ ...params }) -> void</code>
- <code title="get /api/v1/business-structures">client.v1.<a href="./src/resources/v1/v1.ts">getBusinessStructures</a>({ ...params }) -> void</code>
- <code title="get /api/v1/TimeZone">client.v1.<a href="./src/resources/v1/v1.ts">getTimeZones</a>({ ...params }) -> void</code>

## ApprovalMatrix

Types:

- <code><a href="./src/resources/v1/approval-matrix.ts">ApprovalLayer</a></code>
- <code><a href="./src/resources/v1/approval-matrix.ts">ApprovalRule</a></code>

Methods:

- <code title="post /api/v1/approval-matrix">client.v1.approvalMatrix.<a href="./src/resources/v1/approval-matrix.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/approval-matrix/{id}">client.v1.approvalMatrix.<a href="./src/resources/v1/approval-matrix.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/approval-matrix/{id}">client.v1.approvalMatrix.<a href="./src/resources/v1/approval-matrix.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/approval-matrix">client.v1.approvalMatrix.<a href="./src/resources/v1/approval-matrix.ts">list</a>({ ...params }) -> void</code>

## Buyer

### Roles

Types:

- <code><a href="./src/resources/v1/buyer/roles.ts">UpdateBuyerRoles</a></code>

Methods:

- <code title="post /api/v1/buyer/roles">client.v1.buyer.roles.<a href="./src/resources/v1/buyer/roles.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/buyer/roles/{id}">client.v1.buyer.roles.<a href="./src/resources/v1/buyer/roles.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/buyer/roles/{id}">client.v1.buyer.roles.<a href="./src/resources/v1/buyer/roles.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/buyer/roles">client.v1.buyer.roles.<a href="./src/resources/v1/buyer/roles.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/v1/buyer/roles/count">client.v1.buyer.roles.<a href="./src/resources/v1/buyer/roles.ts">count</a>({ ...params }) -> void</code>
- <code title="get /api/v1/buyer/roles/{id}/users">client.v1.buyer.roles.<a href="./src/resources/v1/buyer/roles.ts">listUsers</a>(id, { ...params }) -> void</code>

### Users

Types:

- <code><a href="./src/resources/v1/buyer/users.ts">RoleLocation</a></code>

Methods:

- <code title="post /api/v1/buyer/users">client.v1.buyer.users.<a href="./src/resources/v1/buyer/users.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/buyer/users/{id}">client.v1.buyer.users.<a href="./src/resources/v1/buyer/users.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/buyer/users/{id}">client.v1.buyer.users.<a href="./src/resources/v1/buyer/users.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/buyer/users">client.v1.buyer.users.<a href="./src/resources/v1/buyer/users.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/v1/buyer/users/count">client.v1.buyer.users.<a href="./src/resources/v1/buyer/users.ts">count</a>({ ...params }) -> void</code>

## Category

Types:

- <code><a href="./src/resources/v1/category.ts">PrefixData</a></code>

Methods:

- <code title="post /api/v1/Category">client.v1.category.<a href="./src/resources/v1/category.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Category/{id}">client.v1.category.<a href="./src/resources/v1/category.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/Category">client.v1.category.<a href="./src/resources/v1/category.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Category">client.v1.category.<a href="./src/resources/v1/category.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/v1/Category">client.v1.category.<a href="./src/resources/v1/category.ts">delete</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Category/UpdateBulk">client.v1.category.<a href="./src/resources/v1/category.ts">updateBulk</a>({ ...params }) -> void</code>

## CategoryPrefix

Methods:

- <code title="get /api/v1/CategoryPrefix/{id}">client.v1.categoryPrefix.<a href="./src/resources/v1/category-prefix.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/CategoryPrefix">client.v1.categoryPrefix.<a href="./src/resources/v1/category-prefix.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/CategoryPrefix">client.v1.categoryPrefix.<a href="./src/resources/v1/category-prefix.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/v1/CategoryPrefix">client.v1.categoryPrefix.<a href="./src/resources/v1/category-prefix.ts">delete</a>({ ...params }) -> void</code>
- <code title="put /api/v1/CategoryPrefix/BulkUpdateCategoryPrefix">client.v1.categoryPrefix.<a href="./src/resources/v1/category-prefix.ts">bulkUpdate</a>({ ...params }) -> void</code>

## Class

Methods:

- <code title="post /api/v1/Class">client.v1.class.<a href="./src/resources/v1/class.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Class/{id}">client.v1.class.<a href="./src/resources/v1/class.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/Class">client.v1.class.<a href="./src/resources/v1/class.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Class">client.v1.class.<a href="./src/resources/v1/class.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/v1/Class">client.v1.class.<a href="./src/resources/v1/class.ts">delete</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Class/BulkUpdate">client.v1.class.<a href="./src/resources/v1/class.ts">bulkUpdate</a>({ ...params }) -> void</code>

## Currency

Methods:

- <code title="put /api/v1/Currency">client.v1.currency.<a href="./src/resources/v1/currency.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Currency">client.v1.currency.<a href="./src/resources/v1/currency.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Currency/GetExchangeRate">client.v1.currency.<a href="./src/resources/v1/currency.ts">getExchangeRate</a>({ ...params }) -> void</code>

## DashBoard

### Settings

Methods:

- <code title="get /api/v1/DashBoard/Settings/{widgetType}">client.v1.dashBoard.settings.<a href="./src/resources/v1/dash-board/settings.ts">retrieve</a>(widgetType, { ...params }) -> void</code>
- <code title="put /api/v1/DashBoard/Settings">client.v1.dashBoard.settings.<a href="./src/resources/v1/dash-board/settings.ts">update</a>({ ...params }) -> void</code>

## DiningOption

Types:

- <code><a href="./src/resources/v1/dining-option.ts">DiningOptionCreateResponse</a></code>
- <code><a href="./src/resources/v1/dining-option.ts">DiningOptionRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/dining-option.ts">DiningOptionUpdateResponse</a></code>
- <code><a href="./src/resources/v1/dining-option.ts">DiningOptionListResponse</a></code>

Methods:

- <code title="post /api/v1/DiningOption">client.v1.diningOption.<a href="./src/resources/v1/dining-option.ts">create</a>({ ...params }) -> DiningOptionCreateResponse</code>
- <code title="get /api/v1/DiningOption/{id}">client.v1.diningOption.<a href="./src/resources/v1/dining-option.ts">retrieve</a>(id, { ...params }) -> DiningOptionRetrieveResponse</code>
- <code title="put /api/v1/DiningOption">client.v1.diningOption.<a href="./src/resources/v1/dining-option.ts">update</a>({ ...params }) -> DiningOptionUpdateResponse</code>
- <code title="get /api/v1/DiningOption">client.v1.diningOption.<a href="./src/resources/v1/dining-option.ts">list</a>({ ...params }) -> DiningOptionListResponse</code>

## EntityPrefix

Methods:

- <code title="get /api/v1/EntityPrefix/{id}">client.v1.entityPrefix.<a href="./src/resources/v1/entity-prefix.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/EntityPrefix">client.v1.entityPrefix.<a href="./src/resources/v1/entity-prefix.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/EntityPrefix">client.v1.entityPrefix.<a href="./src/resources/v1/entity-prefix.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/v1/EntityPrefix">client.v1.entityPrefix.<a href="./src/resources/v1/entity-prefix.ts">delete</a>({ ...params }) -> void</code>
- <code title="put /api/v1/EntityPrefix/BulkUpdateEntityPrefix">client.v1.entityPrefix.<a href="./src/resources/v1/entity-prefix.ts">bulkUpdate</a>({ ...params }) -> void</code>

## GenericItem

Methods:

- <code title="get /api/v1/GenericItem/{itemId}">client.v1.genericItem.<a href="./src/resources/v1/generic-item.ts">retrieve</a>(itemID, { ...params }) -> void</code>
- <code title="get /api/v1/GenericItem">client.v1.genericItem.<a href="./src/resources/v1/generic-item.ts">list</a>({ ...params }) -> void</code>

## Location

Methods:

- <code title="post /api/v1/Location">client.v1.location.<a href="./src/resources/v1/location.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Location/GetById/{id}">client.v1.location.<a href="./src/resources/v1/location.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/Location">client.v1.location.<a href="./src/resources/v1/location.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Location">client.v1.location.<a href="./src/resources/v1/location.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Location/AllLocationCount">client.v1.location.<a href="./src/resources/v1/location.ts">countAll</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Location/GetLocationHierarchy">client.v1.location.<a href="./src/resources/v1/location.ts">getHierarchy</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Location/GetLocationHierarchyByActiveLocation">client.v1.location.<a href="./src/resources/v1/location.ts">getHierarchyByActive</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Location/all">client.v1.location.<a href="./src/resources/v1/location.ts">listAll</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Location/UpdateBulk">client.v1.location.<a href="./src/resources/v1/location.ts">updateBulk</a>({ ...params }) -> void</code>

## MarketPlaceApp

Methods:

- <code title="post /api/v1/MarketPlaceApp">client.v1.marketPlaceApp.<a href="./src/resources/v1/market-place-app.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/MarketPlaceApp/{id}">client.v1.marketPlaceApp.<a href="./src/resources/v1/market-place-app.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/MarketPlaceApp">client.v1.marketPlaceApp.<a href="./src/resources/v1/market-place-app.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /api/v1/MarketPlaceApp/{id}">client.v1.marketPlaceApp.<a href="./src/resources/v1/market-place-app.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/MarketPlaceApp/install">client.v1.marketPlaceApp.<a href="./src/resources/v1/market-place-app.ts">install</a>({ ...params }) -> void</code>
- <code title="get /api/v1/MarketPlaceApp/search">client.v1.marketPlaceApp.<a href="./src/resources/v1/market-place-app.ts">search</a>({ ...params }) -> void</code>
- <code title="post /api/v1/MarketPlaceApp/uninstall">client.v1.marketPlaceApp.<a href="./src/resources/v1/market-place-app.ts">uninstall</a>({ ...params }) -> void</code>

## MenuItem

Methods:

- <code title="post /api/v1/MenuItem">client.v1.menuItem.<a href="./src/resources/v1/menu-item.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/MenuItem/{id}">client.v1.menuItem.<a href="./src/resources/v1/menu-item.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/MenuItem">client.v1.menuItem.<a href="./src/resources/v1/menu-item.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/MenuItem">client.v1.menuItem.<a href="./src/resources/v1/menu-item.ts">list</a>({ ...params }) -> void</code>
- <code title="put /api/v1/MenuItem/BulkUpdateMenuItem">client.v1.menuItem.<a href="./src/resources/v1/menu-item.ts">bulkUpdate</a>({ ...params }) -> void</code>
- <code title="get /api/v1/MenuItem/Count">client.v1.menuItem.<a href="./src/resources/v1/menu-item.ts">count</a>({ ...params }) -> void</code>
- <code title="get /api/v1/MenuItem/GetBrandLocationDiningOptions">client.v1.menuItem.<a href="./src/resources/v1/menu-item.ts">getBrandLocationDiningOptions</a>({ ...params }) -> void</code>
- <code title="get /api/v1/MenuItem/GetIngredientList">client.v1.menuItem.<a href="./src/resources/v1/menu-item.ts">getIngredientList</a>({ ...params }) -> void</code>

## Modifier

Types:

- <code><a href="./src/resources/v1/modifier.ts">IngredientsData</a></code>
- <code><a href="./src/resources/v1/modifier.ts">PriceListData</a></code>

Methods:

- <code title="post /api/v1/Modifier">client.v1.modifier.<a href="./src/resources/v1/modifier.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Modifier/{id}">client.v1.modifier.<a href="./src/resources/v1/modifier.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/Modifier">client.v1.modifier.<a href="./src/resources/v1/modifier.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Modifier">client.v1.modifier.<a href="./src/resources/v1/modifier.ts">list</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Modifier/BulkUpdateModifier">client.v1.modifier.<a href="./src/resources/v1/modifier.ts">bulkUpdate</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Modifier/Count">client.v1.modifier.<a href="./src/resources/v1/modifier.ts">count</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Modifier/GetBrandLocationDiningOptions">client.v1.modifier.<a href="./src/resources/v1/modifier.ts">getBrandLocationDiningOptions</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Modifier/GetIngredientList">client.v1.modifier.<a href="./src/resources/v1/modifier.ts">getIngredientList</a>({ ...params }) -> void</code>

## ModifierGroup

Methods:

- <code title="post /api/v1/ModifierGroup">client.v1.modifierGroup.<a href="./src/resources/v1/modifier-group.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/ModifierGroup/{id}">client.v1.modifierGroup.<a href="./src/resources/v1/modifier-group.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/ModifierGroup">client.v1.modifierGroup.<a href="./src/resources/v1/modifier-group.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/ModifierGroup">client.v1.modifierGroup.<a href="./src/resources/v1/modifier-group.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/v1/ModifierGroup">client.v1.modifierGroup.<a href="./src/resources/v1/modifier-group.ts">delete</a>({ ...params }) -> void</code>
- <code title="put /api/v1/ModifierGroup/BulkUpdateGroup">client.v1.modifierGroup.<a href="./src/resources/v1/modifier-group.ts">bulkUpdate</a>({ ...params }) -> void</code>
- <code title="get /api/v1/ModifierGroup/Count">client.v1.modifierGroup.<a href="./src/resources/v1/modifier-group.ts">count</a>({ ...params }) -> void</code>

## PrefixConfiguration

Methods:

- <code title="get /api/v1/PrefixConfiguration">client.v1.prefixConfiguration.<a href="./src/resources/v1/prefix-configuration.ts">retrieve</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PrefixConfiguration/Code">client.v1.prefixConfiguration.<a href="./src/resources/v1/prefix-configuration.ts">getCode</a>({ ...params }) -> void</code>

## PrepItem

Types:

- <code><a href="./src/resources/v1/prep-item.ts">CountingFrequency</a></code>
- <code><a href="./src/resources/v1/prep-item.ts">Ingredient</a></code>
- <code><a href="./src/resources/v1/prep-item.ts">TransactionUnit</a></code>

Methods:

- <code title="post /api/v1/PrepItem">client.v1.prepItem.<a href="./src/resources/v1/prep-item.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PrepItem/{id}">client.v1.prepItem.<a href="./src/resources/v1/prep-item.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/PrepItem">client.v1.prepItem.<a href="./src/resources/v1/prep-item.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PrepItem">client.v1.prepItem.<a href="./src/resources/v1/prep-item.ts">list</a>({ ...params }) -> void</code>
- <code title="put /api/v1/PrepItem/BulkUpdatePrepItem">client.v1.prepItem.<a href="./src/resources/v1/prep-item.ts">bulkUpdate</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PrepItem/Count">client.v1.prepItem.<a href="./src/resources/v1/prep-item.ts">count</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PrepItem/PrepCurrentStock">client.v1.prepItem.<a href="./src/resources/v1/prep-item.ts">getCurrentStock</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PrepItem/GetIngredientList">client.v1.prepItem.<a href="./src/resources/v1/prep-item.ts">getIngredientList</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PrepItem/PrepStockChanges">client.v1.prepItem.<a href="./src/resources/v1/prep-item.ts">getStockChanges</a>({ ...params }) -> void</code>

## Inventoryitem

Methods:

- <code title="post /api/v1/inventoryitem">client.v1.inventoryitem.<a href="./src/resources/v1/inventoryitem.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/inventoryitem/{id}">client.v1.inventoryitem.<a href="./src/resources/v1/inventoryitem.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/inventoryitem">client.v1.inventoryitem.<a href="./src/resources/v1/inventoryitem.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/inventoryitem">client.v1.inventoryitem.<a href="./src/resources/v1/inventoryitem.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/v1/inventoryitem">client.v1.inventoryitem.<a href="./src/resources/v1/inventoryitem.ts">delete</a>({ ...params }) -> void</code>
- <code title="put /api/v1/inventoryitem/BulkUpdate">client.v1.inventoryitem.<a href="./src/resources/v1/inventoryitem.ts">bulkUpdate</a>({ ...params }) -> void</code>
- <code title="get /api/v1/inventoryitem/Count">client.v1.inventoryitem.<a href="./src/resources/v1/inventoryitem.ts">count</a>({ ...params }) -> void</code>
- <code title="get /api/v1/inventoryitem/CurrentStock">client.v1.inventoryitem.<a href="./src/resources/v1/inventoryitem.ts">currentStock</a>({ ...params }) -> void</code>
- <code title="post /api/v1/inventoryitem/RollBackItemTransaction">client.v1.inventoryitem.<a href="./src/resources/v1/inventoryitem.ts">rollbackTransaction</a>({ ...params }) -> void</code>
- <code title="get /api/v1/inventoryitem/StockChanges">client.v1.inventoryitem.<a href="./src/resources/v1/inventoryitem.ts">stockChanges</a>({ ...params }) -> void</code>
- <code title="post /api/v1/inventoryitem/UploadImportFile">client.v1.inventoryitem.<a href="./src/resources/v1/inventoryitem.ts">uploadImportFile</a>({ ...params }) -> void</code>

## Production

Types:

- <code><a href="./src/resources/v1/production.ts">ProductionItem</a></code>

Methods:

- <code title="post /api/v1/Production">client.v1.production.<a href="./src/resources/v1/production.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Production/{id}">client.v1.production.<a href="./src/resources/v1/production.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/Production">client.v1.production.<a href="./src/resources/v1/production.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Production">client.v1.production.<a href="./src/resources/v1/production.ts">list</a>({ ...params }) -> void</code>
- <code title="post /api/v1/Production/{id}/Approve">client.v1.production.<a href="./src/resources/v1/production.ts">approve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/Production/BulkUpdate">client.v1.production.<a href="./src/resources/v1/production.ts">bulkUpdate</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Production/ChangeProductionToEditPost/{id}">client.v1.production.<a href="./src/resources/v1/production.ts">changeToEditPost</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/Production/Count">client.v1.production.<a href="./src/resources/v1/production.ts">count</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Production/LockUnlockProduction">client.v1.production.<a href="./src/resources/v1/production.ts">lockUnlock</a>({ ...params }) -> void</code>
- <code title="post /api/v1/Production/{id}/Reject">client.v1.production.<a href="./src/resources/v1/production.ts">reject</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/Production/{id}/SubmitForApproval">client.v1.production.<a href="./src/resources/v1/production.ts">submitForApproval</a>(id, { ...params }) -> void</code>

## PurchaseOption

Methods:

- <code title="post /api/v1/PurchaseOption">client.v1.purchaseOption.<a href="./src/resources/v1/purchase-option.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PurchaseOption/{id}">client.v1.purchaseOption.<a href="./src/resources/v1/purchase-option.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/PurchaseOption">client.v1.purchaseOption.<a href="./src/resources/v1/purchase-option.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PurchaseOption">client.v1.purchaseOption.<a href="./src/resources/v1/purchase-option.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/v1/PurchaseOption">client.v1.purchaseOption.<a href="./src/resources/v1/purchase-option.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PurchaseOption/suppliers">client.v1.purchaseOption.<a href="./src/resources/v1/purchase-option.ts">listSuppliers</a>({ ...params }) -> void</code>

## PurchaseOrder

Types:

- <code><a href="./src/resources/v1/purchase-order.ts">PurchaseOrderItemData</a></code>
- <code><a href="./src/resources/v1/purchase-order.ts">PurchaseOrderCreateResponse</a></code>

Methods:

- <code title="post /api/v1/PurchaseOrder">client.v1.purchaseOrder.<a href="./src/resources/v1/purchase-order.ts">create</a>({ ...params }) -> PurchaseOrderCreateResponse</code>
- <code title="get /api/v1/PurchaseOrder/{id}">client.v1.purchaseOrder.<a href="./src/resources/v1/purchase-order.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/PurchaseOrder">client.v1.purchaseOrder.<a href="./src/resources/v1/purchase-order.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PurchaseOrder">client.v1.purchaseOrder.<a href="./src/resources/v1/purchase-order.ts">list</a>({ ...params }) -> void</code>
- <code title="post /api/v1/PurchaseOrder/AddPurchaseOrderReceiving">client.v1.purchaseOrder.<a href="./src/resources/v1/purchase-order.ts">addReceiving</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PurchaseOrder/Count">client.v1.purchaseOrder.<a href="./src/resources/v1/purchase-order.ts">count</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PurchaseOrder/PurchaseOrderItems">client.v1.purchaseOrder.<a href="./src/resources/v1/purchase-order.ts">listItems</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PurchaseOrder/PurchaseOrderReceiving">client.v1.purchaseOrder.<a href="./src/resources/v1/purchase-order.ts">listReceiving</a>({ ...params }) -> void</code>
- <code title="put /api/v1/PurchaseOrder/UpdateStatus">client.v1.purchaseOrder.<a href="./src/resources/v1/purchase-order.ts">updateStatus</a>({ ...params }) -> void</code>

## PurchaseRequest

Methods:

- <code title="post /api/v1/PurchaseRequest">client.v1.purchaseRequest.<a href="./src/resources/v1/purchase-request.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PurchaseRequest/{id}">client.v1.purchaseRequest.<a href="./src/resources/v1/purchase-request.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/PurchaseRequest">client.v1.purchaseRequest.<a href="./src/resources/v1/purchase-request.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PurchaseRequest">client.v1.purchaseRequest.<a href="./src/resources/v1/purchase-request.ts">list</a>({ ...params }) -> void</code>
- <code title="post /api/v1/PurchaseRequest/{id}/approve">client.v1.purchaseRequest.<a href="./src/resources/v1/purchase-request.ts">approve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/PurchaseRequest/BulkUpdate">client.v1.purchaseRequest.<a href="./src/resources/v1/purchase-request.ts">bulkUpdate</a>({ ...params }) -> void</code>
- <code title="get /api/v1/PurchaseRequest/Count">client.v1.purchaseRequest.<a href="./src/resources/v1/purchase-request.ts">count</a>({ ...params }) -> void</code>
- <code title="post /api/v1/PurchaseRequest/{id}/reject">client.v1.purchaseRequest.<a href="./src/resources/v1/purchase-request.ts">reject</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/PurchaseRequest/{id}/submit">client.v1.purchaseRequest.<a href="./src/resources/v1/purchase-request.ts">submit</a>(id, { ...params }) -> void</code>

## Reports

Methods:

- <code title="get /api/v1/Reports">client.v1.reports.<a href="./src/resources/v1/reports.ts">list</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Reports/BulkUpdate">client.v1.reports.<a href="./src/resources/v1/reports.ts">bulkUpdate</a>({ ...params }) -> void</code>

## RequisitionQueue

Methods:

- <code title="post /api/v1/RequisitionQueue">client.v1.requisitionQueue.<a href="./src/resources/v1/requisition-queue.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/RequisitionQueue/GetAllRequisitionQueue">client.v1.requisitionQueue.<a href="./src/resources/v1/requisition-queue.ts">list</a>({ ...params }) -> void</code>

## RequisitionTemplate

Types:

- <code><a href="./src/resources/v1/requisition-template.ts">RequisitionTemplateCreateResponse</a></code>
- <code><a href="./src/resources/v1/requisition-template.ts">RequisitionTemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/requisition-template.ts">RequisitionTemplateUpdateResponse</a></code>
- <code><a href="./src/resources/v1/requisition-template.ts">RequisitionTemplateListResponse</a></code>
- <code><a href="./src/resources/v1/requisition-template.ts">RequisitionTemplateCountResponse</a></code>
- <code><a href="./src/resources/v1/requisition-template.ts">RequisitionTemplateUpdateBulkResponse</a></code>

Methods:

- <code title="post /api/v1/RequisitionTemplate">client.v1.requisitionTemplate.<a href="./src/resources/v1/requisition-template.ts">create</a>({ ...params }) -> unknown</code>
- <code title="get /api/v1/RequisitionTemplate/{id}">client.v1.requisitionTemplate.<a href="./src/resources/v1/requisition-template.ts">retrieve</a>(id, { ...params }) -> unknown</code>
- <code title="put /api/v1/RequisitionTemplate">client.v1.requisitionTemplate.<a href="./src/resources/v1/requisition-template.ts">update</a>({ ...params }) -> unknown</code>
- <code title="get /api/v1/RequisitionTemplate">client.v1.requisitionTemplate.<a href="./src/resources/v1/requisition-template.ts">list</a>({ ...params }) -> unknown</code>
- <code title="get /api/v1/RequisitionTemplate/AllRequisitionTemplateCount">client.v1.requisitionTemplate.<a href="./src/resources/v1/requisition-template.ts">count</a>({ ...params }) -> unknown</code>
- <code title="put /api/v1/RequisitionTemplate/UpdateBulk">client.v1.requisitionTemplate.<a href="./src/resources/v1/requisition-template.ts">updateBulk</a>({ ...params }) -> unknown</code>

## ReturnOrder

Methods:

- <code title="post /api/v1/ReturnOrder">client.v1.returnOrder.<a href="./src/resources/v1/return-order.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/ReturnOrder/{id}">client.v1.returnOrder.<a href="./src/resources/v1/return-order.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/ReturnOrder">client.v1.returnOrder.<a href="./src/resources/v1/return-order.ts">update</a>({ ...params }) -> void</code>
- <code title="get /api/v1/ReturnOrder">client.v1.returnOrder.<a href="./src/resources/v1/return-order.ts">list</a>({ ...params }) -> void</code>
- <code title="post /api/v1/ReturnOrder/{id}/approve">client.v1.returnOrder.<a href="./src/resources/v1/return-order.ts">approve</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/ReturnOrder/Count">client.v1.returnOrder.<a href="./src/resources/v1/return-order.ts">count</a>({ ...params }) -> void</code>
- <code title="get /api/v1/ReturnOrder/EligibleItems">client.v1.returnOrder.<a href="./src/resources/v1/return-order.ts">eligibleItems</a>({ ...params }) -> void</code>
- <code title="get /api/v1/ReturnOrder/ItemsDetail/{returnOrderId}">client.v1.returnOrder.<a href="./src/resources/v1/return-order.ts">itemsDetail</a>(returnOrderID, { ...params }) -> void</code>
- <code title="put /api/v1/ReturnOrder/LockUnlock">client.v1.returnOrder.<a href="./src/resources/v1/return-order.ts">lockUnlock</a>({ ...params }) -> void</code>
- <code title="post /api/v1/ReturnOrder/{id}/reject">client.v1.returnOrder.<a href="./src/resources/v1/return-order.ts">reject</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/ReturnOrder/{id}/submit">client.v1.returnOrder.<a href="./src/resources/v1/return-order.ts">submit</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/ReturnOrder/UpdateStatus">client.v1.returnOrder.<a href="./src/resources/v1/return-order.ts">updateStatus</a>({ ...params }) -> void</code>

## Roles

Methods:

- <code title="put /api/v1/roles">client.v1.roles.<a href="./src/resources/v1/roles.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/roles/{id}">client.v1.roles.<a href="./src/resources/v1/roles.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/roles/{id}">client.v1.roles.<a href="./src/resources/v1/roles.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/roles">client.v1.roles.<a href="./src/resources/v1/roles.ts">list</a>({ ...params }) -> void</code>
- <code title="post /api/v1/roles/add-user-role">client.v1.roles.<a href="./src/resources/v1/roles.ts">addUserRole</a>({ ...params }) -> void</code>
- <code title="delete /api/v1/roles/remove-user-role">client.v1.roles.<a href="./src/resources/v1/roles.ts">deleteRemoveUserRole</a>({ ...params }) -> void</code>
- <code title="get /api/v1/roles/count">client.v1.roles.<a href="./src/resources/v1/roles.ts">retrieveCount</a>({ ...params }) -> void</code>
- <code title="get /api/v1/roles/{id}/users">client.v1.roles.<a href="./src/resources/v1/roles.ts">retrieveUsers</a>(id, { ...params }) -> void</code>

## Section

Methods:

- <code title="get /api/v1/Section">client.v1.section.<a href="./src/resources/v1/section.ts">retrieveSection</a>({ ...params }) -> void</code>
- <code title="post /api/v1/Section">client.v1.section.<a href="./src/resources/v1/section.ts">section</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Section">client.v1.section.<a href="./src/resources/v1/section.ts">updateSection</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Section/UpdateBulk">client.v1.section.<a href="./src/resources/v1/section.ts">updateUpdateBulk</a>({ ...params }) -> void</code>

## StorageArea

Methods:

- <code title="get /api/v1/StorageArea/{id}">client.v1.storageArea.<a href="./src/resources/v1/storage-area.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/StorageArea">client.v1.storageArea.<a href="./src/resources/v1/storage-area.ts">retrieveStorageArea</a>({ ...params }) -> void</code>
- <code title="post /api/v1/StorageArea">client.v1.storageArea.<a href="./src/resources/v1/storage-area.ts">storageArea</a>({ ...params }) -> void</code>
- <code title="put /api/v1/StorageArea">client.v1.storageArea.<a href="./src/resources/v1/storage-area.ts">updateStorageArea</a>({ ...params }) -> void</code>

## Supplier

Types:

- <code><a href="./src/resources/v1/supplier.ts">DistributerData</a></code>

Methods:

- <code title="get /api/v1/Supplier/{id}">client.v1.supplier.<a href="./src/resources/v1/supplier.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/Supplier/Count">client.v1.supplier.<a href="./src/resources/v1/supplier.ts">retrieveCount</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Supplier">client.v1.supplier.<a href="./src/resources/v1/supplier.ts">retrieveSupplier</a>({ ...params }) -> void</code>
- <code title="post /api/v1/Supplier">client.v1.supplier.<a href="./src/resources/v1/supplier.ts">supplier</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Supplier/BulkUpdate">client.v1.supplier.<a href="./src/resources/v1/supplier.ts">updateBulkUpdate</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Supplier">client.v1.supplier.<a href="./src/resources/v1/supplier.ts">updateSupplier</a>({ ...params }) -> void</code>

## SystemTaxSetting

Methods:

- <code title="get /api/v1/SystemTaxSetting/{id}">client.v1.systemTaxSetting.<a href="./src/resources/v1/system-tax-setting.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="delete /api/v1/SystemTaxSetting">client.v1.systemTaxSetting.<a href="./src/resources/v1/system-tax-setting.ts">deleteSystemTaxSetting</a>({ ...params }) -> void</code>
- <code title="get /api/v1/SystemTaxSetting">client.v1.systemTaxSetting.<a href="./src/resources/v1/system-tax-setting.ts">retrieveSystemTaxSetting</a>({ ...params }) -> void</code>
- <code title="post /api/v1/SystemTaxSetting/SeedInitialDataToElasticSearch">client.v1.systemTaxSetting.<a href="./src/resources/v1/system-tax-setting.ts">seedInitialDataToElasticSearch</a>({ ...params }) -> void</code>
- <code title="post /api/v1/SystemTaxSetting">client.v1.systemTaxSetting.<a href="./src/resources/v1/system-tax-setting.ts">systemTaxSetting</a>({ ...params }) -> void</code>
- <code title="put /api/v1/SystemTaxSetting">client.v1.systemTaxSetting.<a href="./src/resources/v1/system-tax-setting.ts">updateSystemTaxSetting</a>({ ...params }) -> void</code>

## TransactionPrefix

Methods:

- <code title="get /api/v1/TransactionPrefix/{id}">client.v1.transactionPrefix.<a href="./src/resources/v1/transaction-prefix.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="delete /api/v1/TransactionPrefix">client.v1.transactionPrefix.<a href="./src/resources/v1/transaction-prefix.ts">deleteTransactionPrefix</a>({ ...params }) -> void</code>
- <code title="get /api/v1/TransactionPrefix">client.v1.transactionPrefix.<a href="./src/resources/v1/transaction-prefix.ts">retrieveTransactionPrefix</a>({ ...params }) -> void</code>
- <code title="put /api/v1/TransactionPrefix/BulkUpdateTransactionPrefix">client.v1.transactionPrefix.<a href="./src/resources/v1/transaction-prefix.ts">updateBulkUpdateTransactionPrefix</a>({ ...params }) -> void</code>
- <code title="put /api/v1/TransactionPrefix">client.v1.transactionPrefix.<a href="./src/resources/v1/transaction-prefix.ts">updateTransactionPrefix</a>({ ...params }) -> void</code>

## Transfer

### TransferIn

Types:

- <code><a href="./src/resources/v1/transfer/transfer-in.ts">TransferItem</a></code>
- <code><a href="./src/resources/v1/transfer/transfer-in.ts">TransferItemQuantity</a></code>

Methods:

- <code title="get /api/v1/Transfer/TransferIn/{id}">client.v1.transfer.transferIn.<a href="./src/resources/v1/transfer/transfer-in.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/Transfer/TransferIn/{id}/Approve">client.v1.transfer.transferIn.<a href="./src/resources/v1/transfer/transfer-in.ts">approve</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/Transfer/TransferIn/{id}/Finalize">client.v1.transfer.transferIn.<a href="./src/resources/v1/transfer/transfer-in.ts">finalize</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/Transfer/TransferIn/Receive">client.v1.transfer.transferIn.<a href="./src/resources/v1/transfer/transfer-in.ts">receive</a>({ ...params }) -> void</code>
- <code title="post /api/v1/Transfer/TransferIn/{id}/Reject">client.v1.transfer.transferIn.<a href="./src/resources/v1/transfer/transfer-in.ts">reject</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/Transfer/TransferIn/Count">client.v1.transfer.transferIn.<a href="./src/resources/v1/transfer/transfer-in.ts">retrieveCount</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Transfer/TransferIn">client.v1.transfer.transferIn.<a href="./src/resources/v1/transfer/transfer-in.ts">retrieveTransferIn</a>({ ...params }) -> void</code>
- <code title="post /api/v1/Transfer/TransferIn/{id}/Submit">client.v1.transfer.transferIn.<a href="./src/resources/v1/transfer/transfer-in.ts">submit</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/Transfer/TransferIn">client.v1.transfer.transferIn.<a href="./src/resources/v1/transfer/transfer-in.ts">transferIn</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Transfer/TransferIn">client.v1.transfer.transferIn.<a href="./src/resources/v1/transfer/transfer-in.ts">updateTransferIn</a>({ ...params }) -> void</code>

### TransferOut

Methods:

- <code title="get /api/v1/Transfer/TransferOut/{id}">client.v1.transfer.transferOut.<a href="./src/resources/v1/transfer/transfer-out.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/Transfer/TransferOut/{id}/Approve">client.v1.transfer.transferOut.<a href="./src/resources/v1/transfer/transfer-out.ts">approve</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/Transfer/TransferOut/{id}/Finalize">client.v1.transfer.transferOut.<a href="./src/resources/v1/transfer/transfer-out.ts">finalize</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/Transfer/TransferOut/Fulfill">client.v1.transfer.transferOut.<a href="./src/resources/v1/transfer/transfer-out.ts">fulfill</a>({ ...params }) -> void</code>
- <code title="post /api/v1/Transfer/TransferOut/{id}/Reject">client.v1.transfer.transferOut.<a href="./src/resources/v1/transfer/transfer-out.ts">reject</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/Transfer/TransferOut/Count">client.v1.transfer.transferOut.<a href="./src/resources/v1/transfer/transfer-out.ts">retrieveCount</a>({ ...params }) -> void</code>
- <code title="get /api/v1/Transfer/TransferOut">client.v1.transfer.transferOut.<a href="./src/resources/v1/transfer/transfer-out.ts">retrieveTransferOut</a>({ ...params }) -> void</code>
- <code title="post /api/v1/Transfer/TransferOut/{id}/Submit">client.v1.transfer.transferOut.<a href="./src/resources/v1/transfer/transfer-out.ts">submit</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/Transfer/TransferOut">client.v1.transfer.transferOut.<a href="./src/resources/v1/transfer/transfer-out.ts">transferOut</a>({ ...params }) -> void</code>
- <code title="put /api/v1/Transfer/TransferOut">client.v1.transfer.transferOut.<a href="./src/resources/v1/transfer/transfer-out.ts">updateTransferOut</a>({ ...params }) -> void</code>

## WasteReason

Methods:

- <code title="get /api/v1/WasteReason">client.v1.wasteReason.<a href="./src/resources/v1/waste-reason.ts">retrieveWasteReason</a>({ ...params }) -> void</code>
- <code title="post /api/v1/WasteReason">client.v1.wasteReason.<a href="./src/resources/v1/waste-reason.ts">wasteReason</a>({ ...params }) -> void</code>
