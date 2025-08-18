// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SettingsAPI from './settings';
import { SettingRetrieveParams, SettingUpdateParams, Settings } from './settings';

export class DashBoard extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

DashBoard.Settings = Settings;

export declare namespace DashBoard {
  export {
    Settings as Settings,
    type SettingRetrieveParams as SettingRetrieveParams,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
