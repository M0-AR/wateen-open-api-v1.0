// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TransferInAPI from './transfer-in';
import {
  TransferIn,
  TransferInApproveParams,
  TransferInFinalizeParams,
  TransferInReceiveParams,
  TransferInRejectParams,
  TransferInRetrieveCountParams,
  TransferInRetrieveParams,
  TransferInRetrieveTransferInParams,
  TransferInSubmitParams,
  TransferInTransferInParams,
  TransferInUpdateTransferInParams,
  TransferItem,
  TransferItemQuantity,
} from './transfer-in';
import * as TransferOutAPI from './transfer-out';
import {
  TransferOut,
  TransferOutApproveParams,
  TransferOutFinalizeParams,
  TransferOutFulfillParams,
  TransferOutRejectParams,
  TransferOutRetrieveCountParams,
  TransferOutRetrieveParams,
  TransferOutRetrieveTransferOutParams,
  TransferOutSubmitParams,
  TransferOutTransferOutParams,
  TransferOutUpdateTransferOutParams,
} from './transfer-out';

export class Transfer extends APIResource {
  transferIn: TransferInAPI.TransferIn = new TransferInAPI.TransferIn(this._client);
  transferOut: TransferOutAPI.TransferOut = new TransferOutAPI.TransferOut(this._client);
}

Transfer.TransferIn = TransferIn;
Transfer.TransferOut = TransferOut;

export declare namespace Transfer {
  export {
    TransferIn as TransferIn,
    type TransferItem as TransferItem,
    type TransferItemQuantity as TransferItemQuantity,
    type TransferInRetrieveParams as TransferInRetrieveParams,
    type TransferInApproveParams as TransferInApproveParams,
    type TransferInFinalizeParams as TransferInFinalizeParams,
    type TransferInReceiveParams as TransferInReceiveParams,
    type TransferInRejectParams as TransferInRejectParams,
    type TransferInRetrieveCountParams as TransferInRetrieveCountParams,
    type TransferInRetrieveTransferInParams as TransferInRetrieveTransferInParams,
    type TransferInSubmitParams as TransferInSubmitParams,
    type TransferInTransferInParams as TransferInTransferInParams,
    type TransferInUpdateTransferInParams as TransferInUpdateTransferInParams,
  };

  export {
    TransferOut as TransferOut,
    type TransferOutRetrieveParams as TransferOutRetrieveParams,
    type TransferOutApproveParams as TransferOutApproveParams,
    type TransferOutFinalizeParams as TransferOutFinalizeParams,
    type TransferOutFulfillParams as TransferOutFulfillParams,
    type TransferOutRejectParams as TransferOutRejectParams,
    type TransferOutRetrieveCountParams as TransferOutRetrieveCountParams,
    type TransferOutRetrieveTransferOutParams as TransferOutRetrieveTransferOutParams,
    type TransferOutSubmitParams as TransferOutSubmitParams,
    type TransferOutTransferOutParams as TransferOutTransferOutParams,
    type TransferOutUpdateTransferOutParams as TransferOutUpdateTransferOutParams,
  };
}
