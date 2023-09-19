import "../../index.css";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useState } from "react";

const RadioButton = ({ Taboption, control }) => {
  const settingchanges = useSelector((state) => state.settingchanges);
  const settings = useSelector((state) => state.settings);

  const defaultValue =
    settingchanges[`${Taboption.id}`] !== undefined
      ? settingchanges[`${Taboption.id}`]
      : settings[`${Taboption.id}`] !== undefined
      ? settings[`${Taboption.id}`]
      : Taboption.default;

  const [checked, setChecked] = useState(defaultValue);

  const onChangechecked = (e) => setChecked(e.currentTarget.value);

  return (
    <div style={{ minHeight: "100px" }}>
      <div style={{ position: "relative", width: "20%", float: "left" }}>
        <p style={{ fontSize: "14px", color: "#23282d", fontWeight: "500" }}>
          {Taboption.label}
        </p>
      </div>
      <div style={{ width: "calc(80% - 20px)", float: "right" }}>
        {Taboption.options.map((option) => {
          const checkedValue = option.value;
          return (
            <Controller
              key={option.id}
              name={Taboption.id}
              control={control}
              defaultValue={defaultValue}
              render={({ field }) => {
                return (
                  <label key={option.id} style={{ marginLeft: "20px" }}>
                    <input
                      {...field}
                      value={option.value}
                      type="radio"
                      checked={checkedValue === checked}
                      onChange={(e) => {
                        onChangechecked(e);
                        field.onChange(e);
                      }}
                    />
                    {option.label}
                  </label>
                );
              }}
            />
          );
        })}
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

export default RadioButton;
