import "styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: "rgb(6, 43, 75)",
            color: "white",
          },
        }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
