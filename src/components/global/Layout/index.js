import React from "react";
// import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
