// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export { WateenOpenAPIV1_0 as default } from './client';

export { type Uploadable, toFile } from './core/uploads';
export { APIPromise } from './core/api-promise';
export { WateenOpenAPIV1_0, type ClientOptions } from './client';
export {
  WateenOpenAPIV1_0Error,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './core/error';
