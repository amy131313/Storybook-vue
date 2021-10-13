import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  //👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
  actions: { argTypesRegex: '^on[A-Z].*' }, // parameters are typically used to control the behavior of Storybook's features and addons
};
