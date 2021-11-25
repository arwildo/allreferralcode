import React from 'react';

import Navbar from './components/navbar';
import Shortcuts from './components/shortcuts';
import Cards from './components/cards';
import Footer from './components/footer';

export default function(props) {
    return [<Navbar />,<Shortcuts />, <Cards />, <Footer />]
}
