import * as React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import "../../index.css";

const NumberField = ({ Taboption, control }) => {
  const settingchanges = useSelector((state) => state.settingchanges);
  const settings = useSelector((state) => state.settings);

  const defaultValue =
    settingchanges[`${Taboption.id}`] !== undefined
      ? settingchanges[`${Taboption.id}`]
      : settings[`${Taboption.id}`] !== undefined
      ? settings[`${Taboption.id}`]
      : JSON.parse(Taboption.default);

  const styles = (theme) => ({
    textField: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
    },
    input: {
      color: "white",
    },
  });

  return (
    <div style={{ minHeight: "100px" }}>
      <div style={{ position: "relative", width: "20%", float: "left" }}>
        <p style={{ fontSize: "14px", color: "#23282d", fontWeight: "500" }}>
          {Taboption.label}
        </p>
      </div>
      <div style={{ width: "calc(80% - 20px)", float: "right" }}>
        <Controller
          name={Taboption.id}
          control={control}
          render={({ field }) => {
            return (
              <div>
                <TextField
                  {...field}
                  type="number"
                  min="1"
                  max="5"
                  value={defaultValue}
                  sx={{
                    ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                      padding: "10px 10px",
                    },
                  }}
                />
              </div>
            );
          }}
        />
        <p
          style={{
            fontSize: "13px",
            color: "#999",
            margin: "0",
            fontWeight: "400",
          }}
        >
          {Taboption.description}
        </p>
      </div>
    </div>
  );
};

export default NumberField;
