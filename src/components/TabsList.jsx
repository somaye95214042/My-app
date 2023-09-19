import { Tabs, TabList, TabPanel } from "@mui/joy";
import { Tab } from "@mui/joy";
import { useSelector } from "react-redux";
import TabContent from "./TabContent";

const TabsList = ({ control }) => {
  const tabs = useSelector((state) => state.tabs);
  
  return (
    <Tabs
      aria-label="Vertical tabs"
      orientation="vertical"
      sx={{ minWidth: 600, height: 160 }}
    >
      <TabList>
        {tabs.map((tab) => (
          <Tab
            value={tab.id}
            key={tab.id}
            style={{
              backgroundColor: "#eee",
              fontWeight: "550",
              color: "#444",
              fontSize: "13px",
              padding: "22px",
              width: "200px",
              borderBottom: "1px solid #ccd0d4",
              borderRight: "1px solid #ccd0d4",
              fontFamily:
                "-apple-system,BlinkMacSystemFont,Sege UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
            }}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      {tabs.map((tab) => {
        return (
          <TabPanel key={tab.id} value={tab.id}>
            <TabContent tabId={tab.id} control={control}/>
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

export default TabsList;
