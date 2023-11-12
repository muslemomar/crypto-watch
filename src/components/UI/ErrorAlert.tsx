import React, { PropsWithChildren } from "react";

const ErrorAlert: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
      role="alert"
    >
      <span className="font-medium">Error!</span> {children}
    </div>
  );
};

export default ErrorAlert;
