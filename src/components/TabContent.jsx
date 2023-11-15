import { useSelector } from "react-redux";
import { React } from "react";
import Switcher from "./options/Switcher";
import Select2 from "./options/Select2";
import ImageSelect from "./options/ImageSelect";
import RadioButton from "./options/RadioButton";
import Toggle from "./options/Toggle";
import SliderRange from "./options/SliderRange";
import DateTime from "./options/DateTime";
import TextField from "./options/TextField";
import Select from "./options/Select";
import NumberField from "./options/NumberField";

const TabContent = ({ tabId, control }) => {
  const tabs = useSelector((state) => state.tabs);
  const tab = tabs.find((tab) => tab.id === tabId);

  const options = tab.options;

  const componentsMap = {
    Switcher,
    Select2,
    ImageSelect,
    RadioButton,
    Toggle,
    SliderRange,
    DateTime,
    TextField,
    Select,
    NumberField
  };

  return (
    <>
      {options.map((option) => {
        const componentName = option.type;
        const DynamicComponent = componentsMap[componentName];
        return (
          <DynamicComponent
            key={option.id}
            Taboption={option}
            control={control}
          />
        );
      })}
    </>
  );
};

export default TabContent;
