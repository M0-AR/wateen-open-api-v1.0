// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { WateenOpenAPIV1_0 } from '../client';

export abstract class APIResource {
  protected _client: WateenOpenAPIV1_0;

  constructor(client: WateenOpenAPIV1_0) {
    this._client = client;
  }
}
