import { Controller } from "react-hook-form";
import Select from "react-select";
import { useSelector } from "react-redux";

const Select2 = ({ Taboption, control }) => {
  const settings = useSelector((state) => state.settings);
  const settingchanges = useSelector((state) => state.settingchanges);

  const defaultValue =
    settingchanges[`${Taboption.id}`] !== undefined
      ? settingchanges[`${Taboption.id}`]
      : settings[`${Taboption.id}`] !== undefined
      ? settings[`${Taboption.id}`]
      : Taboption.default;

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
          defaultValue={Taboption.options[0]}
          render={({ field }) => {
            return (
              <div style={{ width: "50%" }}>
                <Select
                  {...field}
                  options={Taboption.options}
                  classNamePrefix="select"
                />
              </div>
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

export default Select2;
