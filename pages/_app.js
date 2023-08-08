import '@/styles/globals.css';
import Layout from '@/layout/Index';

export default function App({ Component, pageProps, navData }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
