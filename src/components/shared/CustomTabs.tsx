import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const CustomTabs = ({ children }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Details</Tab>
        <Tab>Reviews</Tab>
      </TabList>

      {children}
    </Tabs>
  );
};

CustomTabs.propTypes = {};

export default CustomTabs;
