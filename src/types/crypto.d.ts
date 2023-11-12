export interface ICrypto {
  code: string;
  valueInEuro: number;
}

export type CryptoContextType = {
  cryptos: ICrypto[];
  addCrypto: (crypto: ICrypto) => void;
  removeCrypto: (code: string) => void;
  hasCrypto: (code: string) => boolean;
};
