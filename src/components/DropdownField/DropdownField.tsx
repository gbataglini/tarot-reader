import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deepPurple } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import { menuClasses } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select, { selectClasses } from "@mui/material/Select";
import React from "react";
import styles from "./dropdownfield.module.css";
import { InputLabel } from "@mui/material";

function DropdownField({ label, options, handleChange, value, defaultValue }) {
  return (
    <FormControl className={styles.inputField}>
      <InputLabel
        id="inputLabel"
        sx={{
          marginLeft: "4px",
          color: "grey.500",
          transform: "none",
          fontSize: "0.875rem",
          fontWeight: 500,
          letterSpacing: "1px",
          color: "black",
          "&.Mui-focused": {
            color: "black", // to overwrite the default behaviour
          },
        }}
      >
        {" "}
        {label.toUpperCase()}
      </InputLabel>
      <Select
        id="select-component"
        labelId="inputLabel"
        value={value}
        defaultValue={defaultValue}
        disableUnderline
        variant="standard"
        onChange={(e) => handleChange(e.target.value)}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          sx: {
            marginBlock: "0.5rem",
            [`& .${menuClasses.paper}`]: {
              borderRadius: "12px",
            },
            [`& .${menuClasses.list}`]: {
              paddingTop: 0,
              paddingBottom: 0,
              background: "white",
              "& li": {
                paddingTop: "12px",
                paddingBottom: "12px",
              },
              "& li:hover": {
                background: deepPurple[50],
              },
              "& li.Mui-selected": {
                color: "white",
                background: "black",
              },
              "& li.Mui-selected:hover": {
                background: deepPurple[500],
              },
            },
          },
        }}
        IconComponent={ExpandMoreIcon}
        sx={{
          minWidth: 200,
          [`& .${selectClasses.select}`]: {
            background: "white",
            color: "black",
            borderRadius: "12px",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "14px",
            paddingBottom: "15px",
            marginTop: "5px",
            boxShadow: "0px 5px 8px -3px rgba(0,0,0,0.14)",
            "&:focus": {
              borderRadius: "12px",
              background: "white",
              borderColor: deepPurple[100],
            },
          },
          [`& .${selectClasses.icon}`]: {
            right: "12px",
          },
        }}
      >
        {options.length > 0 &&
          options.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
      </Select>
    </FormControl>
  );
}

export default DropdownField;
