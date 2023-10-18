import Head from 'next/head';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import MainHero from '@/components/modules/mainHero.jsx/Index';
import ImageContent from '@/components/modules/imageContent/Index';
import CardShowcase from '@/components/modules/cardShowcase/Index';
import ProjectShowcase from '@/components/modules/projectShowcase/Index';
import { landingPageData } from '@/data/Index';
import Contact from '@/components/modules/contact/Index';
import Script from 'next/script';

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

            <Script
                async
                src='https://www.googletagmanager.com/gtag/js?id=G-DEE33CNKP9'
            />
            <Script id='google-analytics'>
                {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-DEE33CNKP9');
                    `}
            </Script>

            <main>
                <MainHero />
                <CardShowcase
                    eyebrow={landingPageData.showcase.eyebrow}
                    heading={landingPageData.showcase.heading}
                    cards={landingPageData.showcase.cards}
                />
                <ProjectShowcase
                    eyebrow={landingPageData.projectShowcase.eyebrow}
                    heading={landingPageData.projectShowcase.heading}
                    projects={landingPageData.projectShowcase.projects}
                />
                <Contact
                    successMessage={landingPageData.contact.successMessage}
                    failedMessage={landingPageData.contact.failedMessage}
                    eyebrow={landingPageData.contact.eyebrow}
                    heading={landingPageData.contact.heading}
                    email={landingPageData.contact.email}
                />
            </main>
        </>
    );
}
