export interface SiteTheme {
  white: string
  black: string
  blue: string
  primaryColor: string
  spacings: string[]
  mdBreakpoint: string
  containerMaxWidth: string
}

export interface SiteThemeProps {
  theme: SiteTheme
}

const baseSpacer = 1
const spacers = [
  0,
  baseSpacer / 4,
  baseSpacer / 2,
  baseSpacer,
  baseSpacer * 1.5,
  baseSpacer * 3,
]

const theme: SiteTheme = {
  white: '#fffaff',
  black: '#0c2340',
  blue: '#2a5db0',
  primaryColor: 'sandybrown',
  spacings: spacers.map((s) => `${s}rem`),
  mdBreakpoint: '768px',
  containerMaxWidth: `900px`,
}

export default theme
