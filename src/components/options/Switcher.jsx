import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";

const Switcher = ({ Taboption, control }) => {
  const settingchanges = useSelector((state) => state.settingchanges);
  const settings = useSelector((state) => state.settings);

  const defaultValue =
    settingchanges[`${Taboption.id}`] !== undefined
      ? settingchanges[`${Taboption.id}`]
      : settings[`${Taboption.id}`] !== undefined
      ? settings[`${Taboption.id}`]
      : JSON.parse(Taboption.default);

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
          defaultValue={defaultValue}
          render={({ field }) => {
            return (
              <FormControlLabel
                control={
                  <Switch
                    {...field}
                    style={{ color: "#23282d", fontSize: "14px" }}
                    defaultChecked={defaultValue}
                    // defaultCheckd2
                  />
                }
                label={Taboption.label}
              />
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

export default Switcher;
