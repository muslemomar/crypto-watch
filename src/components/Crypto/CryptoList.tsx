import React from "react";
import CryptoItem from "./CryptoItem";
import { CryptoContext } from "../../context/CryptoContext";
import FadingDivider from "../UI/FadingDivider";
import ScrollList from "../UI/ScrollList";

const CryptoList = () => {
  const { cryptos, removeCrypto } = React.useContext(CryptoContext);

  return (
    <ScrollList>
      {cryptos.map((item) => (
        <div key={item.code}>
          <CryptoItem
            crypto={item}
            onRemoveCrypto={removeCrypto.bind(null, item.code)}
          />
          <FadingDivider />
        </div>
      ))}
    </ScrollList>
  );
};

export default CryptoList;
