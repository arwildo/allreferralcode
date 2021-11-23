import React from 'react';

import Navbar from './components/navbar';
import Cards from './components/cards';
import Footer from './components/footer';

export default function(props) {
    return [<Navbar />, <Cards />, <Footer />]
}
