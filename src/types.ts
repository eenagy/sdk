import { ContractTransaction } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';

export enum PaymentToken {
  SENTINEL, // denotes non-existence of payment token. i.e. default value signifying it hasn't been set
  WETH,
  DAI,
  USDC,
  USDT,
  TUSD,
  RENT,
}


export enum NFTStandard {
  E721,
  E1155,
}

export interface IReNFT {
  lend(
    nftAddress: string[],
    tokenID: BigNumber[],
    amount: number[],
    maxRentDuration: number[],
    dailyRentPrice: number[],
    nftPrice: number[],
    paymentToken: PaymentToken[]
  ): Promise<ContractTransaction>;

  rent(
    nftAddress: string[],
    tokenID: BigNumber[],
    lendingID: BigNumber[],
    rentDuration: number[]
  ): Promise<ContractTransaction>;

  returnIt(
    nftAddress: string[],
    tokenID: BigNumber[],
    lendingID: BigNumber[]
  ): Promise<ContractTransaction>;

  claimCollateral(
    nftAddress: string[],
    tokenID: BigNumber[],
    lendingID: BigNumber[]
  ): Promise<ContractTransaction>;

  stopLending(
    nftAddress: string[],
    tokenID: BigNumber[],
    lendingID: BigNumber[]
  ): Promise<ContractTransaction>;
}
