import { HiAcademicCap, HiBookOpen, HiHome } from "react-icons/hi";
import Navigation from "./Navigation";

export const navItems = [
  {
    to: "/home",
    text: "Main",
    icon: <HiHome size="24" />,
  },
  {
    to: "/cabinet",
    text: "Cabinet",
    icon: <HiAcademicCap size="24" />,
  },
  {
    to: "/conspect",
    text: "Conspect",
    icon: <HiBookOpen size="24" />,
  },
];
const Stories = {
  title: "Navigation",
  component: Navigation,
};

export default Stories;

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = { items: navItems };
