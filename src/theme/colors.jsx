// src/theme/colors.js
import { generateColorScale } from "@theme/additions/helpers/colorUtils";

export const colors = {
    colors: {
        light: {
            primary: generateColorScale("#fcfcfc"), // blanco
            secondary: generateColorScale("#191919"),   // negro
            text: "#1A202C",
            background: "#FFFFFF",
        },
        dark: { // dark.primary.500
            primary: generateColorScale("#191919"), // negro
            secondary: generateColorScale("#fcfcfc"),   // blanco
            text: "#E2E8F0",
            background: "#000000",
        },
        lightBackground: "#ffffff",
        darkBackground: "#1a202c",
    }
};
