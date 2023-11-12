import * as React from "react";
import { ICrypto, CryptoContextType } from "../types/crypto";
import { useEffect } from "react";

export const CryptoContext = React.createContext<CryptoContextType>({
  cryptos: [],
  addCrypto: () => {},
  removeCrypto: () => {},
  hasCrypto: () => false,
});

const CryptoProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [cryptos, setCryptos] = React.useState<ICrypto[]>([]);
  const [hasPersistentDataLoaded, setHasPersistentDataLoaded] =
    React.useState<boolean>(false);

  useEffect(() => {
    const cryptoData = JSON.parse(localStorage.getItem("cryptos") ?? "[]");

    if (cryptoData) {
      setCryptos(cryptoData);
    }

    setHasPersistentDataLoaded(true);
  }, []);

  useEffect(() => {
    if (!hasPersistentDataLoaded) return;
    localStorage.setItem("cryptos", JSON.stringify(cryptos));
  }, [cryptos, hasPersistentDataLoaded]);

  const addCrypto = (crypto: ICrypto) => {
    setCryptos([...cryptos, crypto]);
  };

  const removeCrypto = (code: string) => {
    setCryptos((prevCryptos) => {
      return prevCryptos.filter((crypto) => crypto.code !== code);
    });
  };

  const hasCrypto = (code: string) => {
    return cryptos.findIndex((crypto) => crypto.code === code) >= 0;
  };

  return (
    <CryptoContext.Provider
      value={{ cryptos, addCrypto, removeCrypto, hasCrypto }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;
