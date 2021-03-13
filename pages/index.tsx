import Head from 'next/head';
import React from 'react';
import { Header } from '../src/components/Header';

const Homepage = () => (
    <div>
        <Head>
            <title>styled components</title>
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💅</text></svg>"></link>
        </Head>
        <div>
            <Header>Homepage!</Header>
        </div>
    </div>
);

export default Homepage;
