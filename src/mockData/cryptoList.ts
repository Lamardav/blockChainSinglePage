export interface ICtypto {
  name: string;
  id: number;
  shortName: string;
  iconSrc: string;
}

export const CtyptoList: ICtypto[] = [
    {
        name: "Bitcoin",
        id: 1,
        shortName: "BTC",
        iconSrc: "bitcoin.png"
    },
    {
        name: "Stellar",
        id: 2,
        shortName: "XLM",
        iconSrc: "stellar.png"
    },
    {
        name: "Ripple",
        id: 3,
        shortName: "XRP",
        iconSrc: "ripple.png"
    },
    {
        name: "Etherium",
        id: 4,
        shortName: "ETH",
        iconSrc: "etherium.png"
    },
    {
        name: "Dogecoin",
        id: 5,
        shortName: "DOGE",
        iconSrc: "dogecoin.png"
    },
    {
        name: "Cardano",
        id: 6,
        shortName: "ADA",
        iconSrc: "cardano.png"
    },
    {
        name: "Tezos",
        id: 7,
        shortName: "XTZ",
        iconSrc: "tezos.png"
    },
    {
        name: "Tron",
        id: 8,
        shortName: "TRX",
        iconSrc: "tron.png"
    },
    {
        name: "Litecoin",
        id: 9,
        shortName: "LTC",
        iconSrc: "litecoin.png"
    }
];


export interface IPayment {
  id:number;
  name:string;
  shortName:string;
  iconSrc:string
}

export const PaymentList: IPayment[] = [
    {
        name: "Tether (TRC20)",
        id: 1,
        shortName: "USDT",
        iconSrc: "tether.png"
    },
    {
        name: "USDC Coin (SPL)",
        id: 2,
        shortName: "USDC",
        iconSrc: "usdcCoin.png"
    },
    {
        name: "Binance USD (BEP20)",
        id: 3,
        shortName: "BUSD",
        iconSrc: "binance.png"
    },
    {
        name: "Visa/MasterCard (USD)",
        id: 4,
        shortName: "USD",
        iconSrc: "visa.png"
    }
];
