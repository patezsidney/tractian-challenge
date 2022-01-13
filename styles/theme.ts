import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      100: "#4cf2e2",
      200: "#2563eb",
      300: "#1872F5",
      400: "#1e40af",
      500: "#1e3a8a",
    },
    secondary: {
      200: "rgb(74 222 128)",
      400: "#22c55e",
      600: "#fff",
    },
    defaultGradient: {
      from: "#2563EB",
      to: "#1e3a8a",
    },
    error: "#ef4444",
    success: "#22c55e",
    white: "#ffffff",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body": {
        color: "primary.400",
        backgroundColor: "white",
        padding: 0,
        margin: 0,
        fontFamily: "Poppins, sans-serif",
        fontWeight: 300,
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      "*": {
        boxSizing: "border-box",
      },
      button: {
        cursor: "pointer",
      },
    },
  },
});
