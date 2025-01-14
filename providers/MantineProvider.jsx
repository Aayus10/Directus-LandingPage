import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import React from "react";

const theme = createTheme({
  components: {
    Button: {
      defaultProps: {
        variant: "filled",
        color: "#ED5942",
        size: "md",
        radius: "xl",
        px: 20,
        py: 5,
      },
    },
    Title: { defaultProps: { fw: 500, style: { fontFamily: "cursive" } } },

    Text: {
      defaultProps: {
        fz: "22px",
        fw: 500,
        style: {
          fontFamily:
            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
        },
      },
    },
  },
});

export default function CustomMantineProvider({ children }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
