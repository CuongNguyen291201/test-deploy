import { AppProps } from "next/app";
import { FC } from "react";
import { wrapper } from "../app/store";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(App);