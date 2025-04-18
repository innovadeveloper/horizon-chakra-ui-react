// src/theme/color-utils.js
import tinycolor from "tinycolor2";

export const generateColorScale = (baseColor) => ({
  50: tinycolor(baseColor).lighten(40).toHexString(),
  100: tinycolor(baseColor).lighten(30).toHexString(),
  200: tinycolor(baseColor).lighten(20).toHexString(),
  300: tinycolor(baseColor).lighten(10).toHexString(),
  400: tinycolor(baseColor).lighten(5).toHexString(),
  500: tinycolor(baseColor).toHexString(),
  600: tinycolor(baseColor).darken(5).toHexString(),
  700: tinycolor(baseColor).darken(10).toHexString(),
  800: tinycolor(baseColor).darken(15).toHexString(),
  900: tinycolor(baseColor).darken(20).toHexString(),
});
