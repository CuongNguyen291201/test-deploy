import { CacheProvider, EmotionCache } from "@emotion/react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, wrapper } from "../app/store";
import ErrorView from "../features/error/ErrorView";
import lightTheme from "../styles/themes/lightTheme";
import "../styles/_global.scss";
import createEmotionCache from "../utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

const App: FC<AppProps & { emotionCache: EmotionCache }> = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={lightTheme}>
      <ErrorBoundary FallbackComponent={({ error }) => <Container><ErrorView message={error.message} /></Container>}>
        <CssBaseline />
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </ErrorBoundary>
    </ThemeProvider>
  </CacheProvider>
);

export default wrapper.withRedux(App);