import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {

    return (
        <div classname='layout'>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Demo Sanity_Next_Ecommerce</title>
            </Head>
            <Navbar/>
            <main className='main'>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;