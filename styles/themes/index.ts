import { ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true
  }
}

export const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1280,
      xxl: 1440
    }
  }
}

