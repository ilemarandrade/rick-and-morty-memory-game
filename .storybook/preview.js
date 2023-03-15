export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "gray",
    values: [
      {
        name: "gray",
        value: "#F5F5F5",
      },
      {
        name: "black",
        value: "black",
      },
      {
        name: "white",
        value: "white",
      },
    ],
  },
};
