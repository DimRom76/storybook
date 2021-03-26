import Toggle from "./Toggle";

const Stories = {
  title: "Toggle",
  component: Toggle,
  decorators: [
    (Story) => (
      <div style={{ position: "relative", width: 300 }}>
        <Story />
      </div>
    ),
  ],
  //проверяем происходят ли события на кнопке. onClick - имя пропса
  argTypes: { onClick: { action: "onClick fn" } },
};

export default Stories;

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = { reversed: false };
