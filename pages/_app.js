import { SessionProvider } from 'next-auth/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar/Navbar';
import '../styles/globals.css';
import '../styles/layout.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
