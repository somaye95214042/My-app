import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";

const Toggle = ({ Taboption, control }) => {
  const settingchanges = useSelector((state) => state.settingchanges);
  const settings = useSelector((state) => state.settings);

  const defaultValue =
    settingchanges[`${Taboption.id}`] !== undefined
      ? settingchanges[`${Taboption.id}`]
      : settings[`${Taboption.id}`] !== undefined
      ? settings[`${Taboption.id}`]
      : Taboption.default;

  const [counter, setCounter] = useState(defaultValue);

  const handleChange = (e) => setCounter(e.currentTarget.value);

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
              <ToggleButtonGroup
                {...field}
                value={counter}
                color="primary"
                exclusive
                onChange={(e) => {
                  handleChange(e);
                  field.onChange(e);
                }}
                aria-label="Platform"
              >
                {Taboption.options.map((option) => {
                  return (
                    <ToggleButton key={option.id} value={option.value}>
                      {option.label}
                    </ToggleButton>
                  );
                })}
              </ToggleButtonGroup>
            );
          }}
        />
        <p
          style={{
            fontSize: "13px",
            color: "#999",
            marginTop: "6px",
            fontWeight: "400",
          }}
        >
          {Taboption.description}
        </p>
      </div>
    </div>
  );
};

export default Toggle;
