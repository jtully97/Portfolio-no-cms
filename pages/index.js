import Head from 'next/head';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import MainHero from '@/components/modules/mainHero.jsx/Index';
import ImageContent from '@/components/modules/imageContent/Index';
import CardShowcase from '@/components/modules/cardShowcase/Index';
import { landingPageData } from '@/data/Index';

export default function Home() {
    return (
        <>
            <Head>
                <title>Josh Tully's Portfolio</title>
                <meta name='description' content='Welcome to my portfolio' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <MainHero />
                <CardShowcase
                    eyebrow={landingPageData.showcase.eyebrow}
                    heading={landingPageData.showcase.heading}
                    cards={landingPageData.showcase.cards}
                />
            </main>
        </>
    );
}
