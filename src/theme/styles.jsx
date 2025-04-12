import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/900.css"


export const globalStyles = {
  fonts: {
    heading: `'Poppins', 'sans-serif'`,
    body: `'Poppins', 'sans-serif'`,
  },
  colors: {
    brand: {
      100: "#f2f2f2",
      200: "#d9d9d9",
      300: "#bfbfbf",
      400: "#a6a6a6",
      500: "#000000", // Negro como color principal
      600: "#474242",
      700: "#000000",
      800: "#000000",
      900: "#000000",

      1000: "#000000",  // negro
      1100: "#343434",  // semi negro
      1200: "#ffffff",  // blanco
      1300: "#eaeaea",  // semi blanco
    },
    brandScheme: {
      100: "#f2f2f2",
      200: "#e6e6e6",
      300: "#cccccc",
      400: "#b3b3b3",
      500: "#000000",
      600: "#000000",
      700: "#000000",
      800: "#000000",
      900: "#000000",
    },
    brandTabs: {
      100: "#f2f2f2",
      200: "#d9d9d9",
      300: "#bfbfbf",
      400: "#a6a6a6",
      500: "#000000",
      600: "#000000",
      700: "#000000",
      800: "#000000",
      900: "#000000",
    },
    secondaryGray: {
      100: "#ffffff", // Blanco como color secundario
      200: "#f5f5f5",
      300: "#f0f0f0",
      400: "#e6e6e6",
      500: "#cccccc",
      600: "#b3b3b3",
      700: "#999999",
      800: "#808080",
      900: "#666666",
    },
    red: {
      100: "#FEEFEE",
      500: "#EE5D50",
      600: "#E31A1A",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5",
      500: "#01B574",
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#1B254B",
      800: "#111c44",
      900: "#0b1437",
    },
    gray: {
      100: "#FAFCFE",
    },
    black: {
      100: "#000000",
      200: "#343434",
    },
    white: {
      100: "#ffffff",
      200: "#eaeaea",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.100", "brand.500")(props), // Claro: blanco, oscuro: negro
        fontFamily: "Poppins",
        letterSpacing: "-0.5px",
        // fontWeight: 300, // 👈 peso por defecto
        // fontSize: "42px", // 👈 tamaño por defecto
      },
      input: {
        color: "gray.700",
      },
      html: {
        // fontFamily: "DM Sans",
        fontFamily: "Poppins",
      },
    }),
  },
};
