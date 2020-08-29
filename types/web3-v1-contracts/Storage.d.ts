/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type OwnershipTransferPrepared = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface Storage extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Storage;
  clone(): Storage;
  methods: {
    _BASE_BALANCE_(): NonPayableTransactionObject<string>;

    _BASE_BALANCE_LIMIT_(): NonPayableTransactionObject<string>;

    _BASE_CAPITAL_RECEIVE_QUOTE_(): NonPayableTransactionObject<string>;

    _BASE_CAPITAL_TOKEN_(): NonPayableTransactionObject<string>;

    _BASE_TOKEN_(): NonPayableTransactionObject<string>;

    _BUYING_ALLOWED_(): NonPayableTransactionObject<boolean>;

    _CLAIMED_(arg0: string): NonPayableTransactionObject<boolean>;

    _CLOSED_(): NonPayableTransactionObject<boolean>;

    _DEPOSIT_BASE_ALLOWED_(): NonPayableTransactionObject<boolean>;

    _DEPOSIT_QUOTE_ALLOWED_(): NonPayableTransactionObject<boolean>;

    _GAS_PRICE_LIMIT_(): NonPayableTransactionObject<string>;

    _K_(): NonPayableTransactionObject<string>;

    _LP_FEE_RATE_(): NonPayableTransactionObject<string>;

    _MAINTAINER_(): NonPayableTransactionObject<string>;

    _MT_FEE_RATE_(): NonPayableTransactionObject<string>;

    _NEW_OWNER_(): NonPayableTransactionObject<string>;

    _ORACLE_(): NonPayableTransactionObject<string>;

    _OWNER_(): NonPayableTransactionObject<string>;

    _QUOTE_BALANCE_(): NonPayableTransactionObject<string>;

    _QUOTE_BALANCE_LIMIT_(): NonPayableTransactionObject<string>;

    _QUOTE_CAPITAL_RECEIVE_BASE_(): NonPayableTransactionObject<string>;

    _QUOTE_CAPITAL_TOKEN_(): NonPayableTransactionObject<string>;

    _QUOTE_TOKEN_(): NonPayableTransactionObject<string>;

    _R_STATUS_(): NonPayableTransactionObject<string>;

    _SELLING_ALLOWED_(): NonPayableTransactionObject<boolean>;

    _SUPERVISOR_(): NonPayableTransactionObject<string>;

    _TARGET_BASE_TOKEN_AMOUNT_(): NonPayableTransactionObject<string>;

    _TARGET_QUOTE_TOKEN_AMOUNT_(): NonPayableTransactionObject<string>;

    _TRADE_ALLOWED_(): NonPayableTransactionObject<boolean>;

    claimOwnership(): NonPayableTransactionObject<void>;

    getBaseCapitalBalanceOf(lp: string): NonPayableTransactionObject<string>;

    getOraclePrice(): NonPayableTransactionObject<string>;

    getQuoteCapitalBalanceOf(lp: string): NonPayableTransactionObject<string>;

    getTotalBaseCapital(): NonPayableTransactionObject<string>;

    getTotalQuoteCapital(): NonPayableTransactionObject<string>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    version(): NonPayableTransactionObject<string>;
  };
  events: {
    OwnershipTransferPrepared(
      cb?: Callback<OwnershipTransferPrepared>
    ): EventEmitter;
    OwnershipTransferPrepared(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferPrepared>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(
    event: "OwnershipTransferPrepared",
    cb: Callback<OwnershipTransferPrepared>
  ): void;
  once(
    event: "OwnershipTransferPrepared",
    options: EventOptions,
    cb: Callback<OwnershipTransferPrepared>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}
