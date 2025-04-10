import { mode, transparentize } from '@chakra-ui/theme-tools';

const bgDefault = (props) => {
  return mode(
    "black.100",
    transparentize('navy.600', 0.5)(props.theme)   // 30% opacidad en dark
  )(props)
}

const bgPressed = (props) => {
  return mode(
    "black.200",
    transparentize('navy.500', 0.5)(props.theme)   // 30% opacidad en dark
  )(props)
}

const colorDefault = (props) => mode("white", "white")(props)


export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "16px",
        boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        transition: ".25s all ease",
        boxSizing: "border-box",
        _focus: {
          boxShadow: "none",
        },
        _active: {
          boxShadow: "none",
        },
      },
      variants: {
        outline: () => ({
          borderRadius: "16px",
        }),
        brand: (props) => ({
          bg: bgDefault(props),
          color: colorDefault(props),
          backdropFilter: 'blur(10px)', // 👈 efecto de blur en el fondo
          _focus: {
            bg: bgDefault(props),
          },
          _active: {
            bg : bgPressed(props)
          },
          _hover: {
            // bg: mode("brand.500", "brand.400")(props),
          },
        }),
        // darkMode: (props) => ({
        //   // light,
        //   bg: mode("brand.500", "brand.400")(props),
        //   color: mode("white.100", "black.200")(props),
        //   _focus: {
        //     bg: mode("brand.500", "brand.400")(props),
        //   },
        //   _active: {
        //     // bg: mode("brand.500", "brand.400")(props),
        //     bg: mode("brand.600", "brand.200")(props),
        //   },
        //   _hover: {
        //     bg: mode("brand.500", "brand.400")(props),
        //   },
        // }),
        // darkMode: (props) => ({
        //   bg: bgDefault(props),
        //   color: colorDefault(props),
        //   backdropFilter: 'blur(10px)', // 👈 efecto de blur en el fondo
        //   _focus: {
        //     bg: bgDefault(props),
        //   },
        //   _active: {
        //     bg : bgPressed(props)
        //     // bg: mode('brand.600', // 40% de opacidad en light mode
        //     //   transparentize('brand.400', 0.26)(props.theme)  // 30% de opacidad en dark mode
        //     // )(props),            // bg: bgDefault(props),
        //   },
        //   _hover: {
        //     // bg: mode(
        //     //   transparentize('brand.500', 0.6)(props.theme),
        //     //   transparentize('brand.400', 0.5)(props.theme)
        //     // ),
        //     // bg: mode("brand.500", "brand.400")(props),
        //     // bg: mode(
        //     //   transparentize('brand.600', 0.4)(props.theme), // 40% de opacidad en light mode
        //     //   transparentize('brand.400', 0.3)(props.theme)  // 30% de opacidad en dark mode
        //     // )(props),            // bg: bgDefault(props),
        //   },
        // }),
        darkBrand: (props) => ({
          bg: mode("brand.900", "brand.400")(props),
          color: "white",
          _focus: {
            bg: mode("brand.900", "brand.400")(props),
          },
          _active: {
            bg: mode("brand.900", "brand.400")(props),
          },
          _hover: {
            bg: mode("brand.800", "brand.400")(props),
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
