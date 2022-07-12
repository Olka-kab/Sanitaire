import '../styles/globals.css'

import Layout from '../components/Layout'

import { StateContext } from '../components/context/StateContext';

function MyApp({ Component, pageProps }) {
  
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
        
    )

}

export default MyApp
