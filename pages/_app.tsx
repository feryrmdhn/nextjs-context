import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useReducer } from 'react';
import { AppContext } from '../store';
import { globalState } from '../store/state';
import reducer from '../store/reducer';

function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, globalState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Head>
        <title>Learn Next with Context</title>
      </Head>
      <div className='container mx-auto mt-10 max-h-max'>
        <Component {...pageProps} />
      </div>
    </AppContext.Provider>
  )
}


export default App;
