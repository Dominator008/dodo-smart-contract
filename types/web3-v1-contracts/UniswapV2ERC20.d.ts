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

export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;

export interface UniswapV2Erc20 extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): UniswapV2Erc20;
  clone(): UniswapV2Erc20;
  methods: {
    DOMAIN_SEPARATOR(): NonPayableTransactionObject<string>;

    PERMIT_TYPEHASH(): NonPayableTransactionObject<string>;

    allowance(arg0: string, arg1: string): NonPayableTransactionObject<string>;

    approve(
      spender: string,
      value: number | string
    ): NonPayableTransactionObject<boolean>;

    balanceOf(arg0: string): NonPayableTransactionObject<string>;

    decimals(): NonPayableTransactionObject<string>;

    name(): NonPayableTransactionObject<string>;

    nonces(arg0: string): NonPayableTransactionObject<string>;

    permit(
      owner: string,
      spender: string,
      value: number | string,
      deadline: number | string,
      v: number | string,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<void>;

    symbol(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transfer(
      to: string,
      value: number | string
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      from: string,
      to: string,
      value: number | string
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}
