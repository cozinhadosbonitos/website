import { extendTheme } from '@chakra-ui/react'
const customTheme = {
  fonts: {
    body: 'Lato, "Times New Roman", Times, serif',
    heading: 'Karla, Roboto, Arial, sans-serif',
  },
  colors: {
    primary: '#f4a460',
    primaryDark: '#b66e41',
    secondary: '#e5e5e5',
  },
  styles: {
    global: {
      html: {
        fontSize: '1.25rem',
        overflowY: 'scroll',
      },
      ':where(svg:not([fill]))': {
        fill: 'currentColor',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        marginTop: 6,
        marginBottom: 2,
        lineHeight: '1.1',
        fontWeight: '800',
        textRendering: 'optimizeLegibility',
      },
    },
    Text: {
      baseStyle: {
        marginBottom: 2,
      },
    },
    Link: {
      baseStyle: {
        color: 'primary',
        '&:active, &:hover': {
          textDecoration: 'none',
          color: 'primaryDark',
        },
      },
      variants: {
        currentColor: {
          color: 'currentColor',
          '&:active, &:hover': {
            color: 'currentColor',
            textDecoration: 'underlined',
          },
        },
      },
    },
  },
}

export const theme = extendTheme(customTheme)
