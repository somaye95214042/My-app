import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";

import Slider from "@mui/material/Slider";

const SliderRange = ({ Taboption, control }) => {
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
              <div style={{ width: "300px" }}>
                <Slider
                  sx={{
                    width: 300,
                    color: "success.main",
                  }}
                  {...field}
                  aria-label="Default"
                  valueLabelDisplay="auto"
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

export default SliderRange;
