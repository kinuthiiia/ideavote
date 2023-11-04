import Head from "next/head";


import "tailwindcss/tailwind.css";
import { ThemeProvider } from 'next-themes';



export default function App(props) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;




  return (
  <ThemeProvider enableSystem={true} attribute="class">
    
        <Head>
          <title>Page title</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
                <Component {...pageProps} />
   
 </ThemeProvider>
  );
}

