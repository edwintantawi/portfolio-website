import { useEffect } from 'react';
import { analytics } from '../lib/firebase';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      analytics();
    }
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
