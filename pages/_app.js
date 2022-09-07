// import '../styles/css/globals.css';
// import '../styles/scss/index.scss';
import SSRProvider from 'react-bootstrap/SSRProvider';

import { RecoilRoot } from 'recoil';
import Layout from '../layouts/IndexPage';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </SSRProvider>

  );
}

export default MyApp;