import React from "react";
import { IconButton, ListItemAvatar, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import glassIcon from "../../assets/icon.svg";
import ListItem from "@mui/material/ListItem";
import { ICrypto } from "../../types/crypto";

interface Props {
  crypto: ICrypto;
  onRemoveCrypto: () => void;
}

const CryptoItem: React.FC<Props> = ({ crypto, onRemoveCrypto }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          sx={{ color: "secondary.main" }}
          size="small"
          onClick={onRemoveCrypto}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    >
      <ListItemAvatar className="py-2">
        <img src={glassIcon} alt="A glass icon" />
      </ListItemAvatar>
      <ListItemText
        primary={crypto.code}
        secondary={crypto.valueInEuro + " €"}
        primaryTypographyProps={{
          color: "primary.dark",
          className: "pb-1",
        }}
        secondaryTypographyProps={{
          color: "secondary.dark",
        }}
        className="ml-3"
      />
    </ListItem>
  );
};

export default CryptoItem;
