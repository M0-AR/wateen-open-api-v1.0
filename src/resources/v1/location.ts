// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Location extends APIResource {
  create(params: LocationCreateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post(
      '/api/v1/Location',
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

  retrieve(id: string, query: LocationRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/Location/GetById/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(params: LocationUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put(
      '/api/v1/Location',
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

  list(query: LocationListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Location', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  countAll(query: LocationCountAllParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Location/AllLocationCount', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getHierarchy(query: LocationGetHierarchyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Location/GetLocationHierarchy', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getHierarchyByActive(
    query: LocationGetHierarchyByActiveParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/v1/Location/GetLocationHierarchyByActiveLocation', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listAll(query: LocationListAllParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Location/all', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateBulk(params: LocationUpdateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Location/UpdateBulk', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LocationCreateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  AddressLine1: string;

  /**
   * Body param:
   */
  AddressName: string;

  /**
   * Body param:
   */
  ContactName: string;

  /**
   * Body param:
   */
  Country: string;

  /**
   * Body param:
   */
  Email: string;

  /**
   * Body param:
   */
  LocationName: string;

  /**
   * Body param:
   */
  LocationType: number;

  /**
   * Body param:
   */
  ParentLocation: string;

  /**
   * Body param:
   */
  PhoneNumber: string;

  /**
   * Body param:
   */
  TownCity: string;

  /**
   * Body param:
   */
  AdditionalInfo?: string;

  /**
   * Body param:
   */
  AddressLine2?: string;

  /**
   * Body param:
   */
  BuildingNumber?: string;

  /**
   * Body param:
   */
  EmailTemplate?: string;

  /**
   * Body param:
   */
  IsActive?: boolean;

  /**
   * Body param:
   */
  IsAutoCodeGeneration?: boolean;

  /**
   * Body param:
   */
  IsTransactionAllowed?: boolean;

  /**
   * Body param:
   */
  LocationCode?: string;

  /**
   * Body param:
   */
  Logo?: Uploadable;

  /**
   * Body param:
   */
  PostalCode?: string;

  /**
   * Body param:
   */
  StateRegion?: string;

  /**
   * Body param:
   */
  TimeZone?: string;

  /**
   * Body param:
   */
  UseParentLogo?: boolean;
}

export interface LocationRetrieveParams {
  organizationId: string;
}

export interface LocationUpdateParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  AddressLine1: string;

  /**
   * Body param:
   */
  AddressName: string;

  /**
   * Body param:
   */
  ContactName: string;

  /**
   * Body param:
   */
  Country: string;

  /**
   * Body param:
   */
  Email: string;

  /**
   * Body param:
   */
  Id: string;

  /**
   * Body param:
   */
  LocationName: string;

  /**
   * Body param:
   */
  LocationType: number;

  /**
   * Body param:
   */
  ParentLocation: string;

  /**
   * Body param:
   */
  PhoneNumber: string;

  /**
   * Body param:
   */
  TownCity: string;

  /**
   * Body param:
   */
  AdditionalInfo?: string;

  /**
   * Body param:
   */
  AddressLine2?: string;

  /**
   * Body param:
   */
  BuildingNumber?: string;

  /**
   * Body param:
   */
  EmailTemplate?: string;

  /**
   * Body param:
   */
  IsActive?: boolean;

  /**
   * Body param:
   */
  IsTransactionAllowed?: boolean;

  /**
   * Body param:
   */
  LocationCode?: string;

  /**
   * Body param:
   */
  Logo?: Uploadable;

  /**
   * Body param:
   */
  PostalCode?: string;

  /**
   * Body param:
   */
  StateRegion?: string;

  /**
   * Body param:
   */
  TimeZone?: string;

  /**
   * Body param:
   */
  UseParentLogo?: boolean;
}

export interface LocationListParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  IsActive?: boolean;

  LocationTypes?: Array<number>;

  Name?: string;

  ParentLocations?: Array<string>;
}

export interface LocationCountAllParams {
  organizationId: string;
}

export interface LocationGetHierarchyParams {
  organizationId: string;
}

export interface LocationGetHierarchyByActiveParams {
  organizationId: string;
}

export interface LocationListAllParams {
  organizationId: string;

  PageNumber: number;

  PageSize: number;

  IsActive?: boolean;

  LocationTypes?: Array<number>;

  Name?: string;

  ParentLocations?: Array<string>;
}

export interface LocationUpdateBulkParams {
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

export declare namespace Location {
  export {
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
}
