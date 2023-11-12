import React, { PropsWithChildren } from "react";
import List from "@mui/material/List";

const ScrollList: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <List
      className="md:w-3/5 xl:w-4/5 lg:w-10/12 md:h-72 md:overflow-auto z-10"
      sx={{
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "0.4em",
        },
        "&::-webkit-scrollbar-track": {
          background: "#43176b",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgb(255 255 255 / 0.2)",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "rgb(255 255 255 / 0.3)",
        },
      }}
    >
      {children}
    </List>
  );
};

export default ScrollList;
