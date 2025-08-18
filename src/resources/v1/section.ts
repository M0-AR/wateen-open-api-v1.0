// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Section extends APIResource {
  retrieveSection(query: SectionRetrieveSectionParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/Section', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  section(params: SectionSectionParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.post('/api/v1/Section', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateSection(params: SectionUpdateSectionParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Section', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateUpdateBulk(params: SectionUpdateUpdateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, ...body } = params;
    return this._client.put('/api/v1/Section/UpdateBulk', {
      query: { organizationId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SectionRetrieveSectionParams {
  Location: string;

  organizationId: string;

  PageNumber: number;

  PageSize: number;

  IsActive?: boolean;

  Name?: string;
}

export interface SectionSectionParams {
  /**
   * Query param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  parentLocation: string;

  /**
   * Body param:
   */
  sectionName: string;

  /**
   * Body param:
   */
  isActive?: boolean;

  /**
   * Body param:
   */
  isAutoCodeGeneration?: boolean;

  /**
   * Body param:
   */
  sectionCode?: string | null;
}

export interface SectionUpdateSectionParams {
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
  isActive?: boolean | null;

  /**
   * Body param:
   */
  sectionName?: string | null;
}

export interface SectionUpdateUpdateBulkParams {
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

export declare namespace Section {
  export {
    type SectionRetrieveSectionParams as SectionRetrieveSectionParams,
    type SectionSectionParams as SectionSectionParams,
    type SectionUpdateSectionParams as SectionUpdateSectionParams,
    type SectionUpdateUpdateBulkParams as SectionUpdateUpdateBulkParams,
  };
}
