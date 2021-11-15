import { Tab, Tabs, TabList } from "react-tabs";
import { ReactNode } from "react";
import "react-tabs/style/react-tabs.css";
const CustomTabs = ({ children }: { children: ReactNode }) => {
  return (
    <Tabs
      className="w-90vw xl:w-65vw"
      selectedTabClassName="bg-red-500 text-xl rounded-t border-2"
    >
      <TabList className="p-5 pl-0 text-white border-b-2">
        <Tab>Details</Tab>
        <Tab>Reviews</Tab>
      </TabList>

      {children}
    </Tabs>
  );
};

CustomTabs.propTypes = {};

export default CustomTabs;
