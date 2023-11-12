import React, { PropsWithChildren } from "react";
import SpinnerIcon from "./SpinnerIcon";

interface Props {
  loading: boolean;
}

const LoadingButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  loading,
}) => {
  return (
    <button
      disabled={loading}
      type="submit"
      className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mt-2.5"
    >
      {loading && <SpinnerIcon />}
      {loading ? "Loading..." : children}
    </button>
  );
};

export default LoadingButton;
