import Footer from '@commons/components/footer';
import Header from '@commons/components/header';
// import '../styles/globals.scss';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-w-min min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 py-4 flex flex-col">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
