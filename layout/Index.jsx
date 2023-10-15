import React from 'react';
import Navigation from './nav/Index';
import Footer from './footer/Index';
import StyledComponentsRegistry from '@/lib/registry';
import { navData, footerData } from '@/data/Index';

export default function Layout({ children }) {
    return (
        <>
            <Navigation data={navData} />
            <StyledComponentsRegistry>
                <main id='main'>{children}</main>
            </StyledComponentsRegistry>
            <Footer iconLinks={footerData.iconLinks} />
        </>
    );
}
