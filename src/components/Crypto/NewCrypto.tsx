import React, { SyntheticEvent, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { useLazyQuery } from "@apollo/client";
import { CryptoContext } from "../../context/CryptoContext";
import { GET_CONVERSION_RATE } from "../../graphql/queries";
import LoadingButton from "../UI/LoadingButton";
import ErrorAlert from "../UI/ErrorAlert";

interface CryptoToEuroData {
  cryptoToEuro: {
    EUR: number;
  };
}

interface CryptoToEuroVariables {
  cryptoCode: string;
}

const NewCrypto = () => {
  const [error, setError] = useState<string>();
  const { addCrypto, hasCrypto } = React.useContext(CryptoContext);
  const [fetchCryptoPrice, { loading }] = useLazyQuery<
    CryptoToEuroData,
    CryptoToEuroVariables
  >(GET_CONVERSION_RATE, {
    fetchPolicy: "no-cache",
  });

  const codeInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setError("");

    const enteredCode = codeInputRef.current!.value.toUpperCase();

    if (enteredCode.trim().length === 0) return setError("The input is empty");
    if (hasCrypto(enteredCode)) return setError("The crypto already exists");

    const { data: cryptoData, error } = await fetchCryptoPrice({
      variables: { cryptoCode: enteredCode },
    });
    if (error) return setError("Network error. Please check your connection");

    const cryptoPrice = cryptoData?.cryptoToEuro.EUR;

    if (cryptoPrice == null) return setError("The crypto provided is invalid");

    addCrypto({
      code: enteredCode,
      valueInEuro: cryptoPrice,
    });

    codeInputRef.current!.value = "";
  };

  return (
    <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-md shadow p-10 sm:p-10 md:p-10 md:col-start-8 lg:col-start-3 self-baseline z-10 mt-6 md:mt-0 col-span-1 lg:col-span-1 md:col-span-5">
      {error && <ErrorAlert>{error}</ErrorAlert>}
      <form onSubmit={handleSubmit} action="src/components/Crypto/NewCrypto#">
        <TextField
          disabled={loading}
          fullWidth
          id="code"
          inputRef={codeInputRef}
          label="CRYPTOCURRENCY CODE"
          variant="outlined"
          color="primary"
          inputProps={{
            style: {
              fontWeight: "bold",
              textTransform: "uppercase",
            },
          }}
        />
        <LoadingButton loading={loading}>Add</LoadingButton>

        <p className="text-sm font-medium text-gray-400 text-center mt-10">
          Use of this service is subject to terms and conditions
        </p>
      </form>
    </div>
  );
};

export default NewCrypto;
