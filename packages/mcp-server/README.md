# Wateen OpenAPI V1 0 TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export WATEEN_OPENAPI_V1_0_API_KEY="My API Key"
npx -y wateen-open-api-v1.0-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "wateen_openapi_v1_0_api": {
      "command": "npx",
      "args": ["-y", "wateen-open-api-v1.0-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "WATEEN_OPENAPI_V1_0_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ------------------------------- | ------------------------ | --------------- |
| `x-wateen-openapi-v1-0-api-key` | `apiKey` | bearerAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "wateen_openapi_v1_0_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "wateen-open-api-v1.0-mcp/server";

// import a specific tool
import loginAccount from "wateen-open-api-v1.0-mcp/tools/account/login-account";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [loginAccount, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `account`:

- `login_account` (`write`):
- `refresh_token_account` (`write`):

### Resource `v1`:

- `create_sale_v1` (`write`):
- `get_admins_v1` (`read`):
- `get_business_structures_v1` (`read`):
- `get_time_zones_v1` (`read`):

### Resource `v1.approval_matrix`:

- `create_v1_approval_matrix` (`write`):
- `retrieve_v1_approval_matrix` (`read`):
- `update_v1_approval_matrix` (`write`):
- `list_v1_approval_matrix` (`read`):

### Resource `v1.buyer.roles`:

- `create_buyer_v1_roles` (`write`):
- `retrieve_buyer_v1_roles` (`read`):
- `update_buyer_v1_roles` (`write`):
- `list_buyer_v1_roles` (`read`):
- `count_buyer_v1_roles` (`read`):
- `list_users_buyer_v1_roles` (`read`):

### Resource `v1.buyer.users`:

- `create_buyer_v1_users` (`write`):
- `retrieve_buyer_v1_users` (`read`):
- `update_buyer_v1_users` (`write`):
- `list_buyer_v1_users` (`read`):
- `count_buyer_v1_users` (`read`):

### Resource `v1.category`:

- `create_v1_category` (`write`):
- `retrieve_v1_category` (`read`):
- `update_v1_category` (`write`):
- `list_v1_category` (`read`):
- `delete_v1_category` (`write`):
- `update_bulk_v1_category` (`write`):

### Resource `v1.category_prefix`:

- `retrieve_v1_category_prefix` (`read`):
- `update_v1_category_prefix` (`write`):
- `list_v1_category_prefix` (`read`):
- `delete_v1_category_prefix` (`write`):
- `bulk_update_v1_category_prefix` (`write`):

### Resource `v1.class`:

- `create_v1_class` (`write`):
- `retrieve_v1_class` (`read`):
- `update_v1_class` (`write`):
- `list_v1_class` (`read`):
- `delete_v1_class` (`write`):
- `bulk_update_v1_class` (`write`):

### Resource `v1.currency`:

- `update_v1_currency` (`write`):
- `list_v1_currency` (`read`):
- `get_exchange_rate_v1_currency` (`read`):

### Resource `v1.dash_board.settings`:

- `retrieve_dash_board_v1_settings` (`read`):
- `update_dash_board_v1_settings` (`write`):

### Resource `v1.dining_option`:

- `create_v1_dining_option` (`write`):
- `retrieve_v1_dining_option` (`read`):
- `update_v1_dining_option` (`write`):
- `list_v1_dining_option` (`read`):

### Resource `v1.entity_prefix`:

- `retrieve_v1_entity_prefix` (`read`):
- `update_v1_entity_prefix` (`write`):
- `list_v1_entity_prefix` (`read`):
- `delete_v1_entity_prefix` (`write`):
- `bulk_update_v1_entity_prefix` (`write`):

### Resource `v1.generic_item`:

- `retrieve_v1_generic_item` (`read`):
- `list_v1_generic_item` (`read`):

### Resource `v1.location`:

- `create_v1_location` (`write`):
- `retrieve_v1_location` (`read`):
- `update_v1_location` (`write`):
- `list_v1_location` (`read`):
- `count_all_v1_location` (`read`):
- `get_hierarchy_v1_location` (`read`):
- `get_hierarchy_by_active_v1_location` (`read`):
- `list_all_v1_location` (`read`):
- `update_bulk_v1_location` (`write`):

### Resource `v1.market_place_app`:

- `create_v1_market_place_app` (`write`):
- `retrieve_v1_market_place_app` (`read`):
- `update_v1_market_place_app` (`write`):
- `delete_v1_market_place_app` (`write`):
- `install_v1_market_place_app` (`write`):
- `search_v1_market_place_app` (`read`):
- `uninstall_v1_market_place_app` (`write`):

### Resource `v1.menu_item`:

- `create_v1_menu_item` (`write`):
- `retrieve_v1_menu_item` (`read`):
- `update_v1_menu_item` (`write`):
- `list_v1_menu_item` (`read`):
- `bulk_update_v1_menu_item` (`write`):
- `count_v1_menu_item` (`read`):
- `get_brand_location_dining_options_v1_menu_item` (`read`):
- `get_ingredient_list_v1_menu_item` (`read`):

### Resource `v1.modifier`:

- `create_v1_modifier` (`write`):
- `retrieve_v1_modifier` (`read`):
- `update_v1_modifier` (`write`):
- `list_v1_modifier` (`read`):
- `bulk_update_v1_modifier` (`write`):
- `count_v1_modifier` (`read`):
- `get_brand_location_dining_options_v1_modifier` (`read`):
- `get_ingredient_list_v1_modifier` (`read`):

### Resource `v1.modifier_group`:

- `create_v1_modifier_group` (`write`):
- `retrieve_v1_modifier_group` (`read`):
- `update_v1_modifier_group` (`write`):
- `list_v1_modifier_group` (`read`):
- `delete_v1_modifier_group` (`write`):
- `bulk_update_v1_modifier_group` (`write`):
- `count_v1_modifier_group` (`read`):

### Resource `v1.prefix_configuration`:

- `retrieve_v1_prefix_configuration` (`read`):
- `get_code_v1_prefix_configuration` (`read`):

### Resource `v1.prep_item`:

- `create_v1_prep_item` (`write`):
- `retrieve_v1_prep_item` (`read`):
- `update_v1_prep_item` (`write`):
- `list_v1_prep_item` (`read`):
- `bulk_update_v1_prep_item` (`write`):
- `count_v1_prep_item` (`read`):
- `get_current_stock_v1_prep_item` (`read`):
- `get_ingredient_list_v1_prep_item` (`read`):
- `get_stock_changes_v1_prep_item` (`read`):

### Resource `v1.inventoryitem`:

- `create_v1_inventoryitem` (`write`):
- `retrieve_v1_inventoryitem` (`read`):
- `update_v1_inventoryitem` (`write`):
- `list_v1_inventoryitem` (`read`):
- `delete_v1_inventoryitem` (`write`):
- `bulk_update_v1_inventoryitem` (`write`):
- `count_v1_inventoryitem` (`read`):
- `current_stock_v1_inventoryitem` (`read`):
- `rollback_transaction_v1_inventoryitem` (`write`):
- `stock_changes_v1_inventoryitem` (`read`):
- `upload_import_file_v1_inventoryitem` (`write`):

### Resource `v1.production`:

- `create_v1_production` (`write`):
- `retrieve_v1_production` (`read`):
- `update_v1_production` (`write`):
- `list_v1_production` (`read`):
- `approve_v1_production` (`write`):
- `bulk_update_v1_production` (`write`):
- `change_to_edit_post_v1_production` (`write`):
- `count_v1_production` (`read`):
- `lock_unlock_v1_production` (`write`):
- `reject_v1_production` (`write`):
- `submit_for_approval_v1_production` (`write`):

### Resource `v1.purchase_option`:

- `create_v1_purchase_option` (`write`):
- `retrieve_v1_purchase_option` (`read`):
- `update_v1_purchase_option` (`write`):
- `list_v1_purchase_option` (`read`):
- `delete_v1_purchase_option` (`write`):
- `list_suppliers_v1_purchase_option` (`read`):

### Resource `v1.purchase_order`:

- `create_v1_purchase_order` (`write`):
- `retrieve_v1_purchase_order` (`read`):
- `update_v1_purchase_order` (`write`):
- `list_v1_purchase_order` (`read`):
- `add_receiving_v1_purchase_order` (`write`):
- `count_v1_purchase_order` (`read`):
- `list_items_v1_purchase_order` (`read`):
- `list_receiving_v1_purchase_order` (`read`):
- `update_status_v1_purchase_order` (`write`):

### Resource `v1.purchase_request`:

- `create_v1_purchase_request` (`write`):
- `retrieve_v1_purchase_request` (`read`):
- `update_v1_purchase_request` (`write`):
- `list_v1_purchase_request` (`read`):
- `approve_v1_purchase_request` (`write`):
- `bulk_update_v1_purchase_request` (`write`):
- `count_v1_purchase_request` (`read`):
- `reject_v1_purchase_request` (`write`):
- `submit_v1_purchase_request` (`write`):

### Resource `v1.reports`:

- `list_v1_reports` (`read`):
- `bulk_update_v1_reports` (`write`):

### Resource `v1.requisition_queue`:

- `create_v1_requisition_queue` (`write`):
- `list_v1_requisition_queue` (`read`):

### Resource `v1.requisition_template`:

- `create_v1_requisition_template` (`write`):
- `retrieve_v1_requisition_template` (`read`):
- `update_v1_requisition_template` (`write`):
- `list_v1_requisition_template` (`read`):
- `count_v1_requisition_template` (`read`):
- `update_bulk_v1_requisition_template` (`write`):

### Resource `v1.return_order`:

- `create_v1_return_order` (`write`):
- `retrieve_v1_return_order` (`read`):
- `update_v1_return_order` (`write`):
- `list_v1_return_order` (`read`):
- `approve_v1_return_order` (`write`):
- `count_v1_return_order` (`read`):
- `eligible_items_v1_return_order` (`read`):
- `items_detail_v1_return_order` (`read`):
- `lock_unlock_v1_return_order` (`write`):
- `reject_v1_return_order` (`write`):
- `submit_v1_return_order` (`write`):
- `update_status_v1_return_order` (`write`):

### Resource `v1.roles`:

- `create_v1_roles` (`write`):
- `retrieve_v1_roles` (`read`):
- `update_v1_roles` (`write`):
- `list_v1_roles` (`read`):
- `add_user_role_v1_roles` (`write`):
- `delete_remove_user_role_v1_roles` (`write`):
- `retrieve_count_v1_roles` (`read`):
- `retrieve_users_v1_roles` (`read`):

### Resource `v1.section`:

- `retrieve_section_v1_section` (`read`):
- `section_v1_section` (`write`):
- `update_section_v1_section` (`write`):
- `update_update_bulk_v1_section` (`write`):

### Resource `v1.storage_area`:

- `retrieve_v1_storage_area` (`read`):
- `retrieve_storage_area_v1_storage_area` (`read`):
- `storage_area_v1_storage_area` (`write`):
- `update_storage_area_v1_storage_area` (`write`):

### Resource `v1.supplier`:

- `retrieve_v1_supplier` (`read`):
- `retrieve_count_v1_supplier` (`read`):
- `retrieve_supplier_v1_supplier` (`read`):
- `supplier_v1_supplier` (`write`):
- `update_bulk_update_v1_supplier` (`write`):
- `update_supplier_v1_supplier` (`write`):

### Resource `v1.system_tax_setting`:

- `retrieve_v1_system_tax_setting` (`read`):
- `delete_system_tax_setting_v1_system_tax_setting` (`write`):
- `retrieve_system_tax_setting_v1_system_tax_setting` (`read`):
- `seed_initial_data_to_elastic_search_v1_system_tax_setting` (`write`):
- `system_tax_setting_v1_system_tax_setting` (`write`):
- `update_system_tax_setting_v1_system_tax_setting` (`write`):

### Resource `v1.transaction_prefix`:

- `retrieve_v1_transaction_prefix` (`read`):
- `delete_transaction_prefix_v1_transaction_prefix` (`write`):
- `retrieve_transaction_prefix_v1_transaction_prefix` (`read`):
- `update_bulk_update_transaction_prefix_v1_transaction_prefix` (`write`):
- `update_transaction_prefix_v1_transaction_prefix` (`write`):

### Resource `v1.transfer.transfer_in`:

- `retrieve_transfer_v1_transfer_in` (`read`):
- `approve_transfer_v1_transfer_in` (`write`):
- `finalize_transfer_v1_transfer_in` (`write`):
- `receive_transfer_v1_transfer_in` (`write`):
- `reject_transfer_v1_transfer_in` (`write`):
- `retrieve_count_transfer_v1_transfer_in` (`read`):
- `retrieve_transfer_in_transfer_v1_transfer_in` (`read`):
- `submit_transfer_v1_transfer_in` (`write`):
- `transfer_in_transfer_v1_transfer_in` (`write`):
- `update_transfer_in_transfer_v1_transfer_in` (`write`):

### Resource `v1.transfer.transfer_out`:

- `retrieve_transfer_v1_transfer_out` (`read`):
- `approve_transfer_v1_transfer_out` (`write`):
- `finalize_transfer_v1_transfer_out` (`write`):
- `fulfill_transfer_v1_transfer_out` (`write`):
- `reject_transfer_v1_transfer_out` (`write`):
- `retrieve_count_transfer_v1_transfer_out` (`read`):
- `retrieve_transfer_out_transfer_v1_transfer_out` (`read`):
- `submit_transfer_v1_transfer_out` (`write`):
- `transfer_out_transfer_v1_transfer_out` (`write`):
- `update_transfer_out_transfer_v1_transfer_out` (`write`):

### Resource `v1.waste_reason`:

- `retrieve_waste_reason_v1_waste_reason` (`read`):
- `waste_reason_v1_waste_reason` (`write`):
