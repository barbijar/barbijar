import React from 'react';
import Header from './header';

import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';

const breakpoints = ["300px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const customTheme = {
  ...theme,
  breakpoints
};

const Layout = props => (
  <>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Header />
      <main>{props.children}</main>
    </ThemeProvider>
  </>
);

export default Layout;