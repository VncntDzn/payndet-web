import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const CustomTabs = ({ children }) => {
  return (
    <Tabs selectedTabClassName="bg-orange text-white text-xl rounded-t border-2">
      <TabList className="p-5 pl-0 text-white">
        <Tab>Details</Tab>
        <Tab>Reviews</Tab>
      </TabList>

      {children}
    </Tabs>
  );
};

CustomTabs.propTypes = {};

export default CustomTabs;
