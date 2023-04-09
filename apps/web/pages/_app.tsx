import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Import the globals.css file

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
