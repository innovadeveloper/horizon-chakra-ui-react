import { mode, transparentize } from '@chakra-ui/theme-tools';

// COLORS FOR BUTTONS 

const buttonBackgroundDefault = (props) => {
  return mode(
    "light.secondary.500",
    transparentize("light.primary.500", 0.5)(props.theme)   // 30% opacidad en dark
  )(props)
}

const buttonBackgroundPressed = (props) => {
  return mode(
    "light.secondary.100",
    transparentize('light.primary.100', 0.5)(props.theme)   // 30% opacidad en dark
  )(props)
}

const buttonTextColor = (props) => mode("dark.secondary.500", "dark.primary.500")(props)

export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "10px",
        boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        transition: ".25s all ease",
        boxSizing: "border-box",
        _focus: {
          boxShadow: "none",
        },
        _active: {
          boxShadow: "none",
        },
        _disabled: {
          pointerEvents: "none",  // 🔥 nuevo: evita interacciones accidentales
        }
      },
      variants: {
        outline: () => ({
          borderRadius: "16px",
        }),
        brand: (props) => ({
          bg: buttonBackgroundDefault(props),
          color: buttonTextColor(props),
          backdropFilter: 'blur(10px)', // 👈 efecto de blur en el fondo
          _focus: {
            bg: buttonBackgroundDefault(props),
          },
          _active: {
            bg: buttonBackgroundPressed(props)
          },
          _hover: {
            // bg: mode("brand.500", "brand.400")(props),
          },
        }),
        classic: (props) => ({
          bg: buttonBackgroundDefault(props),
          color: buttonTextColor(props),
          backdropFilter: 'blur(10px)', // 👈 efecto de blur en el fondo
          _focus: {
            bg: buttonBackgroundDefault(props),
          },
          _active: {
            bg: buttonBackgroundPressed(props)
          },
          _hover: {
            // bg: buttonBackgroundPressed(props)
          },
        }),
        lightBrand: (props) => ({
          bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          },
          _active: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _hover: {
            bg: mode("secondaryGray.400", "whiteAlpha.200")(props),
          },
        }),
        light: (props) => ({
          bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          color: mode("secondaryGray.900", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _active: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _hover: {
            bg: mode("secondaryGray.400", "whiteAlpha.200")(props),
          },
        }),
        action: (props) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("secondaryGray.300", "brand.400")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "brand.400")(props),
          },
          _active: { bg: mode("secondaryGray.300", "brand.400")(props) },
          _hover: {
            bg: mode("secondaryGray.200", "brand.400")(props),
          },
        }),
        setup: (props) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("transparent", "brand.400")(props),
          border: mode("1px solid", "0px solid")(props),
          borderColor: mode("secondaryGray.400", "transparent")(props),
          color: mode("secondaryGray.900", "white")(props),
          _focus: {
            bg: mode("transparent", "brand.400")(props),
          },
          _active: { bg: mode("transparent", "brand.400")(props) },
          _hover: {
            bg: mode("secondaryGray.100", "brand.400")(props),
          },
        }),
      },
    },
  },
};
