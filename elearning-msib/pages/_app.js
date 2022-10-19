import "../styles/globals.css";
import { AppProvider } from "../Hooks/useAppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
