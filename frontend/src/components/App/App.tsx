import React from "react";
import Header from "components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/global.styles";
import theme from "styles/theme";
import { AppWrapper } from "./App.components";
import UserContextProvider from "context/UserContext/UserContext.provider";
import Main from "components/Main";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <AppWrapper>
            <Header />
            <Main />
          </AppWrapper>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
